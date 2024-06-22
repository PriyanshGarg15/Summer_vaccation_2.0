function fetchRandomDogImage() {
    var xhrRequest = new XMLHttpRequest();
    xhrRequest.onload = function() {
        // Convert JSON string to object
        var responseJson = JSON.parse(xhrRequest.response);
        var imageUrl = responseJson.message;
        $('#dog-image').attr('src', imageUrl); // Use # for ID selector
    };
    xhrRequest.open('GET', 'https://dog.ceo/api/breeds/image/random', true);
    // true for async request 
    xhrRequest.send();
}

$('#fetch-dog-image').click(fetchRandomDogImage);
