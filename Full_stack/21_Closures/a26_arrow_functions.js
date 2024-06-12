// compact and easy way of writing functions

// till now:-

// var multiply=function(x,y)
// {
//     return x*y;
// }
// console.log(multiply(4,6));

// using arrowfunction:-


var multiply = (x,y) => 
    {
        return x*y;
    }
console.log(multiply(4,6));

//in case if single statement is to be executed then
var multiply = (x,y) => x*y;
console.log(multiply(4,6));