let dark = document.getElementById("dark");
let head = document.getElementById("myheader");
let heade = document.getElementById("myhead");
let nav = document.getElementById("container-fluid")
let but1 = document.getElementById("mode");

but1.addEventListener("click", (eo) => {
    dark.classList.toggle("dark-mode");
    head.classList.toggle("dark-mode");
    heade.classList.toggle("dark-mode");
    nav.classList.toggle("dark-mode");
});
