const simpleRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
const form = document.querySelector('#form');
const mail = document.querySelector('#email');
const errorIcon = document.querySelector('#error-icon');
const errorMsg = document.querySelector('#error-msg');
form.addEventListener('submit', (e) => {
    e.preventDefault();
    let value = mail.value;
    if(simpleRegex.test(value)){
        mail.style.border = "1px solid black";
        errorIcon.style.display = "none";
        errorMsg.style.display = "none";
        return;
    }
    mail.style.border = "1px solid red";
    errorIcon.style.display = "block";
    errorMsg.style.display = "block";
});
