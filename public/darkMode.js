const switcher = document.querySelector('.bar');

if(localStorage.getItem('dark-theme') == "dark-theme"){
    toggleDark();
}

switcher.addEventListener('click', toggleDark);

function toggleDark() {
    document.body.classList.toggle('light-theme');
    document.body.classList.toggle('dark-theme');
    const className = document.body.className;
    localStorage.setItem('dark-theme', JSON.stringify(className));
    if(localStorage.getItem('dark-theme') == "light-theme") {
        document.querySelector(".slider").style.left = "0%";
        document.querySelector('.slider').textContent = "Light";
    } else {
        document.querySelector(".slider").style.left = "50%";
        document.querySelector('.slider').textContent = "Dark";
    }
}