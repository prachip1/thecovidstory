const form = document.getElementById('form');
const email = document.getElementById('email');
const password = document.getElementById('password');

form.addEventListener('submit', e => {
    e.preventDefault();
    
    checkInputs();
});


function checkInputs() {

const emailValue = email.value.trim();
const passwordValue = password.value.trim();


if(emailValue === '') {
    setErrorFor(email, 'This field cannot be blank');
} else if (!isEmail(emailValue)) {
    setErrorFor(email, 'Not a valid email');
} else {
    setSuccessFor(email);
}

if(passwordValue === '') {
    setErrorFor(password, 'This field cannot be blank');
} else {
    setSuccessFor(password);
}

if( emailValue !== '' && passwordValue !== ''){
    window.open('dash.html');
    return;
}


}


function setErrorFor(input, message) {
    const formControl = input.parentElement;
    const small = formControl.querySelector('small');
    formControl.className = 'form-group error';
    small.innerText = message;
}

function setSuccessFor(input) {
    const formControl = input.parentElement;
    formControl.className = 'form-group success';
}
    
function isEmail(email) {
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}