
// Functions
function add(x, y) {
    return x + y;
}
function sub(x, y) {
    return x - y;
}
function mul(x, y) {
    return x * y;
}
function div(x, y) {
    return y !== 0 ? x / y : "Cannot divide by zero";
}

let x = parseFloat(prompt("Enter first number:"));
let y = parseFloat(prompt("Enter second number:"));
let operator = prompt("Enter operator (+, -, *, /):");
let result;

switch (operator) {
    case "+":
        result = add(x, y);
        break;
    case "-":
        result = sub(x, y);
        break;
    case "*":
        result = mul(x, y);
        break;
    case "/":
        result = div(x, y);
        break;
    default:
        result = "Invalid operator";
}

console.log(`Result of ${x} ${operator} ${y} = ${result}`);


// const add=add(a,b) => {
//     return a+b;
// }