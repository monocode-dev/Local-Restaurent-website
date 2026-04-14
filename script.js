const hamburger = document.getElementById("hamburger");
const nav = document.querySelector("nav");
const li = document.querySelectorAll("li");

let isout = false;

hamburger.addEventListener("click", event =>{
    if(!isout){
        nav.classList.add("hamburger")
        li.forEach(item =>{
            item.style.display = "block";
            item.style.margin = "10px 0px"
        });
        event.target.textContent = "X";
        isout = true;
    }else{
        nav.classList.remove("hamburger");
        li.forEach(item =>{
            item.style.display = "none";
        });
        event.target.textContent = "☰";
        isout = false;
    }
})