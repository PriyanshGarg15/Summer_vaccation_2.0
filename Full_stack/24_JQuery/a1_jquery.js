// jquery is light weight library of js that makes writing code easy of js
//it works on multiple browsers




//suppose we had to change para1 text using normal js
// var para1=document.getElementById('para1');
// para1.innerHTML="welcome"

//now using jquery
// $('#para1').html('WELCOME')






//to hide para using jquery
// $('#para1').hide();

//to fetch width for paragraph(getter)
// $('#para1').width();

//to set the width(setter)
// $('#para1').width(20);

//to chnage text of all p tags in html to welcome
// $('p').html('WELCOME')




//differnce b/w normal and jquery library objects?

// var paras=$('p');
//this is jquery object
//The code var paras = $('p'); creates a jQuery object that contains
//all <p> elements in the HTML document, allowing you to perform various
//jQuery operations on these elements collectively
//paras.html("welcome")
//it will set all paragraph text to welcome

// var p1=paras.eq(0); //this will give jquery object(this object have lot more features)
// or
// var p1=paras[0]; //this will give you dom object i.e we cant do p1.html("PRIYANSH") becz now its not returning jquery object
                    // we have to do p1.innerHTML="PRIYANSH" for this to work
                    //to make this in jquery object do $(p1)
//these both will give you requested paragraph from that object


