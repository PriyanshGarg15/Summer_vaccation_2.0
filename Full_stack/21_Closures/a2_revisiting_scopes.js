// there are two scopes
// global and function
var var1 =10;
//this var has  a global context becz iyt is being craeted in global scope
function outer() //function outer is global scope
{
    var b=40;
    //this has function context only
    console.log(var1,b);
}
outer();