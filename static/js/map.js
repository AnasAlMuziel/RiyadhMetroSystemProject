const metroStations = {
    yellow: [
        { name: 'Airport T1-2', lat: 24.961035, lng: 46.699119, showMarker: true },
        { name: 'Airport T3-4', lat: 24.9561451150526, lng: 46.7022528011584, showMarker: true },
        { name: 'Airport T5', lat: 24.9410118810569, lng: 46.7109215436514, showMarker: true },
        { name: '', lat: 24.919555, lng: 46.722828, showMarker: false },
        { name: '', lat: 24.913621, lng: 46.723016, showMarker: false },
        { name: '', lat: 24.910361, lng: 46.720864, showMarker: false },
        { name: '', lat: 24.900364, lng: 46.702597, showMarker: false },
        { name: '', lat: 24.895446, lng: 46.697593, showMarker: false },
        { name: '', lat: 24.892943, lng: 46.696085, showMarker: false },
        { name: '', lat: 24.887163, lng: 46.694313, showMarker: false },
        { name: '', lat: 24.875460, lng: 46.694763, showMarker: false },
        { name: 'PNU 2', lat: 24.859721, lng: 46.704716, showMarker: true },
        { name: '', lat: 24.849869, lng: 46.710385, showMarker: false },
        { name: '', lat: 24.848905, lng: 46.711511, showMarker: false },
        { name: '', lat: 24.845031, lng: 46.714670, showMarker: false },
        { name: '', lat: 24.843392, lng: 46.716845, showMarker: false },
        { name: 'PNU 1', lat: 24.841858, lng: 46.717383, showMarker: true },
        { name: '', lat: 24.838042, lng: 46.718020, showMarker: false },
        { name: '', lat: 24.831859, lng: 46.721702, showMarker: false },
        { name: '', lat: 24.830373, lng: 46.721404, showMarker: false },
        { name: '', lat: 24.821139, lng: 46.716156, showMarker: false },
        { name: '', lat: 24.817197, lng: 46.714517, showMarker: false },
        { name: '', lat: 24.812545, lng: 46.713204, showMarker: false },
        { name: '', lat: 24.809600, lng: 46.713452, showMarker: false },
        { name: 'SABIC', lat: 24.8071510469124, lng: 46.7095830538778, showMarker: true },
        { name: 'Uthman Bin Affan Road', lat: 24.8014266428389, lng: 46.6962161224483, showMarker: true },
        { name: 'Ar Rabi', lat: 24.7862173626048, lng: 46.6601128311745, showMarker: true },
        { name: '', lat: 24.779105, lng: 46.643612, showMarker: false },
        { name: '', lat: 24.774045, lng: 46.641412, showMarker: false },
        { name: '', lat: 24.770481, lng: 46.642833, showMarker: false },
        { name: '', lat: 24.768812, lng: 46.642579, showMarker: false },
        { name: 'KAFD', lat: 24.7678740402426, lng: 46.6430089081625, showMarker: true }
    ],
    purple: [
        { name: 'KAFD', lat: 24.7678740402426, lng: 46.6430089081625, showMarker: true },
        { name: '', lat: 24.768812, lng: 46.642579, showMarker: false },
        { name: '', lat: 24.770481, lng: 46.642833, showMarker: false },
        { name: '', lat: 24.774045, lng: 46.641412, showMarker: false },
        { name: '', lat: 24.779105, lng: 46.643612, showMarker: false },
        { name: 'Ar Rabi', lat: 24.7862173626048, lng: 46.6601128311745, showMarker: true },
        { name: 'Uthman Bin Affan Road', lat: 24.8014266428389, lng: 46.6962161224483, showMarker: true },
        { name: 'SABIC', lat: 24.8071510469124, lng: 46.7095830538778, showMarker: true },
        { name: '', lat: 24.808323, lng: 46.714003, showMarker: false },
        { name: '', lat: 24.796162, lng: 46.720050, showMarker: false },
        { name: '', lat: 24.794496, lng: 46.720279, showMarker: false },
        { name: '', lat: 24.793048, lng: 46.719886, showMarker: false },
        { name: '', lat: 24.791741, lng: 46.719950, showMarker: false },
        { name: '', lat: 24.789834, lng: 46.721955, showMarker: false },
        { name: '', lat: 24.788190, lng: 46.724017, showMarker: false },
        { name: '', lat: 24.785654, lng: 46.725747, showMarker: false },
        { name: '', lat: 24.785591, lng: 46.727176, showMarker: false },
        { name: 'Granadia', lat: 24.7865272753978, lng: 46.7292831080613, showMarker: true },
        { name: '', lat: 24.799901, lng: 46.761625, showMarker: false },
        { name: 'Al Yarmuk', lat: 24.7912982035996, lng: 46.7662397988552, showMarker: true },
        { name: '', lat: 24.787431, lng: 46.768307, showMarker: false },
        { name: 'Al Hamra', lat: 24.776459, lng: 46.776412, showMarker: true },
        { name: '', lat: 24.764807, lng: 46.785047, showMarker: false },
        { name: '', lat: 24.763527, lng: 46.785243, showMarker: false },
        { name: 'Al Andalus', lat: 24.756780276022, lng: 46.7904404126127, showMarker: true },
        { name: '', lat: 24.745833, lng: 46.798346, showMarker: false },
        { name: '', lat: 24.745211, lng: 46.798504, showMarker: false },
        { name: '', lat: 24.742532, lng: 46.797578, showMarker: false },
        { name: '', lat: 24.741788, lng: 46.797818, showMarker: false },
        { name: 'Khurais Road', lat: 24.740813, lng: 46.798528, showMarker: true },
        { name: '', lat: 24.738985, lng: 46.799873, showMarker: false },
        { name: '', lat: 24.738613, lng: 46.800005, showMarker: false },
        { name: '', lat: 24.737971, lng: 46.800115, showMarker: false },
        { name: '', lat: 24.737764, lng: 46.800114, showMarker: false },
        { name: 'As Salam', lat: 24.7227505033675, lng: 46.8113891250413, showMarker: true },
        { name: 'An Naseem', lat: 24.7006600279772, lng: 46.8273611707952, showMarker: true }
    ],
    red: [
        { name: 'King Saud University', lat: 24.7103062218672, lng: 46.6283573858765, showMarker: true },
        { name: '', lat: 24.715455, lng: 46.632796, showMarker: false },
        { name: '', lat: 24.715379, lng: 46.634382, showMarker: false },
        { name: 'King Salman Oasis', lat: 24.7170630090742, lng: 46.6386071632697, showMarker: true },
        { name: 'KACST', lat: 24.7211022175657, lng: 46.6481382884355, showMarker: true },
        { name: 'At Takhassussi', lat: 24.7238439086365, lng: 46.6545792090235, showMarker: true },
        { name: 'stc', lat: 24.7286172444789, lng: 46.665673402784, showMarker: true },
        { name: 'Al Wurud', lat: 24.7333496017795, lng: 46.6770909900467, showMarker: true },
        { name: 'King Abdulaziz Road', lat: 24.7368253219394, lng: 46.6853554906618, showMarker: true },
        { name: 'Ministry of Education', lat: 24.740718, lng: 46.694720, showMarker: true },
        { name: 'An Nuzhah', lat: 24.7481900854673, lng: 46.7122959660363, showMarker: true },
        { name: 'Riyadh Exhibition Center', lat: 24.7546021927314, lng: 46.7271091850735, showMarker: true },
        { name: '', lat: 24.761657, lng: 46.743226, showMarker: false },
        { name: 'Khalid Bin Alwaleed Road', lat: 24.767765, lng: 46.759142, showMarker: true },
        { name: '', lat: 24.771846, lng: 46.768902, showMarker: false },
        { name: 'Al Hamra', lat: 24.776459, lng: 46.776412, showMarker: true },
        { name: '', lat: 24.777922, lng: 46.781011, showMarker: false },
        { name: '', lat: 24.779268, lng: 46.788668, showMarker: false },
        { name: '', lat: 24.780578, lng: 46.791878, showMarker: false },
        { name: 'Al Khaleej', lat: 24.7822455169668, lng: 46.794473848239, showMarker: true },
        { name: 'Ishbiliyah', lat: 24.7924317817852, lng: 46.8109399673992, showMarker: true },
        { name: '', lat: 24.801403, lng: 46.826376, showMarker: false },
        { name: '', lat:24.792418, lng:46.834682, showMarker: false },
        { name: 'King Fahad Sport City', lat: 24.7930678858698, lng: 46.8365958519172, showMarker: true }
    ]
};
let map;
let activeLines = {};
let markers = [];
let routePath;
let customStartMarker = null;
let customDestMarker = null;

function initMap() {
    map = L.map('map').setView([24.7936, 46.7453], 12);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
        attribution: '© OpenStreetMap contributors'
    }).addTo(map);

    const customPopupOptions = {
        className: 'custom-popup'
    };

    Object.keys(metroStations).forEach(color => {
        drawMetroLine(color);
        addStationMarkers(color);
    });

    populateStationDropdowns();

    document.getElementById('route-form').addEventListener('submit', handleRouteSubmission);

    map.on('click', function(e) {
        const lat = e.latlng.lat;
        const lng = e.latlng.lng;
        
        const popup = L.popup(customPopupOptions)
            .setLatLng(e.latlng)
            .setContent(`
                <div class="popup-content">
                    <h3 style="font-weight: 600; margin-bottom: 0.5rem">Set Location As:</h3>
                    <button class="popup-button start" onclick="setLocationAs('start', ${lat}, ${lng})">
                        My Location
                    </button>
                    <button class="popup-button destination" onclick="setLocationAs('destination', ${lat}, ${lng})">
                        Destination
                    </button>
                </div>
            `)
            .openOn(map);
    });
}

function setLocationAs(type, lat, lng) {
    const markerOptions = {
        start: {
            icon: L.divIcon({
                className: 'custom-div-icon',
                html: `<div style="background-color: #3b82f6; width: 12px; height: 12px; border-radius: 50%; border: 2px solid white;"></div>`,
                iconSize: [12, 12],
                iconAnchor: [6, 6]
            }),
            marker: customStartMarker
        },
        destination: {
            icon: L.divIcon({
                className: 'custom-div-icon',
                html: `<div style="background-color: #22c55e; width: 12px; height: 12px; border-radius: 50%; border: 2px solid white;"></div>`,
                iconSize: [12, 12],
                iconAnchor: [6, 6]
            }),
            marker: customDestMarker
        }
    };

    if (markerOptions[type].marker) {
        map.removeLayer(markerOptions[type].marker);
    }

    const newMarker = L.marker([lat, lng], {
        icon: markerOptions[type].icon
    }).addTo(map);

    if (type === 'start') {
        customStartMarker = newMarker;
        const nearestStart = findNearestStation(lat, lng);
        if (nearestStart) {
            document.getElementById('start').value = nearestStart.name;
        }
    } else {
        customDestMarker = newMarker;
        const nearestDest = findNearestStation(lat, lng);
        if (nearestDest) {
            document.getElementById('destination').value = nearestDest.name;
        }
    }

    map.closePopup();
}

function drawMetroLine(color) {
    const coordinates = metroStations[color].map(station => [station.lat, station.lng]);
    const lineColors = {
        purple: '#a102c9',
        red: '#cc0000',
        yellow: '#f3ef17'
    };

    const line = L.polyline(coordinates, {
        color: lineColors[color],
        weight: 4,
        opacity: 1.0
    }).addTo(map);

    activeLines[color] = line;
}

function addStationMarkers(color) {
    metroStations[color].forEach(station => {
        if (station.showMarker && station.name) {
            const marker = L.circleMarker([station.lat, station.lng], {
                radius: 6,
                fillColor: '#fff',
                color: getLineColor(color),
                weight: 1.5,
                opacity: 1,
                fillOpacity: 1
            }).addTo(map);

            marker.bindPopup(`
                <strong>${station.name}</strong><br>
                Line: ${color.charAt(0).toUpperCase() + color.slice(1)}<br>
                Operating Hours: 6:00 AM - 12:00 AM
            `);

            markers.push({ marker, color });
        }
    });
}

function getLineColor(color) {
    const colors = {
        purple: '#a102c9',
        red: '#cc0000',
        yellow: '#f3ef17'
    };
    return colors[color];
}

function findStation(name) {
    for (const [line, stations] of Object.entries(metroStations)) {
        const station = stations.find(s => s.name === name && s.showMarker);
        if (station) {
            return { ...station, line };
        }
    }
    return null;
}

function calculateDistance(lat1, lon1, lat2, lon2) {
    const R = 6371;
    const dLat = (lat2 - lat1) * Math.PI / 180;
    const dLon = (lon2 - lon1) * Math.PI / 180;
    const a = Math.sin(dLat/2) * Math.sin(dLat/2) +
              Math.cos(lat1 * Math.PI / 180) * Math.cos(lat2 * Math.PI / 180) * 
              Math.sin(dLon/2) * Math.sin(dLon/2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
    return R * c;
}

function findTransferStations(startLine, endLine) {
    const transfers = [];
    const startStations = metroStations[startLine].filter(s => s.showMarker && s.name);
    const endStations = metroStations[endLine].filter(s => s.showMarker && s.name);

    startStations.forEach(startStation => {
        endStations.forEach(endStation => {
            if (startStation.name === endStation.name) {
                transfers.push(startStation.name);
            }
        });
    });

    return transfers;
}

function getStationsBetween(line, start, end) {
    const stations = metroStations[line];
    const startIndex = stations.findIndex(s => s.name === start.name);
    const endIndex = stations.findIndex(s => s.name === end.name);
    
    if (startIndex === -1 || endIndex === -1) return [];
    
    const isForward = startIndex < endIndex;
    const route = [];
    
    if (isForward) {
        for (let i = startIndex; i <= endIndex; i++) {
            route.push(stations[i]);
        }
    } else {
        for (let i = startIndex; i >= endIndex; i--) {
            route.push(stations[i]);
        }
    }
    
    return route;
}

function findBestRoute(startStation, endStation) {
    const start = findStation(startStation);
    const end = findStation(endStation);

    if (!start || !end) {
        return null;
    }

    if (start.line === end.line) {
        const routeStations = getStationsBetween(start.line, start, end);
        return {
            route: routeStations,
            transfers: [],
            line: start.line
        };
    }

    const transfers = findTransferStations(start.line, end.line);
    
    if (transfers.length > 0) {
        let bestTransfer = transfers[0];
        let shortestDistance = Infinity;
        let bestRoute = null;

        transfers.forEach(transferName => {
            const transfer = findStation(transferName);
            const totalDistance = 
                calculateDistance(start.lat, start.lng, transfer.lat, transfer.lng) +
                calculateDistance(transfer.lat, transfer.lng, end.lat, end.lng);

            if (totalDistance < shortestDistance) {
                shortestDistance = totalDistance;
                bestTransfer = transferName;
                
                const firstLegStations = getStationsBetween(start.line, start, transfer);
                const secondLegStations = getStationsBetween(end.line, transfer, end);
                
                secondLegStations.shift();
                
                bestRoute = [...firstLegStations, ...secondLegStations];
            }
        });

        return {
            route: bestRoute,
            transfers: [bestTransfer],
            lines: [start.line, end.line]
        };
    }

    return null;
}

function handleRouteSubmission(e) {
    e.preventDefault();

    const startStation = document.getElementById('start').value;
    const endStation = document.getElementById('destination').value;
    const routeInfo = document.getElementById('route-info');

    if (!startStation || !endStation) {
        routeInfo.innerHTML = '<p style="color: #dc2626">Please select both start and destination stations.</p>';
        return;
    }

    if (routePath) {
        map.removeLayer(routePath);
    }

    const route = findBestRoute(startStation, endStation);

    if (!route) {
        routeInfo.innerHTML = '<p style="color: #dc2626">Could not find a valid route between these stations.</p>';
        return;
    }

    const coordinates = route.route.map(station => [station.lat, station.lng]);
    routePath = L.polyline(coordinates, {
        color: '#000',
        weight: 3,
        opacity: 0.8,
        dashArray: '10, 10',
        smoothFactor: 1
    }).addTo(map);

    map.fitBounds(routePath.getBounds(), { padding: [50, 50] });

    let routeHtml = `
        <div class="route-info">
            <h4 style="margin: 0 0 1rem 0">Route Details</h4>
            <p><strong>From:</strong> ${startStation}</p>
    `;

    if (route.transfers && route.transfers.length > 0) {
        routeHtml += `
            <div class="transfer-info">
                <p><strong>Transfer at:</strong> ${route.transfers.join(', ')}</p>
                <p>Change from ${route.lines[0]} line to ${route.lines[1]} line</p>
            </div>
        `;
    }

    const distance = calculateDistance(
        route.route[0].lat,
        route.route[0].lng,
        route.route[route.route.length - 1].lat,
        route.route[route.route.length - 1].lng
    );

    routeHtml += `
            <p><strong>To:</strong> ${endStation}</p>
            <div class="time-estimate">
                <p>Estimated travel time: ${Math.round(distance * 3)} minutes</p>
                <p>Approximate distance: ${distance.toFixed(1)} km</p>
            </div>
        </div>
    `;

    routeInfo.innerHTML = routeHtml;
}

function populateStationDropdowns() {
    const startSelect = document.getElementById('start');
    const destSelect = document.getElementById('destination');
    
    const stations = new Set();
    Object.values(metroStations).forEach(line => {
        line.forEach(station => {
            if (station.showMarker && station.name) {
                stations.add(station.name);
            }
        });
    });

    [...stations].sort().forEach(station => {
        const startOption = new Option(station, station);
        const destOption = new Option(station, station);
        startSelect.add(startOption);
        destSelect.add(destOption);
    });
}

function findNearestStation(lat, lng) {
    let nearestStation = null;
    let shortestDistance = Infinity;

    Object.values(metroStations).forEach(line => {
        line.forEach(station => {
            if (station.showMarker && station.name) {
                const distance = calculateDistance(lat, lng, station.lat, station.lng);
                if (distance < shortestDistance) {
                    shortestDistance = distance;
                    nearestStation = station;
                }
            }
        });
    });

    return nearestStation;
}

window.addEventListener('load', initMap);