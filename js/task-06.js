const inputEl = document.getElementById("validation-input");
console.log(inputEl);
console.log(Number(inputEl.dataset.length));

inputEl.addEventListener("blur", onInputeBlure);

function onInputeBlure(event) {
  console.log(event.currentTarget.value.length);
  if (event.currentTarget.value.length === Number(inputEl.dataset.length)) {
    inputEl.classList.add("valid");
    inputEl.classList.remove("invalid");
  } else {
    inputEl.classList.add("invalid");
    inputEl.classList.remove("valid");
  }
}
