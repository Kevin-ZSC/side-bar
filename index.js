const time = document.querySelector(".fa-times");
const bar = document.querySelector(".fa-bars");
const menu = document.querySelector(".menu");

bar.addEventListener("click", (e)=> {
    menu.classList.toggle("show-menu");
    time.classList.toggle("show-fa-times");
    bar.classList.toggle("show-fa-bars");
})