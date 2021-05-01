let form = document.getElementById("contact-submit");
let contact_name, email, message;
function submit() {
  contact_name = document.getElementsByClassName("form-elements")[0].value;
  message = document.getElementsByClassName("form-elements")[2].value;
  email = document.getElementsByClassName("form-elements")[1].value;

  document.getElementsByClassName("form-elements")[0].value = "";
  document.getElementsByClassName("form-elements")[1].value = "";
  document.getElementsByClassName("form-elements")[2].value = "";
}
