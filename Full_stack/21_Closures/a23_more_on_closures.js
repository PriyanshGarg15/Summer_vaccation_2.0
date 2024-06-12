var i=10;
function outer()
{
    var j=20;
    var inner=function()
    {
        var k=30;
        console.log(i,j,k);
        i++;
        j++;
        k++;
    }
    return inner;
}

var get_inner=outer(); //we are storing returned inner in get_inner
get_inner(); 
get_inner=outer();
get_inner();


// this output is
// 10 20 30
// 11 21 30
// becz  each time new context is being created on call for inner not for others
// same concept as in a21
