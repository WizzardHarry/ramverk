var map = L.map('map').setView([60.192059,24.945831], 13);

L.tileLayer('https://cdn.digitransit.fi/map/v1/{id}/{z}/{x}/{y}.png', {
  attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, ' +
    '<a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>',
  maxZoom: 19,
  id: 'hsl-map'}).addTo(map);

var points;

document.getElementById("address").addEventListener("change", function(e) {
  fetch("https://api.digitransit.fi/geocoding/v1/search?text="+e.target.value+"&focus.point.lat="+map.getCenter().lat+"&focus.point.lon="+map.getCenter().lng)
    .then(function(response) {
      return response.json();
    })
    .then(function(geojson) {
      if (points) {
        points.removeFrom(map);
      }

      points = L.geoJSON(geojson, {
          pointToLayer: function (feature, latlng) {
              return L.marker(latlng);
          },
          onEachFeature: function(feature, layer) {
              if (feature.properties) {
                  layer.bindPopup(feature.properties.label);
              }
          }
      }).addTo(map);
      map.flyToBounds(points.getBounds())
    });
});