let map = L.map('map').setView([0,0], 13);

L.tileLayer('https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png', {
maxZoom: 19,
attribution: '&copy; OpenStreetMap'
}).addTo(map);
let marker;

function success(position){

let lat = position.coords.latitude;
let lon = position.coords.longitude;

document.getElementById("lat").textContent = lat;
document.getElementById("lon").textContent = lon;

if(marker){
marker.setLatLng([lat,lon]);
}else{
marker = L.marker([lat,lon]).addTo(map);
}

map.setView([lat,lon], 15);
}

function error(){

document.getElementById("error").textContent =
"Error: PERMISO DE LOCALIZACION DENEGADO";
}

if(navigator.geolocation){

navigator.geolocation.watchPosition(success,error);

}else{

document.getElementById("error").textContent =
"Tu navegador no soporta LOCALIZACION";

}