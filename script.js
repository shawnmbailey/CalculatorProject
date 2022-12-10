let display = document.querySelector('#view');
const buttons = document.querySelectorAll('button');

let num1 = 0;
let num2= 0;
let operatorChosen = false;
let operator = ''

function handleOperator(op){
   if (operatorChosen === false){
      operator = op
      num1 = display.innerText;
      display.innerText = ''
      operatorChosen = true;
   }
}

function handleEvaluation(){

operatorChosen = false;
num2 = display.innerText;

if(operator === '+'){
   return parseFloat(num1)+parseFloat(num2)
   }
if(operator === '*'){
   return parseFloat(num1)*parseFloat(num2)
   }
if(operator === '/'){
   return parseFloat(num1)/parseFloat(num2)
   }
if(operator === '-'){
   return parseFloat(num1)-(num2)
   }

}

for(let button of buttons){
   button.addEventListener('click' , e=>{
      console.log(e.target.classList[0] == 'number')
      let num = e.target.dataset.number
      let op = e.target.dataset.operator

      if(op ==='='){
         display.innerText= handleEvaluation()
         return;
      }

      if(num){
         display.innerText+=num;
      }
      if(op){
         handleOperator(op)
      }
   })
}

const toggleOn = document.querySelector('.theme-toggler');
const darkModeCalc = document.querySelector('.dark');
const icon = document.querySelector('.toggler-icon');
let darkModeOn = true;
toggleOn.onclick = () => {
   darkModeCalc.classList.toggle('dark');
   toggleOn.classList.toggle('active');
   darkModeOn = !darkModeOn;
}