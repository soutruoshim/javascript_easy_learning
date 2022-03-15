// Es6 Feature: Array and Object Destructuring

function greeting(user){

    console.log(`Hello ${user.name} and age ${user.age} 
    from ${user.address.long}, ${user.address.lat}`);

    const {name, age, address} = user;
    console.log(`Hello ${name} and age ${age} 
    from ${address.long}, ${address.lat}`);

}
const user = {
    name: "Sout Ruoshim",
    age: 29,
    address: {
        long: 3424.90,
        lat: 4837.90
    }
}

greeting(user);

let [a, b, c] = [1,2,3];
console.log(a, b, c);

// Es6 Feature: (Set) not duplicate data
let set = new Set();
set.add(100);
set.add(200);
set.add(300);
set.add(100);
console.log(set);
console.log(set.size);
set.delete(200);
console.log(set);

for(let el of set){
    console.log(el)
}
set.forEach((el)=>console.log(el));
set.clear();
console.log(set);

// Es6 Feature: Map
let map = new Map();
map.set("Mango", "Ame");
map.set("Banana", "Kola");
map.set("Score", 100);
console.log(map);
for(let el of map){
    console.log(el);
}
console.log(map.has('Mango')); // true
console.log(map.has('mango')); // false
map.delete('Banana');
console.log(map);

console.log(map.values());
console.log(map.keys());

// Weak Set, Weak Map
let ws = new WeakSet();
const object1={};
const object2 = {};
ws.add(object1);
ws.add(object2);
console.log(ws);
console.log(ws.has(object1));
ws.delete(object1);
console.log(ws)

const wm = new WeakMap();
wm.set(object1, 12334);
wm.set(object2, 19483);
console.log(wm)
console.log(wm.has(object1))


