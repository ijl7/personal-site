const picture = document.getElementById('image');
const myImages = ["media/Maple.jpg", "media/Easter.jpg", "media/Friends.jpg", "media/Dinner.jpg"];
var i = 0;
var opacity = 0;
picture.addEventListener('click', function() {
    if(i < myImages.length - 1)
        i++;
    else
        i = 0;
    picture.classList.remove = opacity;
    setTimeout(() => {picture.src = myImages[i];}, 1000);
    setTimeout(() => {picture.classList.add = opacity;}, 2000);
});