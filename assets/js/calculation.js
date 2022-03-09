const screen = document.querySelector(".screen");
const dot = document.querySelector("[data-dot]");
const divideKey = document.querySelector("[data-divide]");
const multiplyKey = document.querySelector("[data-multiply]");
const numKeys = document.querySelectorAll("[data-key]");
const plusKey = document.querySelector("[data-plus]");
const minusKey = document.querySelector("[data-minus]");
const resetKey = document.querySelector("[data-reset]");
const eqKey = document.querySelector("[data-equal]");
const delKey = document.querySelector("[data-del]");

let inputValues = [];

numKeys.forEach((i) => {
  i.onclick = (e) => {
    if (Number(screen.value) === 0 && Number(e.target.textContent) > 0) {
      screen.value = i.textContent;
    } else {
      screen.value += i.textContent;
    }
    inputValues.push(i.textContent);
  };
});

dot.onclick = () => {
  prevnentRepeat(dot);
};

let prevnentRepeat = (key) => {
  if (Number(screen.value.slice(-1)) >= 0 && screen.value !== "") {
    screen.value += key.textContent;
    if (key == multiplyKey) {
      inputValues.push(key.value);
    } else {
      inputValues.push(key.textContent);
    }
  }
};

divideKey.onclick = () => {
  prevnentRepeat(divideKey);
};
multiplyKey.onclick = () => {
  prevnentRepeat(multiplyKey);
};

resetKey.onclick = () => {
  screen.value = "";
  inputValues = [];
};

eqKey.onclick = () => {
  screen.value = eval(inputValues.join(""));
  inputValues = [];
  inputValues.push(screen.value);
};

plusKey.onclick = () => {
  prevnentRepeat(plusKey);
};

minusKey.onclick = () => {
  prevnentRepeat(minusKey);
};

delKey.onclick = () => {
  inputValues = inputValues.slice(0, inputValues.length - 1);
  screen.value = inputValues.join("");
};
