//constructor function
function Vehicle(numWheels,price)
{
    this.numWheels=numWheels;
    this.price=price;

    //addinf behavior(function)
    //suppose we need behaviour of respondong if price is asked
    this.getPrice=function()
    {
        return this.price;
    }
}
var Vehicle1=new Vehicle(2,50000);
console.log(Vehicle1.getPrice()); 
var Vehicle2=new Vehicle(4,2000);
console.log(Vehicle2.getPrice());

//now we see a problem as getPrice is same for all 
//but each time each vehicle is creating its sepearte copy 
//for getprice so each have three properties
//numWheels //price //getprice
//but storing getprice for in each is memory wastage task
//in rest languages these common functions are stores somewhere 
// else and we fetch it from there
//see image4
//i.e mutiple copies of common function should be avoided
//so comes protypes 