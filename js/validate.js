const nameValidate = document.getElementById("form_vis_name");
const emailValidate = document.getElementById("form_vis_email");
const commentValidate = document.getElementById("form_vis_comment");


email.addEventListener("input", (event) => {
    if (email.validity.typeMismatch) {
      email.setCustomValidity("I am expecting an email address!");
    } else {
      email.setCustomValidity("This looks good");
    }
  });