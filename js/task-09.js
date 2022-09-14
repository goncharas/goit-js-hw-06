function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
console.log(getRandomHexColor());
const btn = document.querySelector('.change-color');
const textColor = document.querySelector('.color');
btn.addEventListener("click", () => {
  const hexColor = getRandomHexColor();
  document.body.style.backgroundColor = hexColor;
  textColor.textContent = hexColor;
});
