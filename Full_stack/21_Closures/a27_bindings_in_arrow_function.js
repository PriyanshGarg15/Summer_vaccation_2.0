//  function Person(name)
//  {
//     this.name=name;
//     console.log(this); //this this refers to name object
//     setTimeout(
//         function()
//         {
//             console.log(this); //this this refers to window object
//         },1000
//     )
//  }
//  var p=new Person("Mansiha")

//  but this is now case with arrow function

function Person(name)
{
   this.name=name;
   console.log(this); //this this refers to name object
   setTimeout(
       () =>
       {
           console.log(this); //this this refers to window object
       },1000
   )
}
var p=new Person("Mansiha")