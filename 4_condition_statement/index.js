// Conditional Statement

// if(condition){
//     statements
// }else if(condition2){
//     statements
// }else if(condition3){
//     statements
// }else{
//    statements
// }

let number = 0;
if(number > 0){
    console.log('This is a positive number');
}else if(number < 0){
    console.log('This is a Negative number');
}else{
    console.log('This is a Zero number');
}

//Switch case
let color = 'green';
switch(color){
    case 'black': console.log('The color is black'); break;
    case 'green': console.log('The color is green'); break;
    case 'red': console.log('The color is red'); break;
    default: console.log('The color no found'); break;
}

// Ternary Operators
let number1 = 10;
let number2 = 25;

let max = number1 > number2 ? number1: number2;
console.log(max);

