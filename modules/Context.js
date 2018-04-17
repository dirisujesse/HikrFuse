var Observable = require("FuseJS/Observable");
var Backend = require("./Backend");
var hikes = Observable();
var pictures = Observable();

Backend.getHikes()
  .then(function(hikedata) {
    hikes.replaceAll(hikedata);
  })
  .catch(err => console.log(err));

Backend.getPictures()
  .then(function(pics) {
    pictures.replaceAll(pics);
  })
  .catch(err => console.log(err))

function updateHike(id, name, location, distance, rating, comments) {
  for (var i = 0; i < hikes.length; i++) {
    var hike = hikes.getAt(i);
    if (hike.id == id) {
      hike.name = name;
      hike.location = location;
      hike.distance = distance;
      hike.rating = rating;
      hike.comments = comments;
      hikes.replaceAt(i, hike);
      break;
    }
  }
  Backend.updateHike(id, name, location, distance, rating, comments).catch(
    function(error) {
      console.log("Couldn't update hike: " + id);
    }
  );
}

module.exports = {
  hikes: hikes,
  updateHike: updateHike
};
