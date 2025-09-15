const registerForm = document.getElementById("register");
const errorMessage = document.getElementById("error-message");
registerForm.addEventListener('submit',function(event){
    event.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    if(username!=null && password!=null){
    errorMessage.style.color='green';
    errorMessage.textContent='registro exitoso'
    }else{
    errorMessage.style.color='red';
    errorMessage.textContent='registro fallido'
    }
    registerForm.reset();
});