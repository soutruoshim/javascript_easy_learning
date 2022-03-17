class Fruit{
    constructor(name){
        this.name = name;
    }
    fol(){
        console.log(this.name + ' Is too much testy');
    }
    static jackFruite(){
        console.log("This is Jack Fruite");
    }
}
let fruit = new Fruit("Banana");
fruit.fol();
Fruit.jackFruite();

