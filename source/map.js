import '/source/styles/styleMap.css';


let map = document.querySelector('#map');

function myMap() {
    let mapCanvas = document.getElementById("map");
    let mapOptions = {
        center: new google.maps.LatLng(51.5, -0.2),
        zoom: 10
    };
    let map = new google.maps.Map(mapCanvas, mapOptions);
}