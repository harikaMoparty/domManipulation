const Fruit = document.getElementsByClassName("fruit");
console.log(Fruit[2]);
Fruit[2].style.backgroundColor = "yellow";

for(let i=0;i<Fruit.length;i++){
  Fruit[i].style.fontWeight = "bold";
}