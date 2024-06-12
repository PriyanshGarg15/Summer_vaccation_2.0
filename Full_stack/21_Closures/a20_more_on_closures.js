var i=10;
function outer()
{
    var j=20;
    var inner=function()
    {
        var k=30;
        console.log(j,k);
        k++;
    }
    return inner;
}

var get_inner=outer(); //we are storing returned inner in get_inner
get_inner(); 
get_inner(); 