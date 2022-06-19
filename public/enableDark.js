function enableDark(){
    if(localStorage.getItem('dark-theme') == '"dark-theme"'){
        document.body.classList.toggle('light-theme');
        document.body.classList.toggle('dark-theme');
    }
}