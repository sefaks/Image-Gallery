

let scrollContainer = document.querySelector(".gallery");
let backBtn = document.getElementById("back-btn");
let nextBtn = document.getElementById("next-btn");

scrollContainer.addEventListener("wheel",(evt) =>{
    evt.preventDefault();
    scrollContainer.scrollLeft +=evt.deltaY;

});

nextBtn.addEventListener("click",()=>{
    scrollContainer.scrollLeft += 900;
});

backBtn.addEventListener("click",()=>{
    scrollContainer.scrollLeft -= 900;
});