const loading = document.getElementById("loadingScreen");
const lightScreen = document.getElementById("lightScreen");
const lightBtn = document.getElementById("lightBtn");
const fairyLights = document.querySelector(".fairyLights");
const title = document.getElementById("birthdayTitle");
const giftBox = document.getElementById("giftBox");
const cake = document.getElementById("cake");
const knife = document.getElementById("knife");
const cutBtn = document.getElementById("cutBtn");
const cakeSlice = document.getElementById("cakeSlice");
const continueBtn = document.getElementById("continueBtn");

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

        giftBox.style.display = "none";

        cake.style.display = "block";
        knife.style.display = "block";
cutBtn.style.display = "block";

    }, 800);

});
cutBtn.addEventListener("click", () => {

    // Knife animation
    knife.style.transform = "translateX(-50%) translateY(120px) rotate(25deg)";

    setTimeout(() => {

        // Cake cut
        cake.classList.add("cut");

        // Hide knife
        knife.style.display = "none";

        // Hide cut button
        cutBtn.style.display = "none";

        // Show continue button
        continueBtn.style.display = "block";

    }, 700);

});
