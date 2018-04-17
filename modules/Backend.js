var hikes = [
  {
    id: 0,
    name: "Jesse Dirisu",
    location: "Ketu, Lagos",
    distance: 10.4,
    rating: 5,
    comments: "Jesse is so awesome, awesome is jealous of him",
    img: "assets/11.jpg",
  },
  {
    id: 1,
    name: "Samuel Agbonkpolo",
    location: "Abuja, Nigeria",
    distance: 20.86,
    rating: 3,
    comments:
      "Hmmm he's OK but still needs to learn a thing or two about awesomeness from Don Jesse.",
    img: "assets/05.jpg"
  },
  {
    id: 2,
    name: "Steven Umu Excel",
    location: "Benin, Nigeria",
    distance: 8.2,
    rating: 4,
    comments: "So short, I need a pair of glasses to see him",
    img: "assets/04.jpg"
  },
  {
    id: 3,
    name: "Micheal Olafusi",
    location: "Somewhere in this world",
    distance: 12.3,
    rating: 4,
    comments: "Hmmm I can't be jealous, I'm the most awesome as you all know",
    img: "assets/02.jpg"
  },
  {
    id: 4,
    name: "Bunmi UI Guy",
    location: "Abuja, Nigeria",
    distance: 19.34,
    rating: 3,
    comments: "3 for effort, but you cannot just be as awesome as me",
    img: "assets/01.jpg"
  }
];

var pictures = [
  {img: "../Assets/01.jpg"},
  {img: "../Assets/02.jpg"},
  {img: "../Assets/04.jpg"},
  {img: "../Assets/05.jpg"},
  {img: "../Assets/08.jpg"},
  {img: "../Assets/09.jpg"},
  {img: "../Assets/11.jpg"},
  {img: "../Assets/15.jpg"}
]

function getHikes() {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      resolve(hikes)
    }, 0);
  });
}

function getPictures() {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      resolve(pictures);
    }, 0);
  });
}

function updateHike(id, name, location, distance, rating, comments) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
     hikes.forEach(function(hike) {
       if (hike.id == id) {
         hike.name = name;
         hike.location = location;
         hike.distance = distance;
         hike.rating = rating;
         hike.comments = comments;
       }
     })
     resolve();
    }, 0)
  });
}

module.exports = {
  getPictures: getPictures,
  getHikes: getHikes,
  updateHike: updateHike,
};
