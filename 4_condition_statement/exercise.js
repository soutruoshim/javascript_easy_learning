// Problem : FizzBuzz
// tak a number
// if it is divisible by 3, Print Fizz
// if it is divisible by 5 print Buzz
// if it is divisible both 3 & 5 print FizzBuzz
// otherwise, print nothing

//let number = 10;
let number = 15;
if(number % 3 === 0 && number % 5 == 0){
    console.log('FizzBuzz');
}else if(number % 3 === 0){
    console.log('Fizz');
}else if(number % 5 == 0){
    console.log('Buzz');
}else{
    console.log('Nothing');
}

// With Ternary operator
number = 10;
console.log(number % 3 === 0 && number % 5 == 0 
    ? 'FizzBuzz'
    :number % 3 === 0 
    ?'Fizz' 
    : number % 5 === 0
    ? 'Buzz'
    : 'Nothing');

// Grade system
// 80 - 100 A+
// 70 - 79 A
// 60 - 69 A-
// 50 - 59 B
// 40 - 49 C
// 33 - 39 D
// 0 - 32 F

let mark = 101;
if(mark >= 80 && mark <= 100){
   console.log('Grade is A+');
}else if(mark >= 70 && mark <= 79){
    console.log('Grade is A');
}else if(mark >= 60 && mark <= 69){
    console.log('Grade is A-');
}else if(mark >= 50 && mark <= 59){
    console.log('Grade is B');
}else if(mark >= 40 && mark <= 49){
    console.log('Grade is C');
}else if(mark >= 33 && mark <= 39){
    console.log('Grade is D');
}else if(mark >= 0 && mark <= 32){
    console.log('Grade is F');
}else{
    console.log('invalid mark');
}

//use switch
mark = 69;
switch(true){
    case mark < 0 && mark > 100 : console.log('Invalid mark'); break;
    case mark >= 80 && mark <= 100 : console.log('A+'); break;
    case mark >= 70 && mark <= 79 : console.log('A'); break;
    case mark >= 60 && mark <= 69 : console.log('A-'); break;
    case mark >= 50 && mark <= 59 : console.log('B'); break;
    case mark >= 40 && mark <= 49 : console.log('C'); break;
    case mark >= 33 && mark <= 39 : console.log('D'); break;
    default: console.log("Nothing"); break;
}