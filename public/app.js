var app = function() {
  addCat("Dog", "Chocolate", "http://static.boredpanda.com/blog/wp-content/uploads/2014/02/funny-wet-cats-1.jpg");
}

var addCat = function(inputName, inputFood, inputUrl) {
  var cat = createUlCat();
  var nameLi = createLiName(inputName);
  var foodLi = createLiFood(inputFood);
  var photo = createLiImage(inputUrl);

  var cats = document.querySelector('#cats');
  appendElements(cat, nameLi, foodLi, photo, cats);
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

// 5. Append
var appendElements = function(cat, nameItem, faveFood, photo, appendTo) {
  cat.appendChild(nameItem);
  cat.appendChild(faveFood);
  cat.appendChild(photo);
  appendTo.appendChild(cat);
}

window.onload = app;