// var, let, const
function foo(){
    for(var i = 0; i < 5; i++){
        console.log("Hi var variable");
    }
    console.log(i);
    for(let j = 0; j < 5; j++){
        console.log("Hi ReactJs");
    }
    // console.log(j); not work cus j declare with let
    const PI = 3.14;
    // PI = 20; error cus const can't change
    console.log(PI);

}
foo();


