const form=document.querySelector("form");
const fruit=document.querySelector(".fruits");
form.addEventListener('submit',function(event){
    event.preventDefault();
    const fruittoadd=document.getElementById("fruit-to-add");
    const newli=document.createElement("li");
    newli.innerHTML = fruittoadd.value + '<button class="delete-btn">x</button><button class="edit-btn">Edit</button>';
    fruit.appendChild(newli);
});

fruit.addEventListener('click',function(event){
    if(event.target.classList.contains('delete-btn')){
        const fruittodelete=event.target.parentElement;
        fruit.removeChild(fruittodelete);
    };
});