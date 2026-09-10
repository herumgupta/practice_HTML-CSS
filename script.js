const loginLink = document.getElementById('LoginLink'); 
const loginPopup = document.getElementById('loginPopup'); 
const closeButton = document.getElementById('closeLink');
const loginbutton= document.getElementById('loginButton');
loginLink.addEventListener('click', function(event) {
    // event.preventDefault(); 
    loginPopup.style.display = 'flex'; 
});
closeButton.addEventListener('click', function(event) {
    // event.preventDefault();
    loginPopup.style.display = 'none';
});
loginbutton.addEventListener('click', function(event){
            window.location.href = 'login.html';
});