//as we seen till now we have 2 options for object creation
//var obj={};
//var obj=new Object();
//these both will indicate new empty object creation


//var obj=new Object();
// this thing is looking similar to 
// we had created earlier like:-
// var Vehicle2=new Vehicle(4,2000);
// this tells this obj has an refernce to a prototype 
// (refernce to Object.ptototype)
// see image 17
//i.e obj has dender proto of its own



//we should also know that vehicle contructor has also dender proto to object prototype
//i.e at top we have object, vehicle,vehicle1 etc...
//see image 18

//suppose we asked for vehicle1.color
//so it will be first looked into itself(v1)
//then to prototype vehicle
//then tioo object prototype
//then if not bound in these 3 places it will be returning undefined this is called protoype chain
//see image 19
//see image 20 (to know if we gave property to object it will be seen in object created )
//see image 21(to know if in herarchy if color is found just above it will give that color not go up)