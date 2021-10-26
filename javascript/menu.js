let MenuIcon = document.getElementById("sectionMenu-icon");
let MenuOption = document.getElementById("optionsMenu");

document.getElementById("sectionMenu-icon").addEventListener("click", function() {
    if(MenuIcon.innerHTML == 'menu'){
        MenuIcon.innerHTML = 'close';
        MenuOption.style.display = 'block';
    }else{
        MenuIcon.innerHTML = 'menu';
        MenuOption.style.display = 'none';
    }
});