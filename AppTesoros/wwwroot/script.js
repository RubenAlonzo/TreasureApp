
var mymap

function iniciarMapa() {

    mymap = L.map('mapid').setView([19.0, - 70.666664], 6);
    L.tileLayer('https://api.maptiler.com/maps/streets/{z}/{x}/{y}.png?key=cOVnAUe1qVgLGzWjw6mI', {
        attribution: '<a href="https://www.maptiler.com/copyright/" target="_blank">&copy; MapTiler</a> <a href="https://www.openstreetmap.org/copyright" target="_blank">&copy; OpenStreetMap contributors</a>',
        maxZoom: 18
    }).addTo(mymap);
}

function agregarMarcadores(nombre,descripcion, lugar,valor, lat, lon) {

    var marker = L.marker([lat, lon]).bindPopup(`<b>${nombre}<b><br><p>"${descripcion}"</p><b>Place: ${lugar}</b><br><p>Value: ${valor}</p>`).addTo(mymap);

    //var marker = L.marker([lat, lon]).bindPopup(`<b>${nombre}<b><br><p>${descripcion}</p><br><b>${lugar}</b><br><p>${fecha}</p><br><p>Valor: ${valor}</p>`).addTo(mymap);
}

function notificacion(texto) {
    alert(texto);
}
