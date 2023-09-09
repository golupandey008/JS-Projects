let arr = [
     {
          dp:"https://images.unsplash.com/photo-1592972490115-dbfee7e1710d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1964&q=80", 
          story: "https://images.unsplash.com/photo-1592972490115-dbfee7e1710d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1964&q=80"
     },

     {
          dp:"https://images.unsplash.com/photo-1535704882196-765e5fc62a53?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NzV8fG1vZGVsJTIwZ2lybHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
          story:"https://images.unsplash.com/photo-1535704882196-765e5fc62a53?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NzV8fG1vZGVsJTIwZ2lybHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60"
     },

     {
          dp:"https://images.unsplash.com/photo-1601288496920-b6154fe3626a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8ODN8fG1vZGVsJTIwZ2lybHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
          story:"https://images.unsplash.com/photo-1601288496920-b6154fe3626a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8ODN8fG1vZGVsJTIwZ2lybHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60"
     },

     {
          dp:"https://images.unsplash.com/photo-1514315384763-ba401779410f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8ODZ8fG1vZGVsJTIwZ2lybHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
          story:"https://images.unsplash.com/photo-1514315384763-ba401779410f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8ODZ8fG1vZGVsJTIwZ2lybHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60"
     },

     {
          dp:"https://images.unsplash.com/photo-1503342394128-c104d54dba01?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTAwfHxtb2RlbCUyMGdpcmx8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
          story:"https://images.unsplash.com/photo-1503342394128-c104d54dba01?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTAwfHxtb2RlbCUyMGdpcmx8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60"
     }
];

let clutter = "";
arr.forEach((element, index) => {
     clutter += `<div class="story">
                    <img id="${index}" src="${element.dp}">
                 </div>`;
})

let storyBox = document.querySelector("#storiyan");
storyBox.innerHTML = clutter;



storyBox.addEventListener("click", (e) => {
     let value = arr[e.target.id].story;
     let fullScreen = document.querySelector("#full-screen");

     fullScreen.style.display = "block";
     fullScreen.style.backgroundImage = `url(${value})`;

     setTimeout(() => {
          fullScreen.style.display = "none";
     }, 2000);
})



