var app = function() {
  addCat("Dog", "Chocolate", "http://static.boredpanda.com/blog/wp-content/uploads/2014/02/funny-wet-cats-1.jpg");
}

var addCat = function(name, food, url) {
  var cat = createUlCat();
  var nameItem = createLiName(name);
  var faveFood = createLiFood(food);
  var photo = createLiImage(url);

  cat.appendChild(nameItem);
  cat.appendChild(faveFood);
  cat.appendChild(photo);
  var cats = document.querySelector('#cats');
  cats.appendChild(cat);
}


// 1. Create ul Cat
var createUlCat = function() {
  var cat = document.createElement("UL");
  cat.className = "cat";
  return cat;
}
// 2. Create li name
var createLiName = function(name) {
  var nameItem = document.createElement("LI");
  nameItem.appendChild(document.createTextNode("Name: " + name));
  return nameItem;
}
// 3. Create li favefood
var createLiFood = function(food) {
  var favFood = document.createElement("LI");
  favFood.appendChild(document.createTextNode("Favourite food: " + food));
  return favFood;
}
// 4. Create image
var createLiImage = function(url) {
  var catPic = document.createElement("IMG");
  catPic.width = '500';
  catPic.src = url;
  return catPic;
}

window.onload = app;