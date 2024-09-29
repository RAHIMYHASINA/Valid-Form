const form = document.getElementById('form');
const name = document.getElementById('name');
const lastname = document.getElementById('lastname');
const email = document.getElementById('email');
const phonenumber = document.getElementById('phonenumber');
//let errorElement = document.getElementById('#error')

form.addEventListener('submit', function(e){
    e.preventDefault();
    if(name.value == ""){
      alert("name can't be empty!")  
      document.write(name);
    }
    if(lastname.value == ""){
        alert("lastname can't be empty!")  
      }
      if(email.value == ""){
        alert("email can't be empty!")  
      }
      if(phonenumber.value == ""){
        alert("phonenumber can't be empty!")  
      }
})









