let bot1 = document.querySelector(".bottle1");

bot1.addEventListener("mouseenter", () => {
    bot1.classList.add("active");
});

bot1.addEventListener("mouseleave", () => {
    bot1.classList.remove("active");
});
document.querySelector(".btn1")
.addEventListener("click",function(){
    window.location.href = "guava.html"
})



let bot2 = document.querySelector(".bottle2");

bot2.addEventListener("mouseenter", () => {
    bot2.classList.add("active");
});

bot2.addEventListener("mouseleave", () => {
    bot2.classList.remove("active");
});

document.querySelector(".btn2")
.addEventListener("click",function(){
    window.location.href = "berry.html"
})


let bot3 = document.querySelector(".bottle3");

bot3.addEventListener("mouseenter", () => {
    bot3.classList.add("active");
});

bot3.addEventListener("mouseleave", () => {
    bot3.classList.remove("active");
});

document.querySelector(".btn3")
.addEventListener("click",function(){
    window.location.href = "strawberry.html"
})



let bot4 = document.querySelector(".bottle4");

bot4.addEventListener("mouseenter", () => {
    bot4.classList.add("active");
});

bot4.addEventListener("mouseleave", () => {
    bot4.classList.remove("active");
});

document.querySelector(".btn4")
.addEventListener("click",function(){
    window.location.href = "orange.html"
})
