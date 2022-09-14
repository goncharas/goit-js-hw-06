const form = document.querySelector(".login-form");
console.log(form);

form.addEventListener("submit", onBtnSubmit);

function onBtnSubmit(event) {
  event.preventDefault();
  const {
    elements: { email, password },
  } = event.currentTarget;

  if (email.value === "" || password.value === "") {
    return alert("Please fill in all the fields!");
  }
  const formData = new FormData(event.currentTarget);
  console.log(formData);

  formData.forEach((value, name) => {
    console.log("onBtnSubmit - name", name);
    console.log("obBtnSubmit - value", value);
  });
  event.currentTarget.reset();
}
