function print()
{
    var file_name="file1"
    //now this variable comes in fucntion scope instead 
    // of global scope
    setTimeout(function()
    {
        console.log(file_name);
    },1000);

}
print()