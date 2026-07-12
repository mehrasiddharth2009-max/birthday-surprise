const loading=document.getElementById("loading");

const lightsPage=document.getElementById("lightsPage");

const fairy=document.querySelector(".fairyLights");

const btn=document.getElementById("lightBtn");

const title=document.getElementById("title");

setTimeout(()=>{

loading.classList.remove("active");

lightsPage.classList.add("active");

},2000);

btn.onclick=()=>{

fairy.classList.add("on");

title.style.display="block";

btn.style.display="none";

};
