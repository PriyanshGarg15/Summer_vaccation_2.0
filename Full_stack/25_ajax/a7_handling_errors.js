function fetchRandomDogImage() {
    $.get('https://dog.ceo/api/breeds/image/random',function(data) 
        {
            var imageUrl = data.message;
            $('#dog-image').attr('src', imageUrl);
        }).fail()
}

$('#fetch-dog-image').click(fetchRandomDogImage);
