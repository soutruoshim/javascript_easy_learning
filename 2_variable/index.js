// Variables

/* 
  - Variable name should be meaningful
  - Don't use any reserved keywords
     ex: var loop;
  - Can't start with number
  - Can't contain a space or hyphen
     ex: var current-user-age; var current user age;

  style declare
  - camel case: currentUserAge
  - pascel case: CurrentUserAge
  - snake case: current_user_age   
*/

var full_name = 'Sout Ruoshim';
var age = 40;
var gender = 'male';

console.log(full_name);

// =========Let & Const
let price = 250;
const first_name = 'Ruoshim';
// first_name = "Sout"; error cus variable declare with const keyword

// let keywork variable can change value
price = 300;
console.log(price, first_name);

// =========Primitive Data type
let name = "Ruoshim";
console.log(typeof name);

let age_2 = 40;
console.log(typeof age_2);  // number type

let isMarried = false;
console.log(typeof isMarried); // boolean type

let colors; // equal colors = undefined
console.log(typeof colors); // undefined type

let selectColor = null;
console.log(typeof selectColor); // object type

// ===========Object basic
let user = {
     name: "Ruoshim",
     age: 30,
     hobby: 'reading'
}
console.log(user);
console.log(user.name);
console.log(user.hobby);
console.log(user['name']);
console.log(user['age']);

// =============Array
let friends = ['airyan', 'jackma', 'raju'];
console.log(friends);
console.log(friends[0]);
console.log(typeof friends);
console.log(friends.length);

// ==============function basic
function showMyName(){
   console.log('My name is Ruoshim');
}

function showMyNameWithParam(name){
   console.log('My name is ', name);
}

function showMyNameWithMultiParam(name, age){
   console.log('My name is ' + name + ' And Age is '+age);
}

function calcSum(num1, num2){
   const sum = num1 + num2;
   return sum;
}

showMyName();
showMyNameWithParam('Ruoshim');
showMyNameWithMultiParam('Ruoshim', 28);

const result = calcSum(20, 10);
console.log(result);

// ===========Template Literals
let name_3 = 'Rusohim';
console.log('My name is ' + name_3);
console.log(`My name is ${name_3}`); // literals
console.log(`${30 + 20}`);

let message = 'my name is \nRuoshim';
console.log(message);
let message_2 = `my name
is
Ruoshim
`;
console.log(message_2)
/* display:
   my name
   is
   Ruoshim
*/