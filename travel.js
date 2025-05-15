
let map;

function initMap(){

    map = new google.maps.Map(document.getElementById("map"),{

        center: {lat: 47.559, lng: 10.378},
        Zoom: 2,
        minZoom: 2,
        maxZoom: 18,
       
  
    });
}

window.initMap = initMap;