let x = 5;
let y = 10;  // allowed
let result;

function add(x,y){
    return x+y;
}
function sub(x,y){
    return x-y;
}
function mul(x,y){
    return x*y;
}
function div(x,y){
    return x/y;
}
 
let operator="+";
switch(operator){
    case "+":
        result=add(a+b);
        break;
    case "-":
        result= sub(a-b);
        break;
    case "*":
        result= mul(a*b);
        break;
    case "/":
        result=div(a/b);
        break;
    default:
        result="invalid input";
}

console.log("no");