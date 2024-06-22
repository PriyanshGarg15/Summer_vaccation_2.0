function fetchRandomDogImage() {
    // var xhrRequest = new XMLHttpRequest();
    // xhrRequest.onload = function() {
    //     // Convert JSON string to object
    //     var responseJson = JSON.parse(xhrRequest.response);
    //     var imageUrl = responseJson.message;
    //     $('#dog-image').attr('src', imageUrl); // Use # for ID selector
    // };
    // xhrRequest.open('GET', 'https://dog.ceo/api/breeds/image/random', true);
    // // true for async request 
    // xhrRequest.send();



    //doing same thing using ajax;
    // $.ajax({
    //     url: 'https://dog.ceo/api/breeds/image/random',
    //     method:'get',
    //     success:function(data) 
    //     {
    //         var imageUrl = data.message;
    //         $('#dog-image').attr('src', imageUrl);
    //     }
    // })




    //other way using get reuqest made easy usinbg ajax
    $.get('https://dog.ceo/api/breeds/image/random',function(data) 
        {
            var imageUrl = data.message;
            $('#dog-image').attr('src', imageUrl);
        })
}

$('#fetch-dog-image').click(fetchRandomDogImage);
