//QuerySelector is used to grab only single element
//using id
const mainHeading = document.querySelector("#main-heading");
mainHeading.style.textAlign = "right";

//using class
const Fruits = document.querySelector(".fruits");
Fruits.style.backgroundColor = "grey";
Fruits.style.padding = "30px";
Fruits.style.margin = "30px";
Fruits.style.width="50%";
Fruits.style.borderRadius = "5px";
Fruits.style.listStyleType = "none";

//using tag
const basketHeading = document.querySelector("h2");
basketHeading.style.marginLeft = "30px";

//trying multiple items
const Fruit = document.querySelector(".fruit");
Fruit.style.backgroundColor = "brown";


//QuerySelectorAll is used to grab all the element with same class/tag

const fruitItems = document.querySelectorAll(".fruit");
for(let i=0;i<fruitItems.length;i++){
fruitItems[i].style.backgroundColor = "white";
fruitItems[i].style.padding = "10px";
fruitItems[i].margin = "10px";
fruitItems[i].borderRadius = "5px";
}

const OddFruitItems = document.querySelectorAll(".fruit:nth-child(odd)");
for(let i=0;i<OddFruitItems.length;i++){
OddFruitItems[i].style.backgroundColor = "lightgrey";
}