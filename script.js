const loading = document.getElementById("loading");
const lightsPage = document.getElementById("lightsPage");

const fairy = document.querySelector(".fairyLights");
const btn = document.getElementById("lightBtn");

const title = document.getElementById("title");
const giftBox = document.getElementById("giftBox");

const cake = document.getElementById("cake");
const cakeArea = document.getElementById("cakeArea");

const cutBtn = document.getElementById("cutBtn");


/* Loading screen */

setTimeout(() => {

  loading.classList.remove("active");

  lightsPage.classList.add("active");

}, 2000);


/* Turn on lights */

btn.onclick = () => {

  fairy.classList.add("on");

  title.style.display = "block";

  btn.style.display = "none";

  giftBox.style.display = "block";

};


/* Open gift */

giftBox.onclick = () => {

  giftBox.classList.add("open");

  setTimeout(() => {

    giftBox.style.display = "none";

    cakeArea.classList.add("show");

    cake.style.display = "block";

    cutBtn.style.display = "block";

  }, 800);

};


/* Cut cake button */

cutBtn.onclick = () => {

  cutBtn.innerHTML = "Cake Cut! 🎉";

  cutBtn.disabled = true;

};
