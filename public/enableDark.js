function enableDark(){
    if(localStorage.getItem('dark-theme') == "dark-theme"){
        document.body.classList.remove('light-theme');
        document.body.classList.add('dark-theme');
    }
}