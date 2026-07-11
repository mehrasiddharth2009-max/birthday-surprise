const loading = document.getElementById("loadingScreen");
const lightScreen = document.getElementById("lightScreen");
const lightBtn = document.getElementById("lightBtn");
const fairyLights = document.querySelector(".fairyLights");
const title = document.getElementById("birthdayTitle");
const giftBox = document.getElementById("giftBox");

// 2 sec loading
setTimeout(() => {
    loading.classList.remove("active");
    lightScreen.classList.add("active");
}, 2000);

// Turn on lights
lightBtn.addEventListener("click", () => {

    fairyLights.classList.add("on");

    title.style.display = "block";

    lightBtn.style.display = "none";
    giftBox.style.display = "block";
    });
giftBox.addEventListener("click", () => {
    giftBox.classList.add("open");

    setTimeout(() => {
        alert("🎁 Surprise is coming...");
    }, 800);
});
