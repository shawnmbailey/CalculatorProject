let display = document.querySelector("#view");
const buttons = document.querySelectorAll("button");

let num1 = 0;
let num2 = 0;
let operatorChosen = false;
let operator = '';
let tempNum = 0;
// track number of times eval button is clicked
let evalClicked = 0;

function handleOperator(op) {
  if (operatorChosen === false) {
    operator = op;
    num1 = display.innerText;
    display.innerText = "";
    operatorChosen = true;
  }
}
// math function being evaluated based on operator being selected
function handleEvaluation() {
  operatorChosen = false;
  num2 = display.innerText;
  evalClicked ? "" : tempNum = num2;
  if (operator === "+") {
    return parseFloat(num1) + parseFloat(num2);
  }
  if (operator === "*") {
    return parseFloat(num1) * parseFloat(num2);
  }
  if (operator === "/") {
    return parseFloat(num1) / parseFloat(num2);
  }
  if (operator === "-") {
    return parseFloat(num1) - num2;
  }
}
// making clear button functional and displaying sum based on math operation performed 
for (let button of buttons) {
  button.addEventListener("click", (e) => {
    console.log(e.target.classList[0] == "number");
    let num = e.target.dataset.number;
    let op = e.target.dataset.operator;
    if (op === "RESET") {
      console.log("RESET");
      display.innerText = "";
      num1 = 0;
      num2 = 0;
      operatorChosen = false;
      operator = "";
      return;
    }
    if (op === "=") {
      display.innerText = handleEvaluation();
      num1 = tempNum;
      num2 = display.innerText;
      evalClicked++;
      return;
    }

    if (num) {
      display.innerText += num;
    }
    if (op) {
      handleOperator(op);
    }
  });
}
// functionality of the light and dark mode 
const toggleOn = document.querySelector(".theme-toggler");
const darkModeCalc = document.querySelector(".dark");
const icon = document.querySelector(".toggler-icon");
let darkModeOn = true;
toggleOn.onclick = () => {
  darkModeCalc.classList.toggle("dark");
  toggleOn.classList.toggle("active");
  darkModeOn = !darkModeOn;
};
