//__prorto__
//all objects created from constructor function has this property
//ex- vehicle1.__proto__
//this prototype is equal to that of vehicle prototype
//i.e vehhicle.prototype===vehicle1.__proto__
//output=true
//this __proto__ is called as dunder proto
//use of this(vehicle1.__proto__) property should not be used now
//so alternative:-
// Object.getPrototypeOf(vehicle1)
//is encoraged to bes used
//see image 12


//we also have property to check if object protype belong to protype of the cobstructor function or not
//using Vehicle.prototype.isPrototypeOf(Vehicle1)
//output true
//see image 13


//we also have property to know whether that property in object is of its own is it is property of protoype chain(ex getPrice is of Vehicle i.e chain property not vehicle 1 owns property)
//see image 14




//now suppose we added a property of color in run time in protoype of constructor
//now suppose we changed this common prperty of all in some object suppose in vehicle 1 in runtime
//so this will create that property in prototype(__proto__) of that object 
//see image 15 and image 16(to see implementation)