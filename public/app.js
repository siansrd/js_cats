var app = function() {
  addCat("Dog", "Chocolate");
}

var addCat = function(name, food) {
  var cat = createUlCat();
  var nameItem = createLiName(name);
  var faveFood = createLiFood(food);

  cat.appendChild(nameItem);
  cat.appendChild(favFood);
  var cats = document.querySelector('#cats');
  cats.appendChild(cat);
}


// 1. Create ul Cat
var createUlCat = function() {
  cat = document.createElement("UL");
  cat.className = "cat";
  return cat;
}


// 2. Create li name
var createLiName = function(name) {
  nameItem = document.createElement("LI");
  nameItem.appendChild(document.createTextNode("Name: " + name));
  return nameItem;
}
// 3. Create li favefood
var createLiFood = function(food) {
  favFood = document.createElement("LI");
  favFood.appendChild(document.createTextNode("Favourite food: " + food));
  return favFood;
}
// 4. Create image



window.onload = app;

// var x = document.createElement("UL");
// var x = document.createElement("LI");
// var x = document.getElementById("myUL");
// var x = document.getElementById("myLi");
// var x = document.getElementById("myImg");
// var x = document.createElement("IMG");
// imageObject.width=pixels