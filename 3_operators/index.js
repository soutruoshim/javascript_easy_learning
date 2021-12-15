//======= Arithmetic Operators
let num1 = 10;
let num2 = 5;

console.log(num1 + num2);
console.log(num1 - num2);
console.log(num1 * num2);
console.log(num1 / num2);
console.log(num1 % num2);
console.log(num1 ** num2);

//====== Assignment Operators
let num3 = 10;
let num4 = num3;
console.log(num3, num4)

num1 = num3 + num4;
console.log(num1);

//===== Comparison Operators (> < >= <= === !== )
 
let price = 200;
console.log(price < 200)   // false
console.log(price >= 200)  // true
console.log(price <= 100)  // false
console.log(price !== 100) // true
console.log(price === 200) // true

//=======Logical Operators (and(&&) , or(||), not(!) )
console.log(price > 100 && price < 300)
console.log(!(price > 300))

//=======Equality Operators
let price2 = 10;
console.log(price2 === 10); //true,  check datatype and value
console.log(price2 !== 20);

console.log(price2 == '10'); //true  , check value only
console.log(price2 != 20);

//=========exercise swap
let apple = 10;
let orange = 20;

console.log('apple: ' + apple, 'orange:' + orange);

let temp = apple;
apple = orange;
orange = temp;

console.log('apple: ' + apple, 'orange:' + orange);









