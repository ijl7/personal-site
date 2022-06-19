function enableDark(){
    if(localStorage.getItem('dark-theme') == "dark-theme"){
        const className = document.body.className;
        className.replace("light-theme", "dark-theme");
        document.body.className.replace(document.body.className, className);
    }
}