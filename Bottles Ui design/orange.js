document.addEventListener("DOMContentLoaded", () => {
 const video = document.getElementById("juiceVideo");
  gsap.registerPlugin(CustomEase);
  CustomEase.create("hop", "0.9,0,0.1,1");

  // TEXT SPLIT
  new SplitType(".header h1", { types: "chars" });
  new SplitType("nav a", { types: "words" });
  new SplitType(".hero-footer p", { types: "words" });

  const counterText = document.querySelector(".preloader-counter h1");
  const counterBox = document.querySelector(".preloader-counter");
  const counter = { value: 0 };

  const tl = gsap.timeline({
    defaults: { ease: "hop" }
  });
  tl.call(() => {
  document.querySelector(".header h1").classList.add("dance");
});
  /* -----------------------------
     1️⃣ COUNTER 0 → 100
  ------------------------------*/
  tl.to(counter, {
    value: 100,
    duration: 2.5,
    onUpdate: () => {
      counterText.textContent = Math.floor(counter.value);
    }
  })

  /* -----------------------------
     2️⃣ COUNTER FADE OUT
  ------------------------------*/
  .to(counterBox, {
    opacity: 0,
    y: -40,
    duration: 0.8
  })

  /* -----------------------------
     3️⃣ HERO IMAGE REVEAL
  ------------------------------*/
  .to(".hero-bg", {
    clipPath: "polygon(0 0,100% 0,100% 100%,0 100%)",
    duration: 1.2
  })

  .to(".hero-bg img", {
    scale: 1,
    duration: 1
  }, "-=1")

  /* -----------------------------
     4️⃣ HEADING TEXT
  ------------------------------*/

 .to(".header", {
  opacity: 1,
  duration: 0.01
})

.to(".header h1 .char", {
  x: 0,
  stagger: 0.06,
  duration: 1.2,
  ease: "power4.out"
}, "-=0.2")
  /* -----------------------------
     5️⃣ NAV LINKS
  ------------------------------*/

  .to("nav", {
  opacity: 1,
  pointerEvents: "auto",
  duration: 0.01
})
  .to("nav a .word", {
    y: 0,
    stagger: 0.06,
    duration: 0.8
  })

  /* -----------------------------
     6️⃣ FOOTER TEXT
  ------------------------------*/
  .to(".hero-footer", {
  opacity: 1,
  pointerEvents: "auto",
  duration: 0.01
})
  
  .to(".hero-footer p .word", {
    y: 0,
    stagger: 0.04,
    duration: 0.6
  })

});



