function passwordValidator(password) {
    let isValidLength = checkIs6To10(password);
    let hasOnlyLettersAndDigits = checkLettersAndDigits(password);
    let hasMin2Digits = checkHave2Digits(password);

    if(isValidLength && hasOnlyLettersAndDigits && hasMin2Digits) {
        console.log("Password is valid");
    }


    function checkIs6To10(pass) {
        if(password.length >= 6 && password.length <= 10) {
            return true;
        } else {
            console.log("Password must be between 6 and 10 characters");
            return false;
        }
    }

    function checkLettersAndDigits(pass) {
        let pattern = /^[a-zA-Z0-9]+$/;
        let isVald = pattern.test(pass);

        if(isVald) {
            return true;
        } else {
            console.log("Password must consist only of letters and digits");
            return false;
        }
    }

    function checkHave2Digits(pass) {
        let pattern = /[0-9]{2,}/;
        let isValid = pattern.test(pass);
        if(isValid) {
            return true;
        } else {
            console.log("Password must have at least 2 digits");
            return false;
        }
    }
}
passwordValidator('logIn');