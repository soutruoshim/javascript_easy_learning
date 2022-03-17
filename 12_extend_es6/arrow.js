// normal function
function name(n){
    return n;
}

var a = function name2(n){
    return n;
}
console.log(name("SrhDP"));
console.log(a("SrhDP"));

// arrow function
let fruit = (param) => {return param}
let fruit2 = param => param

let multiply = m => m * m * m;
let multiply2 = (m,n) => m * n;

console.log(fruit("Banana"))
console.log(fruit2("Banana"))
console.log(multiply(2))
console.log(multiply2(2,3))




