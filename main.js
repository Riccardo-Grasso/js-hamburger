const menu = document.querySelector("div:nth-child(3)");
const icon = document.querySelector("i.fas.fa-bars");
const cross = document.querySelector(".close i");

console.log(menu, icon);

icon.addEventListener("click", function () {
    menu.classList.toggle("active");
});

cross.addEventListener("click", function () {
    menu.classList.toggle("active");
});