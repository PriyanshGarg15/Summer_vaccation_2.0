//just revisit samarth bhaiya way of making context


// there are two scopes
// global and function
var var1 =10;
//this has global execution context
//this var has  a global context becz iyt is being craeted in global scope
function outer() //function outer is global scope
{
    var b=40;
    //this has function context only
    console.log(var1,b);
}
outer();

//there is execution stack where all execution context are put as they are being made
//first global execution context is created
//lexical environment is associated with it
//it has all variables that are there in this global scope 
//here we have two variables a and outer in global scope
//when outer call is made so js being single threaded langugae only one execution context at a time can be executed
//so outer will make next global execution context for outer function with new lexical environment for it


//for a question / practice refer a4_image