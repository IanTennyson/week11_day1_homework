var catsArray= [
{name: "boba", favouriteFood: "Sock fluff", url: "http://66.media.tumblr.com/d1f01bbe0150fda0c40d2151c5eaeac8/tumblr_odlqqskjj61v9cejwo1_400.jpg"},
{name: "Max", favouriteFood: "Whiskas Temptations", url: "http://66.media.tumblr.com/7c5784ea89369c780e782bf10c60315a/tumblr_npb0hlYwhV1u63jaco1_1280.jpg" } 
]



var app = function(){

var createUnorderedList = function(){
  var unorderedList = document.createElement("ul");
  unorderedList.classList.add("cat");
  return unorderedList;
};

var createListItemName = function(catName){
  var listItemName = document.createElement("li");
  listItemName.innerText = "Name: " + catName;
  return listItemName;
};

var createListItemFavouriteFood = function(favouriteFood){
  var listItemFavouriteFood = document.createElement("li");
  listItemFavouriteFood.innerText = "Favourite Food: " + favouriteFood;
  return listItemFavouriteFood;
};

var createListItem = function(){
  var listItem = document.createElement("li");
  return listItem;
};

var createItemImg = function(imgSrc){
  var itemImg = document.createElement("img");
  itemImg.width = 500;
  itemImg.src = imgSrc;
  return itemImg;
};

var appendElements = function(listItem, itemImg, listItemFavouriteFood, listItemName, unorderedList){
  listItem.appendChild(itemImg);
  listItemFavouriteFood.appendChild(listItem);
  listItemName.appendChild(listItemFavouriteFood);
  unorderedList.appendChild(listItemName);
  var cats = document.querySelector("#cats");
  cats.appendChild(unorderedList);
};

var addCat = function(catName, catFood, imgSrc){
  var newUnorderedList = createUnorderedList();
  var catName = createListItemName(catName);
  var catFavFood = createListItemFavouriteFood(catFood);
  var imgHolder = createListItem();
  var catImg = createItemImg(imgSrc);

  appendElements(imgHolder, catImg, catFavFood, catName, newUnorderedList);
};

for(var cat of catsArray){
  addCat(cat.name, cat.favouriteFood, cat.url);
};

addCat("Slippin Jimmy", "Steak", "https://cdn.shopify.com/s/files/1/1119/4994/products/0_a74fb7fb-4142-4070-8ce4-7d7994c30b5e_1024x1024.jpg?v=1479984560")

};

window.onload = app;