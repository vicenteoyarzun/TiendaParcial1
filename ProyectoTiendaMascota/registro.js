const registerForm = document.getElementById("register");
const errorMessage = document.getElementById("error-message");
registerForm.addEventListener('submit',function(event){
    event.preventDefault();
    const email = document.getElementById('email').value;
    const email2 = document.getElementById('email2').value;
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const password2 = document.getElementById('password2').value;
    if(email==email2 && password==password2){
    errorMessage.style.color='green';
    errorMessage.textContent='registro exitoso'
    }else{
    errorMessage.style.color='red';
    errorMessage.textContent='correo o contraseña no coinciden'
    }
    registerForm.reset();
});