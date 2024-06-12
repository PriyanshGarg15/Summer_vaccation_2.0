var i=10;
function outer()
{
    var j=20;
    console.log(i,j);
    //j is in its local scope while i is in its outer scope
    function inner()
    {
        var k=30;
        console.log(j,k,i);
    }
    inner();
}

outer(); 


//just rember if variable not present in its scope it sees in its outer scope for it



//output
// 10 20
// 20 30