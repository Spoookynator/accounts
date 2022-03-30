function loginSelected(selected) {
    if (selected == false) {
        document.getElementById("registerSelect").classList.add("selected");
        document.getElementById("loginSelect").classList.remove("selected");
    }
    else {
        
        document.getElementById("loginSelect").classList.add("selected");
        document.getElementById("registerSelect").classList.remove("selected");
    }
}
