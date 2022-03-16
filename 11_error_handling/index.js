// custom message erro
function div(a, b){
    if(b===0){
        throw new Error("Secode parameter can't be zero");
    }
    return a / b;
}
//console.log(div(4,0));

try{
    console.log(div(4,0));
}
catch(e){
    console.log(e);
    console.log(e.name);
    console.log(e.message)
}
finally{
    console.log("It Work");
}
console.log("work")