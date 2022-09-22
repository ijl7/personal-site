const picture = document.querySelector('.image');
const myImages = ["media/Maple.jpg", "media/Easter.jpg", "media/Friends.jpg", "media/Dinner.jpg"];
const i = 0;
picture.addEventListener('click', function() {
    var image = document.getElementById('image');
    if(i < myImages.length)
        i++;
    else
        i = 0;
    image.src = myImages[i];
});