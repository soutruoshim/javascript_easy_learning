
// Basic
let country = "Cambodia";
console.log(country);           // Cambodia
console.log(typeof country);    // string
console.log(country[3]);        // b
console.log(country.charAt(3)); // b

// String methods
let message = "Hi My name Is Ruoshim";
console.log(message);
console.log(message.charAt(1));
console.log(message.toUpperCase());
console.log(message.toLowerCase());
console.log(message.includes('Ruoshim')); // return true if search found
console.log(message.startsWith('Ruoshim')); // return true if search found
console.log(message.endsWith('Ruoshim')); // return true if search found

console.log(message.search('My'));       // return index of M is 3
console.log(message.indexOf('My'));      // return index of M is 3
console.log(message.lastIndexOf('Hi'));  

let temp = 123;
console.log(temp);
console.log(typeof temp); 
console.log(typeof temp.toString()); //  string
let temp2 = [1,2,3];
console.log(temp2.toString());  // show 1,2,3

let m1 = 'Hi';
let m2 = ' My name';
let m3 = ' Ruoshim';

let m = m1.concat(m2, m3); // combine value
console.log(m);

console.log(message);
console.log(message.split(' '));
let messageArr = message.split(' ');
for(let key in messageArr){
    console.log(key, messageArr[key]);
}

console.log(message.slice(0, 4));  // get string from index 0 to 4 equal (Hi M)
console.log(message.slice(4, 10)); // get string from index 4 to 10 equal(y name)
console.log(message.slice(2));     // from 2 to end string (My name Is Ruoshim)
console.log(message.slice(0));     // display all data
console.log(message.slice());      // display all data

console.log(message.substring(0, 3));  // display Hi
console.log(message.substr(0, 3));     // display Hi

// Hi Ruoshim "It 's a nice Course".
// How are you?
let message2 = '\tHi Ruoshim \\ "It is\'s a nice Course".\nHow are you?';
console.log(message2);

// String Immutability
let message3 = 'ji Ruoshim';
message3[0] = 'Hi';  // not change data
console.log(message3) 



















