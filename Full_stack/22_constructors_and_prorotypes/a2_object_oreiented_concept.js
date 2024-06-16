// in typical programming languages we have classess and objects
// classess serve as tempelate
// object are instances of classes


// ex:- if we have an object named as student we can have its name, marks,age,city Etc.

// so we will create class for student ans we will create 
// instances from those classes


//in js we dont have class we have objects
// even functions are objects in js

// ex:-
// var student1=
// {
//     name:"abc",
//     marks:80,
//     roll_no:10,
// }

// console.log(student1);
//it will print object student properties

// suppose it is for one student and as js dont have class concept(which could had served as tempelate concept as in java)
// so how do we manage if we would had many students


// so we will do:-
// we will create a function

function createStudent(name,rollNo,marks)
{
    var student={};
    // var student=new Object();
    //also can create object using new Object();
    student.name=name;
    student.rollNo=rollNo;
    student.marks=marks;
    return student;
}

var student1=createStudent("abcd",15,78);
var student2=createStudent("pg",13,25);
console.log(student1);
console.log(student2);
// so on... 