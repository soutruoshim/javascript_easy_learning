// Function basic
function aboutMe(){
    let message = "I'm sout ruoshim and I am 28 years old";
    console.log(message);
}

function aboutMes(name, age){
    let message = `I'm ${name} and I am ${age} years old`;
    console.log(message);
}
// call function
aboutMe();
aboutMes('Sout Ruoshim', 40);

function calcSum(number1, number2){
    let sum = number1 + number2;
    return sum;
}

let result = calcSum(10, 20);
console.log(result);

// Default paramater
function calcSum2(number1, number2 = 40, number3 = 60){
    let sum = number1 + number2 + number3;
    return sum;
}

console.log(calcSum2(10));

// Function Expression
const calSumExp = function(number1, number2){
    let sum = number1 + number2;
    return sum;
}
console.log(calSumExp(50, 60));

// Arrow functions
const calSumArr = (number1, number2) => number1 + number2;
console.log(calSumArr(50, 60));

// Rest parameter
function multiply(number1, number2, number3){
    return number1 * number2 * number3;
}
function multiplys(...args){
   console.log(args);
   let mulp = 1;
   for(let num of args){
        mulp *= num;
   }
   return mulp;
}
console.log(multiplys(1,2,4,5,6));

