const loginForm = document.getElementById("login");
const errorMessage = document.getElementById("error-message");
const USERCLI = 'Cliente321';
const PASSCLI = '321123';
const USERADM = 'admin';
const PASSADM = 'root';
loginForm.addEventListener('submit',function(event){
    event.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    if(username === USERCLI && password === PASSCLI){
    errorMessage.style.color='green';
    errorMessage.textContent='Inicio de sesion de usuario exitosa'
    }else if(username==USERADM && password==PASSADM){
        window.location.assign("admin.html");
    }else{
    errorMessage.style.color='red';
    errorMessage.textContent='Inicio de sesion de usuario fallida'
    }
    loginForm.reset();
});