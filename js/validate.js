const nameValidate = document.getElementById("form_vis_name");
const nameErrMsg = document.getElementById("name_error");
const nameInfoMsg = document.getElementById("name_info_msg");

const emailValidate = document.getElementById("form_vis_email");
const emailErrMsg = document.getElementById("email_error");
const emailInfoMsg = document.getElementById("email_info_msg");

const commentValidate = document.getElementById("form_vis_comment");
const commentErrMsg = document.getElementById("comment_error");
const commentInfoMsg = document.getElementById("comment_info_msg");

// ! DO NOT set custom validity. If done so, form wouldn't be updated on the fly
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