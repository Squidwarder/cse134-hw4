const nameValidate = document.getElementById("form_vis_name");
const nameErrMsg = document.getElementById("name_error");
const nameInfoMsg = document.getElementById("name_info_msg");

const emailValidate = document.getElementById("form_vis_email");
const emailErrMsg = document.getElementById("email_error");
const emailInfoMsg = document.getElementById("email_info_msg");

const commentValidate = document.getElementById("form_vis_comment");
const commentErrMsg = document.getElementById("comment_error");
const commentInfoMsg = document.getElementById("comment_info_msg");

document.addEventListener("DOMContentLoaded", function() {
    if (nameValidate.validity.typeMismatch || nameValidate.validity.valueMissing) {
        console.log("Invalid name");        
        if (nameValidate.validity.typeMismatch) {
            nameErrMsg.textContent = "Invalid Name";
            nameInfoMsg.textContent = "Only UTF-8 characters are accepted";
        } else {
            nameErrMsg.textContent = "No input detected";
            nameInfoMsg.textContent = "Please input a name it's required";
        }
    } else {        
        nameErrMsg.textContent = "No errors detected";
        nameInfoMsg.textContent = "Nice, this looks good";
        console.log("Valid name");
    }

    if (emailValidate.validity.typeMismatch || emailValidate.validity.valueMissing) {
        console.log("Invalid email");        
        if (emailValidate.validity.typeMismatch) {
            emailErrMsg.textContent = "Invalid email address";
            emailInfoMsg.textContent = "Did you forget to put @?";
        } else {
            emailErrMsg.textContent = "No input detected";
            emailInfoMsg.textContent = "please input an email, it's required";
        }
    } else {        
        emailErrMsg.textContent = "No errors detected";
        emailInfoMsg.textContent = "Nice, this looks good";
        console.log("Valid email");
    }
});

// ! DO NOT set custom validity. If done so, form wouldn't be updated on the fly
nameValidate.addEventListener("input", (event) => {
    console.log("Name validate() invoked")
    if (nameValidate.validity.typeMismatch || nameValidate.validity.valueMissing) {
        console.log("Invalid name");        
        if (nameValidate.validity.typeMismatch) {
            nameErrMsg.textContent = "Invalid Name";
            nameInfoMsg.textContent = "Only UTF-8 characters are accepted";
        } else {
            nameErrMsg.textContent = "No input detected";
            nameInfoMsg.textContent = "Please input a name it's required";
        }
    } else {        
        nameErrMsg.textContent = "No errors detected";
        nameInfoMsg.textContent = "Nice, this looks good";
        console.log("Valid name");
    }
});

emailValidate.addEventListener("input", (event) => {
    console.log("Email validate() invoked")
    if (emailValidate.validity.typeMismatch || emailValidate.validity.valueMissing) {
        console.log("Invalid email");        
        if (emailValidate.validity.typeMismatch) {
            emailErrMsg.textContent = "Invalid email address";
            emailInfoMsg.textContent = "Did you forget to put @?";
        } else {
            emailErrMsg.textContent = "No input detected";
            emailInfoMsg.textContent = "please input an email, it's required";
        }
    } else {        
        emailErrMsg.textContent = "No errors detected";
        emailInfoMsg.textContent = "Nice, this looks good";
        console.log("Valid email");
    }
});