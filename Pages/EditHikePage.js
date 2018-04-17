// var Observable = require("FuseJS/Observable");
var Context = require("modules/Context")
var hike = this.Parameter;
var name = hike.map(function(hikes) {
  return hikes.name;
});
var location = hike.map(function(hikes) {
  return hikes.location;
});
var distance = hike.map(function(hikes) {
  return hikes.distance;
});
var rating = hike.map(function(hikes) {
  return hikes.rating;
});
var comments = hike.map(function(hikes) {
  return hikes.comments;
});
function save() {
  Context.updateHike(hike.value.id, name.value, location.value, distance.value, rating.value, comments.value);
  router.goBack();
}
function cancel() {
  router.goBack()
}

module.exports = {
  name: name,
  hike: hike,
  location: location,
  distance: distance,
  rating: rating,
  comments: comments,
  save: save,
  cancel: cancel
};
