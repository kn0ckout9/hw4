const num1 = Number(prompt("Enter Number 1"));
const num2 = Number(prompt("Enter Number 2"));
const MathOp = prompt("Enter Mathematical Operation (+, -, *, /)");

switch (MathOp) {
    case "+":
        console.log(`${num1} + ${num2} = ${num1+num2}`)
        break;
    case "-":
        console.log(`${num1} - ${num2} = ${num1-num2}`)
        break;
    case "*":
        console.log(`${num1} * ${num2} = ${num1*num2}`)
        break;
    case "/":
        console.log(`${num1} / ${num2} = ${num1/num2}`)
        break;
  }

