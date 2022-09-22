const switcher = document.querySelector('.image');
const myImages = ["Maple.jpg", "Easter.jpg", "Friends.jpg", "Dinner.jpg"];
const i = 0;
switcher.addEventListener('click', function() {
    var image = document.getElementById('image');
    if(i < myImages.length)
        i++;
    else
        i = 0;
    image.src = myImages[i];
});