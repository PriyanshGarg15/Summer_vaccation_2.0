var var1 =10;
//this var has  a global context becz iyt is being craeted in global scope
function outer() //function outer is global scope
{
    var b=40;
    //this has function context only
    console.log(b);
}
console.log(var1);

// all the function that you are creating add properties to window object

//outer function will become property of window
//so outer is a property which has value as a function
//also var 1 will appear as property of window
//it tells anything that you create globally is a part of window property
// so as both outer and global will be there as properties of windows
//see image a2 and image a3
//so we can acces like as done in a1_image
