var i=10;
function outer()
{
    var j=20;
    var inner=function()
    {
        var k=30;
        console.log(j,k);
        k++;
        j++;
    }
    return inner;
}

var get_inner=outer(); //we are storing returned inner in get_inner
get_inner(); 
get_inner(); 


// this output is
// 20 30
// 21 30
// becz  each time new context of is being created on call
