// class vehicle
// {
//     constructor(numWheels,price)
//     {
//         this.numWheels=numWheels;
//         this.price=price;
//     }
//     getPrice()
//     {
//         return this.price;
//     }
// } 

// var vehicle1=new vehicle(2,50000);
// console.log(vehicle1.getPrice()); 
// var vehicle2=new vehicle(4,2000);
// console.log(vehicle2.getPrice());

// can we written as

// var vehicle=class
// {
//     constructor(numWheels,price)
//     {
//         this.numWheels=numWheels;
//         this.price=price;
//     }
//     getPrice()
//     {
//         return this.price;
//     }
// } 

// var vehicle1=new vehicle(2,50000);
// console.log(vehicle1.getPrice()); 
// var vehicle2=new vehicle(4,2000);
// console.log(vehicle2.getPrice());


// this can be unnamed as above also can be named as

var vehicle=class pg
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