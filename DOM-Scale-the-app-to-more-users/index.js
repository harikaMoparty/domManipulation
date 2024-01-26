// Write your code below:
function handleFormSubmit(event)
{
    event.preventDefault();
    const name=event.target.username.value;
    const username=event.target.username.value;
    const email=event.target.email.value;
    const phone=event.target.phone.value;
    const number=event.target.phone.value;
    const obj={
        name,
        email,
        number,
        phone,
        username
    };
    localStorage.setItem(obj.email,JSON.stringify(obj));
    displayDetails(obj);
}

function displayDetails(obj)
{
    const parentElementObject=document.getElementById('listOfItems');
    const childElementObject=document.createElement('li');
    childElementObject.textContent=obj.name+' - '+obj.email+" - "+obj.phone;
    parentElementObject.appendChild(childElementObject);
}
module.exports=handleFormSubmit;
