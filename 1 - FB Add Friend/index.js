const currStatus = document.querySelector(".text");

const button = document.querySelector('button');

let flag = 0;
button.addEventListener("click", () => {

     if(flag == 0) {
          currStatus.innerHTML = "Friends";
          currStatus.style.color = "green";
     
          button.innerHTML = "Remove Friend";
          button.style.background = "red";
          flag = 1;
     } else {
          currStatus.innerHTML = "Not Your Friend";
          currStatus.style.color = "#4158D0";
     
          button.innerHTML = "Add Friend";
          button.style.background = "#4158D0";
          flag = 0;
     }


});