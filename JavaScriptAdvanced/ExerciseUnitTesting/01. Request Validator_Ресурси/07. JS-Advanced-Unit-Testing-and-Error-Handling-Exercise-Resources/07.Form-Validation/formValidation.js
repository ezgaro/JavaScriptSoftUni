function validate() {
    let usernameElement = document.querySelector('#username');
    let emailElement = document.querySelector('#email');
    let passwordElement = document.querySelector('#password');
    let confirmPasswordElement = document.querySelector('#confirm-password');
    let companyElement = document.querySelector('#company');
    let companyNumberElement = document.querySelector('#companyNumber');
    let validDiv = document.querySelector('#valid');
    let isCompanyCheckbox = document.querySelector('#isCompany');

    let usernamePattern = /^[A-Za-z0-9]{3,20}$/;
    let passwordPattern = /^\w{5,15}$/;
    let emailPattern = /^[^@]+@[^@]+\.[^@]+$/;
    let companyNumberPattern = /^[1-9][0-9]{3,3}$/;

    let isFormValid = true;

    if (!usernamePattern.test(usernameElement.value)) {
        usernameElement.style.borderColor = 'red';
        isFormValid = false;
    } else {
        usernameElement.style.border = 'none';
    }

    if (!emailPattern.test(emailElement.value)) {
        emailElement.style.borderColor = 'red';
        isFormValid = false;
    } else {
        emailElement.style.border = 'none';
    }

    if (!passwordPattern.test(passwordElement.value) || passwordElement.value !== confirmPasswordElement.value) {
        passwordElement.style.borderColor = 'red';
        confirmPasswordElement.style.borderColor = 'red';
        isFormValid = false;
    } else {
        passwordElement.style.border = 'none';
        confirmPasswordElement.style.border = 'none';
    }

    if (isCompanyCheckbox.checked) {
        companyElement.style.display = 'block';
        if (!companyNumberPattern.test(companyNumberElement.value)) {
            companyNumberElement.style.borderColor = 'red';
            isFormValid = false;
        } else {
            companyNumberElement.style.border = 'none';
        }
    } else {
        companyElement.style.display = 'none';
    }

    validDiv.style.display = isFormValid ? 'block' : 'none';
}

document.querySelector('#submit').addEventListener('click', function(event) {
    event.preventDefault();
    validate();
});

document.querySelector('#isCompany').addEventListener('change', function() {
    document.querySelector('#company').style.display = this.checked ? 'block' : 'none';
});