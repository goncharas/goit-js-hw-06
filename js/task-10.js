function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const bntCreateDiv = document.querySelector("button[data-create]");
// console.log(bntCreateDiv);
const bntDestroy = document.querySelector("button[data-destroy]");
// console.log(bntDestroy);
const randomColor = getRandomHexColor();
// console.log(randomColor);
const insertPoint = document.querySelector("#boxes");
// console.log(insertPoint);
const inputEl = document.querySelector("input");

bntCreateDiv.addEventListener("click", createBoxes);
bntDestroy.addEventListener("click", deleteBoxes);

function createBoxes(amount) {
  amount = Number(inputEl.value);
  console.log(amount);
  let boxElements = [];
  let boxHeight = 20;
  let boxWidht = 20;
  for (let i = 0; i < amount; i += 1) {
    boxHeight += 10;
    boxWidht += 10;
    const divEl = document.createElement("div");
    divEl.style.height = `${boxHeight}px`;
    divEl.style.width = `${boxWidht}px`;
    divEl.style.background = getRandomHexColor();
    boxElements.push(divEl);
  }
  console.log(boxElements);
  insertPoint.append(...boxElements);
}

function deleteBoxes() {
  insertPoint.remove();
}
