// For loop
for(let index = 1; index <= 5; index++){
    console.log("Welcome" , index);
}

// While loop
let i = 1;
while(i <= 5){
    console.log("Welcome i", i);
    i++;
}

// Do while loop
let k = 1;
do{
   console.log('Welcome k', k);
   k++;
}while(k <= 5);

// For in loop

const objs = {
    name: 'Sout',
    age: 29
}

for(let key in objs){
    console.log(key, " ", objs[key]);
}

let numbers = [1,2,3,4,5];
for(let key in numbers){
    console.log(key, " ", numbers[key]);
}


// For of loop get value only
for(let num of numbers){
    console.log(num);
}

// Break;
for(let index = 1; index <= 20; index++){
    if(index === 10) break;
    console.log(index);
}

// continue
for(let index = 1; index <= 20; index++){
    if(index === 10) continue;
    console.log(index);
}

// Infinite Loop
// for(let index = 1; ; index++){
//     console.log(index);
// }

// Nested Loops
for(let index = 1; index <= 5; index++){
    for(let nest_index = 1; nest_index <= 3; nest_index++){
         console.log(index, nest_index);
    }
}






