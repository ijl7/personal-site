const switcher = document.querySelector('.bar');
document.body.onload =function(){
    if(localStorage.getItem('dark-theme') == "dark-theme"){
        document.body.classList.remove('light-theme');
        document.body.classList.add('dark-theme');
    }
}

switcher.addEventListener('click', function() {
    document.body.classList.toggle('light-theme');
    document.body.classList.toggle('dark-theme');
    const className = document.body.className;
    localStorage.setItem('dark-theme', JSON.stringify(className));
    if(className == "light-theme") {
        document.querySelector(".slider").style.left = "0%";
        document.querySelector('.slider').textContent = "Light";
    } else {
        document.querySelector(".slider").style.left = "50%";
        document.querySelector('.slider').textContent = "Dark";
    }
});