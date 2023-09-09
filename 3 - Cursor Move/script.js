let box = document.querySelector(".box");
let dot = document.querySelector(".dot");

box.addEventListener("mousemove", (e) => {
     dot.style.left = e.x+"px";
     dot.style.top = e.y+"px";
})