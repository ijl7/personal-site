const picture = document.querySelector('.image');
const myImages = ["media/Maple.jpg", "media/Easter.jpg", "media/Friends.jpg", "media/Dinner.jpg"];
var i = 0;
var opacity = 0;
picture.addEventListener('click', function() {
    var image = document.getElementById('image');
    if(i < myImages.length - 1)
        i++;
    else
        i = 0;
    image.classList.remove = opacity;
    setTimeout(() => {image.src = myImages[i];}, 1000);
    setTimeout(() => {image.classList.add = opacity;}, 2000);
});