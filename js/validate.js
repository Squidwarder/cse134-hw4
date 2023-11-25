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
        // console.log("Invalid name");
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
        // console.log("Valid name");
    }

    if (emailValidate.validity.typeMismatch || emailValidate.validity.valueMissing) {
        // console.log("Invalid email");
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
        // console.log("Valid email");
    }

    if (commentValidate.validity.typeMismatch || commentValidate.validity.valueMissing || commentValidate.validity.tooLong) {
        // console.log("Invalid comment");
        if (commentValidate.validity.typeMismatch) {
            // commentErrMsg.textContent = "Invalid Comment";
            commentInfoMsg.textContent = "Only UTF-8 characters are accepted";
        } else if (commentValidate.validity.valueMissing) {
            commentErrMsg.textContent = "No input detected";
            commentInfoMsg.textContent = "Please input some comments, it's required";
        } else {
            commentErrMsg.textContent = "Comment too long";
            commentInfoMsg.textContent = "Please make it shorter, less than 200 characters";
        }
    } else {        
        commentErrMsg.textContent = "No errors detected";
        commentInfoMsg.textContent = "Nice, this looks good";
        // console.log("Valid comment");
    }
});

// ! Need to set CustomValidity to default in the case of no errors.
// ! Otherwise the form display won't be updated on the fly
nameValidate.addEventListener("input", (event) => {
    // console.log("Name validate() invoked");
    if (nameValidate.validity.typeMismatch || nameValidate.validity.valueMissing) {
        // console.log("Invalid name");        
        if (nameValidate.validity.typeMismatch) {
            nameErrMsg.textContent = "Invalid Name";
            nameInfoMsg.textContent = "Only UTF-8 characters are accepted";
            nameValidate.setCustomValidity("Please use valid characters");
        } else {
            nameErrMsg.textContent = "No input detected";
            nameInfoMsg.textContent = "Please input a name it's required";
            nameValidate.setCustomValidity("Please input a name");
        }
    } else {        
        nameErrMsg.textContent = "No errors detected";
        nameInfoMsg.textContent = "Nice, this looks good";
        nameValidate.setCustomValidity("");
        // console.log("Valid name");
    }
});

emailValidate.addEventListener("input", (event) => {
    // console.log("Email validate() invoked");
    if (emailValidate.validity.typeMismatch || emailValidate.validity.valueMissing) {
        // console.log("Invalid email");
        if (emailValidate.validity.typeMismatch) {
            emailErrMsg.textContent = "Invalid email address";
            emailInfoMsg.textContent = "Did you forget to put @?";
            emailValidate.setCustomValidity("Please input a valid email address");
        } else {
            emailErrMsg.textContent = "No input detected";
            emailInfoMsg.textContent = "please input an email, it's required";
            emailValidate.setCustomValidity("Please input an email");
        }
    } else {        
        emailErrMsg.textContent = "No errors detected";
        emailInfoMsg.textContent = "Nice, this looks good";
        emailValidate.setCustomValidity("");
        // console.log("Valid email");
    }
});

commentValidate.addEventListener("input", (event) => {
    // console.log("Comment validate() invoked");
    if (commentValidate.validity.typeMismatch || commentValidate.validity.valueMissing || commentValidate.validity.tooLong) {
        // console.log("Invalid comment");
        if (commentValidate.validity.typeMismatch) {
            commentErrMsg.textContent = "Invalid Comment";
            commentInfoMsg.textContent = "Only UTF-8 characters are accepted";
            commnetValidate.setCustomValidity("Please use valid characters");
        } else if (commentValidate.validity.valueMissing) {
            commentErrMsg.textContent = "No input detected";
            commentInfoMsg.textContent = "Please input some comments, it's required";
            commentValidate.setCustomValidity("Please input some comments");
        } else {
            commentErrMsg.textContent = "Comment too long";
            commentInfoMsg.textContent = "Please make it shorter, less than 200 characters";
            commentValidate.setCustomValidity("Please make the message shorter");
        }
    } else {        
        commentErrMsg.textContent = "No errors detected";
        commentInfoMsg.textContent = (200 - commentValidate.value.length) + " Characters left";
        commentValidate.setCustomValidity("");
        // console.log("Valid comment");
    }
})