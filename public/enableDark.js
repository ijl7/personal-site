function enableDark(){
    if(localStorage.getItem('dark-theme') == "dark-theme"){
        DOMTokenList.replace("light-theme", "dark-theme");
    }
}