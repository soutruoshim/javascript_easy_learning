// Javascript Object

let user = {
    name: "Sout Ruoshim",
    age: 30,
    hobby : "Reading",
    isMarried: true
};
console.log(user);
console.log(user.name);
console.log(user['name']);
console.log(user['hobby']);

// Add 
user.email = 'sout.rahim@gmail.com';
user["phone"] = "011362283";
console.log(user);

// Update property
user.isMarried = false;
console.log(user);

// Delete 
delete user.age;
console.log(user);

// Object method and This keyword

let user2 = {
    name: "Sout Ruoshim",
    age: 30,
    isMarried: true,
    friends:['Sok', 'Ly', 'Heng'],
    selectColor: null,
    calculateAge: function(){
        console.log(`I am ${this.age} Ruoshim`);
    }
};
user2.calculateAge();

// Traversing Object
const user3 = {
    name: 'Ruoshim',
    age: 40,
    gender: 'Male',
    phone: '011362283',
    email: 'sout.rahim@gmail.com'
}

// one way
for(let key in user3){
    console.log(key, user3[key]);
}

// two way
console.log(Object.keys(user3));
console.log(Object.values(user3))

for(let val of Object.values(user3)){
    console.log(val);
}

// Exercise
const salaries = {
    kazi : 400,
    jackma: 500,
    jon: 320,
    raju: 400
}

let sum = 0;
for(let key in salaries){
    console.log(key, salaries[key]);
    sum += salaries[key];
}
console.log(sum);

console.log(Object.values(salaries));
sum = 0;
for(let value of Object.values(salaries)){
     sum += value;
}
console.log(sum);


// Object destructuring
const user4 = {
    name: 'Ruoshim',
    age: 40,
    favBook:{
        bookname: 'Think and Grow Rich',
        bookauthor: 'xyz',
    }
}

console.log(user4.name);
console.log(user4.age);
console.log(user4.favBook);
console.log(user4.favBook.bookauthor);

//destructuring
const {name, age, favBook} = user4;
const {bookname, bookauthor} = favBook;
console.log(name);
console.log(age);
console.log(bookname);
console.log(bookauthor);

// clone object data
const copiedUser = {};
copiedUser.name = user4.name;
copiedUser.age = user4.age;
console.log(copiedUser);

for(let key in user4){
    copiedUser[key] = user4[key];
}

console.log(copiedUser);
const copiedUser2 = Object.assign({}, user4);
console.log(copiedUser2);

// Math object
console.log(Math.PI);
console.log(Math.random());
console.log(Math.round(4.9));

// Json Data Format

const user5 = {
    name: 'sout rusohim',
    age: 40
}
const jsonData = JSON.stringify(user);
console.log(jsonData);
console.log(JSON.parse(jsonData));






