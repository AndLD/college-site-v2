let mymap = L.map('mapid').setView([47.925581, 33.326139], 15);

let marker = L.marker([47.925581, 33.326139]).addTo(mymap)
marker.bindPopup("<b>Відокремлений структурний підрозділ 'Криворізький фаховий коледж НАУ'</b>").openPopup()

// Set up the OSM layer
L.tileLayer(
    'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
).addTo(mymap);