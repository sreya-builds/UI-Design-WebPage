window.onload = () => {

  // TEXT SPLIT
  let title = document.querySelector(".title");
  title.innerHTML = title.textContent.replace(/\S/g,"<span class='letter'>$&</span>");

  anime.timeline().add({
    targets: ".title .letter",
    translateY: [100,0],
    opacity:[0,1],
    easing:"easeOutExpo",
    duration:2000,
    delay:(el,i)=>40*i
  });

  // BOX REVEAL
  TweenMax.to(".box",2,{
    y:"-100%",
    ease:Expo.easeInOut,
    delay:0.5
  });

  // IMAGE SCALE
  TweenMax.from(".main-img",2,{
    scale:1.4,
    ease:Expo.easeInOut,
    delay:0.5
  });

  // SIDE IMAGES
  TweenMax.from(".left",1.8,{
    x:-200,
    rotation:-10,
    opacity:0,
    ease:Expo.easeInOut,
    delay:1.5
  });

  TweenMax.from(".right",1.8,{
    x:200,
    rotation:10,
    opacity:0,
    ease:Expo.easeInOut,
    delay:1.5
  });

  // MENU
  TweenMax.from(".menu div",1,{
    y:20,
    opacity:0,
    delay:2.2
  });
};
document.addEventListener("mousemove",(e)=>{
  const x = (e.clientX / window.innerWidth - 0.5) * 40;
  const y = (e.clientY / window.innerHeight - 0.5) * 40;

  gsap.to(".title",{
    x:x,
    y:y,
    duration:0.6
  });
});
const centerImg = document.querySelector(".center-img");
const overlay = document.querySelector(".overlay");

centerImg.addEventListener("click",()=>{
  overlay.classList.toggle("active");
  gsap.to(".center-img",{scale:1.2,duration:0.6});
});

overlay.addEventListener("click",()=>{
  overlay.classList.remove("active");
  gsap.to(".center-img",{scale:1,duration:0.6});
});
