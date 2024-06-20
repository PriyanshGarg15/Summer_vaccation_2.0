$('p').css(
    {
        fontSize:"30px",
        color:"grey"
    }
);

$('div').css(
    {
        width:"100px",
        height:"100px",
        backgroundColor:"cyan"
    }
)

$('div').click(function()
{
    alert("div clicked");
})


// or 

// $('div').on('click',function()
// {
//     alert("div clicked");
// })




$('div').on('click',function()
{
    var element=$(this);
    element.width(element.width()+10+"px")
})

$('a').on('click',function(event)
{
    event.preventDefault();
    alert("anchor tag clicked");
})