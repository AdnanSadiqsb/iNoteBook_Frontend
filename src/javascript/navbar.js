var menu = document.querySelector(".menu")
var menubtn = document.getElementById("menu-btn")
var closebtn = document.querySelector(".close")
menubtn.addEventListener('click', () => {
    menu.classList.add('active');

});
closebtn.addEventListener('click', () => {
    menu.classList.remove('active');

})



// script for navigation bar behavour in scroll
window.addEventListener("scroll", function() {
    var header = document.querySelector("header");
    header.classList.toggle(".sticky", window.scrolly > 0);
});