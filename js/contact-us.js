let form = document.getElementById("contact-submit");
let contact_name, email, message;
form.addEventListener("submit", (event) => {
  event.preventDefault();
  contact_name = form.elements["name"].value;
  message = form.elements["message"].value;
  email = form.elements["email"].value;

  form.elements["name"].value = "";
  form.elements["email"].value = "";
  form.elements["message"].value = "";
});
