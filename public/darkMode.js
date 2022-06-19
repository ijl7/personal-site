'use strict';
const switcher = document.querySelector('.bar');
const className = document.body.className;
localStorage.setItem(document.body.className, className)
switcher.addEventListener('click', function() {
    document.body.classList.toggle('light-theme');
    document.body.classList.toggle('dark-theme');
    const className = document.body.className;
    if(className == "light-theme") {
        document.querySelector(".slider").style.left = "0%";
        document.querySelector('.slider').textContent = "Light";
    } else {
        document.querySelector(".slider").style.left = "50%";
        document.querySelector('.slider').textContent = "Dark";
    }
});