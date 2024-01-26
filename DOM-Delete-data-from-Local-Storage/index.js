// Write your code below:
function handleFormSubmit(event){

    event.preventDefault();

    let myObj = {
         username : event.target.username.value,
        email : event.target.email.value,
        phone : event.target.phone.value
      
    };

    let myObj_serial = JSON.stringify(myObj);

    localStorage.setItem(myObj.email, myObj_serial);

  
  const  string=myObj.username+"-"+myObj.email+"-"+myObj.phone
    const newLi = document.createElement('li');
   newLi.setAttribute('data-email', myObj.email);
    newLi.innerHTML=string+'<button class="delete-btn">x</button><button class="edit-btn">Edit</button>'

    const list = document.querySelector("ul");
    list.appendChild(newLi);
  //console.log(newLi)
  //console.log(list)
}
document.addEventListener('DOMContentLoaded', function () {
 const userList = document.querySelector('ul');
    userList.addEventListener('click', function (event) {
        if (event.target.classList.contains('delete-btn')) {
          // Retrieve email from the data attribute
            const userEmail = event.target.parentElement.getAttribute('data-email');
            // Remove user details from local storage using the email
            localStorage.removeItem(userEmail);

            // Remove the user from the list
            userList.removeChild(event.target.parentElement);
           
        }
           else if (event.target.classList.contains('edit-btn')) {
            const userEmail = event.target.parentElement.getAttribute('data-email');

          
            const userString = localStorage.getItem(userEmail);
            const userObj = JSON.parse(userString);

           
            document.getElementById('username').value = userObj.username;
            document.getElementById('email').value = userObj.email;
            document.getElementById('phone').value = userObj.phone;

            
            localStorage.removeItem(userEmail);

         
            userList.removeChild(event.target.parentElement);
        }
      
    });
});


module.exports = handleFormSubmit;
