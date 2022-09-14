const refs = {
  input: document.getElementById("name-input"),
  nameLabel: document.getElementById("name-output"),
};

refs.input.addEventListener("input", onInputeChange);

function onInputeChange(event) {
  console.log(event.currentTarget.value);
  refs.nameLabel.textContent = event.currentTarget.value;
}
