window.addEventListener("DOMContentLoaded", () => {

const loading = document.getElementById("loading");
const lightsPage = document.getElementById("lightsPage");
const fairy = document.querySelector(".fairyLights");
const btn = document.getElementById("lightBtn");
const title = document.getElementById("title");
const giftBox = document.getElementById("giftBox");
const cakeArea = document.getElementById("cakeArea");
const cutBtn = document.getElementById("cutBtn");

setTimeout(() => {

if (loading) {
loading.classList.remove("active");
loading.style.display = "none";
}

if (lightsPage) {
lightsPage.classList.add("active");
lightsPage.style.display = "block";
}

}, 2000);

if (btn) {

btn.onclick = () => {

if (fairy) {
fairy.classList.add("on");
}

if (title) {
title.style.display = "block";
}

btn.style.display = "none";

if (giftBox) {
giftBox.style.display = "block";
}

};

}

if (giftBox) {

giftBox.onclick = () => {

giftBox.classList.add("open");

setTimeout(() => {

giftBox.style.display = "none";

if (cakeArea) {
cakeArea.classList.add("show");
}

if (cutBtn) {
cutBtn.style.display = "block";
}

}, 800);

};

}

if (cutBtn) {

cutBtn.onclick = () => {

alert("Happy Birthday! 🎂🎉");

};

}

});
