const nameValidate = document.getElementById("form_vis_name");
const emailValidate = document.getElementById("form_vis_email");
const commentValidate = document.getElementById("form_vis_comment");

emailValidate.addEventListener("input", (event) => {
    console.log("Email validate() invoked")
    if (emailValidate.validity.typeMismatch || emailValidate.validity.valueMissing) {
        emailValidate.setCustomValidity("I am expecting an email address!");
        console.log("Invalid email");
    } else {
        emailValidate.setCustomValidity("This looks good");
        console.log("Valid email");
    }
});