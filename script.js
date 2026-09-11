const loginLink = document.getElementById('LoginLink'); 
const loginPopup = document.getElementById('loginPopup'); 
const closeButton = document.getElementById('closeButton');
const loginbutton= document.getElementById('loginButton');
const clearButton = document.getElementById('clearButton');
const nameInput = document.getElementById('name');
const passwordInput = document.getElementById('password');
const logoutButton = document.getElementById('logoutButton');
const forgotPassword = document.querySelector('.forgotPassword');
const forgotPopup = document.getElementById('forgotPopup');
const forgotCloseButton = document.getElementById('forgotCloseButton');
const resetButton = document.getElementById('resetButton');
const emailInput = document.getElementById('email');
if(loginLink){
    loginLink.addEventListener('click', function(event) {
        loginPopup.style.display = 'flex'; 
    });
}
if(closeButton){
    closeButton.addEventListener('click', function(event) {
        loginPopup.style.display = 'none';
    });
}
if(clearButton){
    clearButton.addEventListener('click', function() {
        nameInput.value = "";
        passwordInput.value = "";
    });
}
if(loginbutton){
    loginbutton.addEventListener('click', function() {
        if (nameInput.value === "" || passwordInput.value === "") {
            alert("Please enter username and password.");
        } else {
            window.location.href = 'login.html';
        }
    });
}
if(logoutButton){
    logoutButton.addEventListener('click',function(event){
        window.location.href="index.html";
    });
}
if(forgotPassword){
    forgotPassword.addEventListener('click', function(event) {
        event.preventDefault();
        loginPopup.style.display = 'none';
        forgotPopup.style.display = 'flex';
    });
}
if(forgotCloseButton){
    forgotCloseButton.addEventListener('click', function() {
        forgotPopup.style.display = 'none';
        loginPopup.style.display = 'flex';
    });
}
if(resetButton){
    resetButton.addEventListener('click', function() {
        if(emailInput.value === "") {
            alert("Please enter your email.");
        } else {
            alert("Password reset link has been sent!");
            forgotPopup.style.display = 'none';
            loginPopup.style.display = 'flex';
        }
    });
}