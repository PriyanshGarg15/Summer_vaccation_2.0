// this behaves somewhat differnetly in js


//if code is run in global context

// console.log(this);
//this this will be refering to window object in global context


// -----------------------------------------------------------------

//if code run in function context

// recap:-
// functions in js are first class functions
// this means
// 1)can pass functions as arguments
// 2)retuen them as values

// every function taht you will be calling will create execution environment
// related to that function
// that lexical environment have things covered WakeLockSentinel
// 1)variables
// 2)refernce to outer environment
// 3)this keyword

// function demo()
// {
//     console.log(this);
// }
// demo();

//this this will be refering to window object in function context


//see image a1

// but this is not the case always
// this actually depends in a way we called demo
// i.e in fucntion scope this works differnetly not always point to windows object

//  even in calling fucntion by storing wil give window object
//  becz it still will refer to global this
//  i.e
// var demo=function()
// {
//     console.log(this);
// }
// demo();

// now calling fucntion via object:-

// var obj=
// {
//     'prop1':12,
//     'print':function()
//     {
//         console.log(this);
//     }
// }
// obj.print;

// //its output in image 2
// in this case output of this will be object

 
//remember-
// there are 4 ways in which fucntion can be called
// 2 discussed above 1)plain/normal way(2 ways duscussed above)
//                   2)by creating object

 
// 3) using strict way
// 'use strict'
// function demo()
// {
//     console.log(this);
// }
// demo();

//this will now give undefined if used in strict mode
//this happened becz in plain way is not bound to any object so without strict 
// default global value of this if.e windows is taken
// //but in strict mode we havnt bound function
// to any object so it is giving undefined 
// but in strict mode also we can bound it 
// using ->call
//       ->apply
//       functions

'use strict'
function demo()
{
    console.log(this);
}

var obj=
{
    'prop1':12,
    'print':function()
    {
        console.log(this);
    }
}
obj.print;
demo.call(obj);

// demo.call(obj);
// will bound demo to obj object
//(if we wrote demo.call(windows)  it will give windows object )


//now it will give that obj object not undefined 
//see image 3

//even demo.apply(obj) will give same result
// so diff. b/w both is that  
// in case of apply if there we need to pass arguments we would had to pass in artray while in call we had to pass as it is see below example


// 'use strict'
// function demo(a,b)
// {
//     console.log(this);
//     console.log(a,b);
// }

// var obj=
// {
//     'prop1':12,
//     'print':function()
//     {
//         console.log(this);
//     }
// }
// obj.print;
// demo.call(obj,3,4);






// 'use strict'
// function demo(a,b)
// {
//     console.log(this);
//     console.log(a,b);
// }

// var obj=
// {
//     'prop1':12,
//     'print':function()
//     {
//         console.log(this);
//     }
// }
// obj.print;
// demo.apply(obj,[3,4]);


 
