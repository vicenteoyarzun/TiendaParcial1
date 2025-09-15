const loginForm = document.getElementById("login");
const errorMessage = document.getElementById("error-message");
const USERCLI = 'Cliente321';
const PASSCLI = '321123';
loginForm.addEventListener('submit',function(event){
    event.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    if(username === USERCLI && password === PASSCLI){
    errorMessage.style.color='green';
    errorMessage.textContent='Inicio de sesion de usuario exitosa'
    }else{
    errorMessage.style.color='red';
    errorMessage.textContent='Inicio de sesion de usuario fallida'
    }
    loginForm.reset();
});