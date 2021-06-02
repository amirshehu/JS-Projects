const form = document.getElementById("form");
const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const passwordConfirm = document.getElementById("password2");


function showError(input, message) {
    const formControl = input.parentElement;

    formControl.className = 'form-control error'
    const small = formControl.querySelector('small');
    small.innerText = message;
}
function showSuccess(input) {
    const formControl = input.parentElement;
  
    formControl.className = 'form-control success'
 
}
function checkEmail(input) {

    const rejex  = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    // return rejex.test(String(email).toLowerCase());
    if (rejex.test(input.value)) {
        showSuccess(input);
    } else {
        showError(input, 'Email is not valid');
    }
}
function checkRequiredFields(input){
   
    input.forEach(
        function fields(input) {
          
            if (input.value === "") {
 
                showError(input, `${getFieldName(input)} is required`)
            }
            else {
                showSuccess(input)
            }

        
           
        });

}
function checkLength(input, min, max) {
    if (input.value.length < min) {
        showError(input, `${getFieldName(input)} must be at least ${min}`)
    }
    if (input.value.length > max) {
        showError(input, `${getFieldName(input)} must be less than ${max}`)
    }
}
function getFieldName(input) {
    return input.id.charAt(0).toUpperCase() + input.id.slice(1)
}
function checkPassword(input, input2) {
    if (input2.value !== input.value) {
  
        showError(passwordConfirm, "Passwords do not match")
        showError(password, "Passwords do not match")
    } 
}
form.addEventListener("submit", function (e) {
    e.preventDefault();

    checkRequiredFields([username, email, password, passwordConfirm]);
    checkLength(username, 3, 15);
    checkLength(password, 6, 25);
    checkLength(passwordConfirm, 6, 25);
    checkPassword(password, passwordConfirm)
    checkEmail(email)
});