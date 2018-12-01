var mymap = L.map('map1').setView([28.664483, -82.111740], 7);
L.tileLayer('https://api.mapbox.com/styles/v1/jtbaker96/cjp4f9gyz02k12sn22k4lhx40/tiles/256/{z}/{x}/{y}@2x?access_token=pk.eyJ1IjoianRiYWtlcjk2IiwiYSI6ImNqcDRmeDg2YTBrYWgzcG1uaGpyb2ZjbHkifQ.mcrxKsmKiH8phOS05yHo-g', {
  attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
  maxZoom: 18
}).addTo(mymap);

let marker1 = L.marker([28.040510, -81.954109]).addTo(mymap);
let marker2 = L.marker([28.025881, -81.732880]).addTo(mymap);
let marker3 = L.marker([29.651634, -82.324829]).addTo(mymap);
let marker4 = L.marker([29.187199, -82.140091]).addTo(mymap);

marker1.bindPopup("<b>Lakeland, FL</b><br>Joshua Baker's hometown.").openPopup();
marker2.bindPopup("<b>Winter Haven, FL</b>");
marker3.bindPopup("<b>Gainesville, FL</b>");
marker4.bindPopup("<b>Ocala, FL</b>");
