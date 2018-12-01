var mymap = L.map('map1').setView([38.707, -106.126], 7);
L.tileLayer('https://api.mapbox.com/styles/v1/jtbaker96/cjp4o65n206p72snuh8q5m4po/tiles/256/{z}/{x}/{y}@2x?access_token=pk.eyJ1IjoianRiYWtlcjk2IiwiYSI6ImNqcDRrYWN5bDAzYjIza3Blb3hpZ28zNGcifQ.pSFSzOiRecYrH5tXnpG8yw', {
  attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
  maxZoom: 18
}).addTo(mymap);

for ( let i = 0; i < places.length; i++ ) {
  L.marker( [ places[i].lat, places[i].long ] )
  .bindPopup( '<h3>' + places[i].placeName + '</h3>' + '<p>' +
    places[i].descrip + '</p>')
  .addTo( mymap );
}
