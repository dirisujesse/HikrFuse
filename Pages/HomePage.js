var Context = require("modules/Context");

function goToHike(arg) {
  var hike = arg.data;
  router.push("editHike", hike)
}

function goToSwipePage() {
  router.push("gallery")
}

module.exports = {
  hikes: Context.hikes,
  pictures: Context.pictures,
  goToHike: goToHike,
  goToSwipePage: goToSwipePage
};
