const loading=document.getElementById("loading");

const lightsPage=document.getElementById("lightsPage");

const fairy=document.querySelector(".fairyLights");

const btn=document.getElementById("lightBtn");

const title=document.getElementById("title");
const giftBox = document.getElementById("giftBox");
const cake=document.getElementById("cake");

const cutBtn=document.getElementById("cutBtn");
setTimeout(()=>{

loading.classList.remove("active");

lightsPage.classList.add("active");

},2000);

btn.onclick=()=>{

fairy.classList.add("on");

title.style.display="block";

btn.style.display="none";
giftBox.style.display="block";
};
giftBox.onclick=()=>{

giftBox.classList.add("open");

setTimeout(()=>{

giftBox.style.display="none";

cake.style.display="block";

cutBtn.style.display="block";

},800);

};
