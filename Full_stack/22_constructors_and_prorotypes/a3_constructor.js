// js makes thing of classess easy by using constructor
function Createstudent(name,rollNo,marks)
{
    this.name=name;
    this.rollNo=rollNo;
    this.marks=marks;
}

var student1=new Createstudent("abcd",15,78);
var student2=new Createstudent("pg",13,25);
console.log(student1);
console.log(student2);


//steps:- 
//no need to make object
//no need to return
//just add new in fucntion calling
//and allot to this object 