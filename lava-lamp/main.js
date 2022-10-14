let website = document.body;
let greenBtn = document.getElementById("green-btn");
let lilaBtn = document.getElementById("lila-btn");
let blueBtn = document.getElementById("blue-btn");
let lava1 = document.getElementById("lava1");
let lava2 = document.getElementById("lava2");
let lava3 = document.getElementById("lava3");

function darkMode() {
    website.classList.toggle("dark-mode-body");
}

function showBtns() {
    greenBtn.classList.toggle("style-btn");
    lilaBtn.classList.toggle("style-btn");
    blueBtn.classList.toggle("style-btn");
}

function changeColorToGreen() {
    lava1.classList.toggle("changeToGreen");
}