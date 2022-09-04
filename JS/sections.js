//nav bar open and close
const body = document.querySelector('body'),    
navBar = body.querySelector('.nav'),
toggle = body.querySelector(".toggle")
close = body.querySelector(".close");
open = body.querySelector(".open");


toggle.addEventListener("click" , () =>{
    body.classList.toggle("close");
})
toggle.addEventListener("click" , () =>{
    body.classList.toggle("open");
})
toggle.addEventListener("click" , () =>{
    navBar.classList.toggle("close");
})
toggle.addEventListener("click" , () =>{
    navBar.classList.toggle("open");
});

menuLinks = document.querySelectorAll('.nav a[href^="#"]');

menuLinks.forEach((menuLink) => {
    menuLink.onclick = function()  {myFunction()};

function myFunction() {
   
    if (navBar.classList.contains("open"))
    navBar.classList.remove('open'),
    navBar.classList.add("close");
    
}});


