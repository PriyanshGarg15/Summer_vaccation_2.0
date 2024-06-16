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
    printDescription()
    {
        console.log("vehicle",this.numWheels,this.price);
    }
    
} 

class car extends vehicle
{
    constructor(price,numDoors)
    {
        super(4,price);
        this.numDoors=numDoors;
    }
    
    printDescription()
    {
        super.printDescription();
       console.log("CAR");
    }
}

// var vehicle1=new vehicle(2,50000);
// console.log(vehicle1.getPrice()); 
// var vehicle2=new vehicle(4,2000);
// console.log(vehicle2.getPrice());

var c=new car(4,4000);
console.log(c);
console.log(c.printDescription());
