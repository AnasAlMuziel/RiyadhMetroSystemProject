from flask import Flask, request, redirect, url_for, render_template, flash, session
from pymongo import MongoClient
from bson import ObjectId
from werkzeug.security import generate_password_hash, check_password_hash
from functools import wraps

app = Flask(__name__)
app.secret_key = 'your-secret-key-here'  # Required for flash messages and sessions

# MongoDB connection
client = MongoClient("mongodb://localhost:27017/")  # Replace with your MongoDB URI
db = client['project']  # Database name

# Collections
users_collection = db['users']
missing_collection = db['Missing belongings']
suggestions_collection = db['Suggestions']
complaints_collection = db['complaints']

# Login required decorator
def login_required(f):
    @wraps(f)
    def decorated_function(*args, **kwargs):
        if 'user_id' not in session:
            flash("Please login first", "error")
            return redirect(url_for('login_form'))
        return f(*args, **kwargs)
    return decorated_function

@app.route('/register', methods=['POST'])
def register_user():
    try:
        # Get form data
        data = {
            "firstname": request.form.get('firstname', '').strip(),
            "lastname": request.form.get('lastname', '').strip(),
            "gender": request.form.get('gender', '').strip(),
            "phone_number": request.form.get('phone_number', '').strip(),
            "birthday": request.form.get('birthday', '').strip(),
            "email": request.form.get('email', '').strip(),
            "password": request.form.get('password', '').strip()
        }
        password_confirmation = request.form.get('password_confirmation', '').strip()

        # Validate input
        if not all([data["firstname"], data["lastname"], data["email"], data["password"]]):
            flash("Missing required fields", "error")
            return redirect(url_for('register_form'))

        if data["password"] != password_confirmation:
            flash("Passwords do not match", "error")
            return redirect(url_for('register_form'))

        # Check if email already exists
        if users_collection.find_one({"email": data["email"]}):
            flash("Email already registered", "error")
            return redirect(url_for('register_form'))

        # Hash the password
        data["password"] = generate_password_hash(data["password"])

        # Insert into MongoDB
        users_collection.insert_one(data)
        flash("Registration successful! Please login.", "success")
        return redirect(url_for('login_form'))

    except Exception as e:
        flash(f"Error: {str(e)}", "error")
        return redirect(url_for('register_form'))

@app.route('/verify-reset-credentials', methods=['POST'])
def verify_reset_credentials():
    try:
        email = request.form.get('email', '').strip()
        birthday = request.form.get('birthday', '').strip()
        source_page = request.form.get('source_page', 'forgotEN.html')

        # Find user by email and birthday
        user = users_collection.find_one({
            "email": email,
            "birthday": birthday
        })

        if not user:
            flash("Invalid email or birthday", "error")
            return redirect(url_for('forgot_en' if source_page == 'forgotEN.html' else 'forgot_ar'))

        # Store user email in session for password reset
        session['reset_email'] = email
        
        # Redirect to appropriate reset password page
        if source_page == 'forgotAR.html':
            return redirect(url_for('reset_ar'))
        return redirect(url_for('reset_en'))

    except Exception as e:
        flash(f"Error: {str(e)}", "error")
        return redirect(url_for('forgot_en' if source_page == 'forgotEN.html' else 'forgot_ar'))

@app.route('/reset-password', methods=['POST'])
def reset_password():
    if 'reset_email' not in session:
        flash("Password reset session expired", "error")
        return redirect(url_for('forgot_en' if request.form.get('source_page', 'resetEN.html') == 'resetEN.html' else 'forgot_ar'))
    try:
        password = request.form.get('password', '').strip()
        confirm_password = request.form.get('confirm_password', '').strip()
        source_page = request.form.get('source_page', 'resetEN.html')

        if not password or not confirm_password:
            flash("Please enter both password fields", "error")
            return redirect(url_for('reset_en' if source_page == 'resetEN.html' else 'reset_ar'))

        if password != confirm_password:
            flash("Passwords do not match", "error")
            return redirect(url_for('reset_en' if source_page == 'resetEN.html' else 'reset_ar'))

        # Get email from session
        reset_email = session.get('reset_email')
        if not reset_email:
            flash("Password reset session expired", "error")
            return redirect(url_for('forgot_en' if source_page == 'resetEN.html' else 'forgot_ar'))

        # Update password in database
        hashed_password = generate_password_hash(password)
        users_collection.update_one(
            {"email": reset_email},
            {"$set": {"password": hashed_password}}
        )

        # Clear reset email from session
        session.pop('reset_email', None)

        flash("Password has been reset successfully", "success")
        return redirect(url_for('login_form'))

    except Exception as e:
        flash(f"Error: {str(e)}", "error")
        return redirect(url_for('reset_en' if source_page == 'resetEN.html' else 'reset_ar'))

@app.route('/login', methods=['POST'])
def login_user():
    try:
        email = request.form.get('email', '').strip()
        password = request.form.get('password', '').strip()
        source_page = request.form.get('source_page', 'loginEN.html')

        user = users_collection.find_one({"email": email})
        if not user or not check_password_hash(user['password'], password):
            flash("Invalid email or password", "error")
            return redirect(url_for('login_form'))

        session['user_id'] = str(user['_id'])
        session['firstname'] = user['firstname']

        if source_page == 'loginAR.html':
            return redirect(url_for('homepage_ar'))
        return redirect(url_for('homepage'))

    except Exception as e:
        flash(f"Error: {str(e)}", "error")
        return redirect(url_for('login_form'))

@app.route('/homepage')
@login_required
def homepage():
    return render_template("homepage.html", firstname=session.get('firstname', 'User'))

@app.route('/homepage_ar')
@login_required
def homepage_ar():
    return render_template("homepagear.html", firstname=session.get('firstname', 'User'))

@app.route('/user-profile')
@login_required
def user_profile():
    try:
        user = users_collection.find_one({"_id": ObjectId(session['user_id'])})
        if not user:
            flash("User not found", "error")
            return redirect(url_for('homepage'))

        source_page = request.args.get('source_page', '')
        template = "UserAR.html" if source_page in ['UserAR.html', 'homepagear.html', 'PlanAR.html', 'PathsAR.html'] else "User.html"

        user_data = {
            "firstname": user.get("firstname", ""),
            "lastname": user.get("lastname", ""),
            "email": user.get("email", ""),
            "phone_number": user.get("phone_number", ""),
            "gender": user.get("gender", ""),
            "birthday": user.get("birthday", ""),
        }

        return render_template(template, user=user_data)

    except Exception as e:
        flash(f"Error: {str(e)}", "error")
        return redirect(url_for('homepage'))

@app.route('/submit_contact_form', methods=['POST'])
@login_required
def submit_contact_form():
    try:
        choice = request.form.get('choice')
        text = request.form.get('text', '').strip()
        source_page = request.form.get('source_page', 'ContactEN.html')

        if not choice or not text:
            flash("All fields are required.", "error")
            return redirect(url_for('contact_form'))

        user = users_collection.find_one({"_id": ObjectId(session['user_id'])})
        if not user:
            flash("User data not found.", "error")
            return redirect(url_for('login_form'))

        user_data = {
            "firstname": user.get("firstname", ""),
            "lastname": user.get("lastname", ""),
            "email": user.get("email", ""),
            "phone_number": user.get("phone_number", ""),
            "text": text
        }

        # Map collections
        collections_map = {
            'Missing': missing_collection,
            'Suggestions': suggestions_collection,
            'complaints': complaints_collection
        }

        if choice not in collections_map:
            flash("Invalid selection.", "error")
            return redirect(url_for('contact_form'))

        collections_map[choice].insert_one(user_data)
        flash("Your message has been submitted successfully.", "success")

        return redirect(url_for('contact_form_ar' if source_page == 'ContactAR.html' else 'contact_form'))

    except Exception as e:
        flash(f"Error: {str(e)}", "error")
        return redirect(url_for('contact_form'))

# Route handlers for forms
@app.route('/register', methods=['GET'])
def register_form():
    return render_template("SignupEN.html")

@app.route('/login', methods=['GET'])
def login_form():
    return render_template("loginEN.html")

@app.route('/login-ar', methods=['GET'])
def login_form_ar():
    return render_template("loginAR.html")

@app.route('/contact_form', methods=['GET'])
@login_required
def contact_form():
    return render_template("ContactEN.html")

@app.route('/contact_form_ar', methods=['GET'])
@login_required
def contact_form_ar():
    return render_template("ContactAR.html")

# Additional routes
@app.route('/logout')
def logout():
    session.clear()
    flash("You have been logged out successfully", "success")
    return redirect(url_for('login_form'))

@app.route('/forgot-password-ar', methods=['GET'])
def forgot_ar():
    return render_template("forgotAR.html")

@app.route('/forgot-password')
def forgot_en():
    return render_template("forgotEN.html")

@app.route('/paths')
@login_required
def paths():
    return render_template("Paths.html")

@app.route('/paths-ar')
@login_required
def paths_ar():
    return render_template("PathsAR.html")

@app.route('/plan-ar')
@login_required
def plan_ar():
    return render_template("PlanAR.html")

@app.route('/plan')
@login_required
def plan_en():
    return render_template("PlanEN.html")

@app.route('/reset-password-ar')
def reset_ar():
    if 'reset_email' not in session:
        flash("Please verify your email first", "error")
        return redirect(url_for('forgot_ar'))
    return render_template("resetAR.html")

@app.route('/reset-password')
def reset_en():
    if 'reset_email' not in session:
        flash("Please verify your email first", "error")
        return redirect(url_for('forgot_en'))
    return render_template("resetEN.html")

@app.route('/signup-a')
def signup_ar():
    return render_template("SignupAR.html")

@app.route('/signup')
def signup_en():
    return render_template("SignupEN.html")

@app.route('/premium2hrs')
@login_required
def premium2hrs():
    return render_template("premium2hrs.html")

@app.route('/premium2hrs-ar')
@login_required
def premium2hrs_ar():
    return render_template("premium2hrsAR.html")

@app.route('/premium3days')
@login_required
def premium3days():
    return render_template("premium3days.html")

@app.route('/premium3days-ar')
@login_required
def premium3days_ar():
    return render_template("premium3daysAR.html")

@app.route('/premium7days')
@login_required
def premium7days():
    return render_template("premium7days.html")

@app.route('/premium7days-ar')
@login_required
def premium7days_ar():
    return render_template("premium7daysAR.html")

@app.route('/regular2hrs')
@login_required
def regular2hrs():
    return render_template("regular2hours.html")

@app.route('/regular2hrs-ar')
@login_required
def regular2hrs_ar():
    return render_template("regular2hoursAR.html")

@app.route('/regular3days')
@login_required
def regular3days():
    return render_template("regualr3days.html")

@app.route('/regular3days-ar')
@login_required
def regular3days_ar():
    return render_template("regualr3daysAR.html")

@app.route('/regular7days')
@login_required
def regular7days():
    return render_template("regular7days.html")

@app.route('/regular7days-ar')
@login_required
def regular7days_ar():
    return render_template("regular7daysAR.html")

@app.route('/tickets')
@login_required
def tickets():
    return render_template("tickets.html")

@app.route('/tickets-ar')
@login_required
def tickets_ar():
    return render_template("ticketsAR.html")

@app.route('/id')
@login_required
def id():
    try:
        user = users_collection.find_one({"_id": ObjectId(session['user_id'])})
        if not user:
            flash("User not found", "error")
            return redirect(url_for('homepage'))

        return render_template("id.html", user=user)

    except Exception as e:
        flash(f"Error: {str(e)}", "error")
        return redirect(url_for('homepage'))

@app.route('/id-ar')
@login_required
def id_ar():
    try:
        user = users_collection.find_one({"_id": ObjectId(session['user_id'])})
        if not user:
            flash("User not found", "error")
            return redirect(url_for('homepage_ar'))

        return render_template("idAR.html", user=user)

    except Exception as e:
        flash(f"Error: {str(e)}", "error")
        return redirect(url_for('homepage_ar'))
@app.route('/about')
@login_required
def about():
    return render_template("About.html")

@app.route('/about-ar')
@login_required
def about_ar():
    return render_template("AboutAR.html")


if __name__ == '__main__':
    app.run(debug=True)