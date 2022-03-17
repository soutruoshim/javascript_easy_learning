const Mango ={
    color:"Yellow",
    price: 120,
    weight: 130,
    about: function(){
        return `This mango price is ${this.price} $`;
    }
}
console.log(Mango.about())