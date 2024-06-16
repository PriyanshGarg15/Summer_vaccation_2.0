//classes is syntactical sugar over the conventional protype based inheritence


//net define-
// In JavaScript, creating objects and managing inheritance can be done through both constructor 
// functions and ES6 classes. While classes are syntactic sugar over the prototype-based inheritance 
// mechanism, they provide a more readable and 
// concise way to define and create objects.


class vehicle
{
    constructor(numWheels,price)
    {
        this.numWheels=numWheels;
        this.price=price;
    }
    getPrice()
    {
        return this.price;
    }
} 

var vehicle1=new vehicle(2,50000);
console.log(vehicle1.getPrice()); 
var vehicle2=new vehicle(4,2000);
console.log(vehicle2.getPrice());


//deep down everything is same
//se image 22