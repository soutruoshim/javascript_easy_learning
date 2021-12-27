// Arrays
let friends = ["Kazi", "Roshim", "Him"];
console.log(friends);
console.log(friends[0]);
console.log(friends[1]);
console.log(friends[2]);

console.log(friends.length);

const numbers = [12,13,14,15];
// numbers.unshift(9,10,11);  // add element to array first index
// numbers.push(16, 17);      // add element to array last index
numbers.splice(3, 0, 15, 16); // add element specific index
console.log(numbers);

const numbers2 = [1,2,3,4,5,6,7];

// numbers2.shift();   // remove first index
// numbers2.pop();     // remove last index

numbers2.splice(2, 3);  // remove 3 value start with index 2
console.log(numbers2);

// find element with primitive type
const numbers3 = [1,2,3,4,5,6,7];
console.log(numbers3.includes(3));
console.log(numbers3.includes(6, 1));
console.log(numbers3.indexOf(2));
console.log(numbers3.lastIndexOf(2));

// Finding Object Array
const doctors = [
    {name: 'Kazi', age: 29},
    {name: 'Sout', age: 31},
    {name: 'Ruoshim', age: 32},
];
const result = doctors.find(function(doctor){
      // eturn doctor.name === 'Sout';
      return doctor.age > 30;
});
console.log(result);

// Iterating an array
const numbers4 = [1,2,3,4,5];
for(let index = 0; index < numbers4.length; index++){
      console.log(index, numbers4[index]);
}

for(let index in numbers4){
    console.log(index, numbers4[index]);
}

for(let num of numbers4){
    console.log(num);
}

numbers4.forEach(function(num, index){
     console.log(num, index);
});

// Sorting & Reversing an Array
const numbers5 = [6, 8 ,4, 7, 0];
numbers5.sort();
console.log(numbers5);
numbers5.reverse();
console.log(numbers5);

let doctors2 =[
    {name: 'Zazi', age: 29},
    {name: 'Sout', age: 40},
    {name: 'Ruoshim', age: 32},
];
doctors2.sort(function(d1, d2){
    if(d1.age > d2.age) return +1;
    if(d1.age === d2.age) return 0;
    if(d1.age < d2.age) return -1;
}).reverse();
console.log(doctors2);

// Array Method = every, some
const numbers6 = [0, 5,4,2,3,8];
const data = numbers6.every(function(num){
    return num > 0;
});
console.log(data);

const data2 = numbers6.some(function(num){
    return num > 0;
});
console.log(data2);

// combind array
const number1 = [1,2,3];
const number2 = [4, 5,6 ,7];
const num = number1.concat(number2);
console.log(num);

const numbers7 = [1,2,3,4,5,6,7,8,9];
// get array element from index 2-5
const sliceArray = numbers7.slice(2, 5);

console.log(sliceArray);

// Spread Operator
const numbers8 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(numbers8);
console.log(...numbers8);

const copyArray = [...numbers8];
console.log(copyArray);

const num3 = [1,2,3];
const num4 = [4, 5, 6];
const combindNum = [...num3, ...num4];
console.log(combindNum);
 

// Join Array
let numbers9 = [1, 2, 3, 4];
let joinArray = numbers9.join('-');
console.log(joinArray);

let message = "Hi i am sout ruoshim";
const arrayMessage = message.split(" ");
console.log(arrayMessage.join('-'));






