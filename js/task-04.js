const counter = {
  value: 0,
  increment() {
    this.value += 1;
  },
  decrement() {
    this.value -= 1;
  },
};

const counterEl = document.getElementById("counter");
console.log(counterEl);
const buttonIncrement = counterEl.lastElementChild;
console.log(buttonIncrement);
const buttonDecrement = counterEl.firstElementChild;
console.log(buttonDecrement);
const valueEl = document.getElementById("value");
console.log(valueEl);

buttonDecrement.addEventListener("click", () => {
  counter.decrement();
  valueEl.textContent = counter.value;
});

buttonIncrement.addEventListener("click", () => {
  counter.increment();
  valueEl.textContent = counter.value;
});
