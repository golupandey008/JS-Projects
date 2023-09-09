const image = document.querySelector(".box");
const heart = document.querySelector("i");

image.addEventListener("dblclick", () => {
     heart.style.transform = "scale(1)";

     setTimeout(() => {
          heart.style.transform = "scale(0)";
     },700)
})