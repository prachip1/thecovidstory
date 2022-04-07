/*global $, document, window, setTimeout, navigator, console, location*/

   const form = document.getElementById('form');
    const name = document.getElementById('name');
    const username = document.getElementById('username');
    const email = document.getElementById('email');
    const password = document.getElementById('password');
    const password2 = document.getElementById('conpassword');
    
    form.addEventListener('submit', e => {
        e.preventDefault();
        
        checkInputs();
    });
    
    function checkInputs() {
        // trim to remove the whitespaces
        const nameValue = name.value.trim();
        const usernameValue = username.value.trim();
        const emailValue = email.value.trim();
        const passwordValue = password.value.trim();
        const password2Value = password2.value.trim();
        

        if(nameValue === ''){
            setErrorFor(name, 'This field cannot be blank')
        }
        else{
            setSuccessFor(name);
        }

        if(usernameValue === '') {
            setErrorFor(username, 'This field cannot be blank');
        } else {
            setSuccessFor(username);
        }
        
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
        
        if(password2Value === '') {
            setErrorFor(password2, 'This field cannot be blank');
        } else if(passwordValue !== password2Value) {
            setErrorFor(password2, 'Passwords does not match');
        } else{
            setSuccessFor(password2);
        }

        if(nameValue !== '' && usernameValue !== '' && emailValue !== '' && passwordValue !== '' && password2Value !== '' && passwordValue === password2Value){
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
    
    
    
    
    
    
    
    
    
    
    
    
    
 
  

 



