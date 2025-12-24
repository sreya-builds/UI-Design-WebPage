function myFunction(){
    let nav = document.getElementById('navbar')
    let toggleBtn = document.getElementById('toggle-btn')
    nav.classList.toggle('active')
    toggleBtn.classList.toggle('toggle-btn-active')

}
let t1 = gsap.timeline()
   t1.from("header",{
    y:-100,
    opacity:0,
    duration:3.5,
    ease:"expo.inOut"
   })

   .from(".text-group > *",{
     y:100,
     opacity:0,
     duration:1.5,
     ease:"expo.inOut",
     stagger: 0.5
   })
   .from(".img-group .items" ,{
     y:-1000,
     opacity:0,
     duration:3,
     ease:"bounce.out",
     stagger: {
        amount:0.5,
        from: "random"
     }
   })

   .to(".img-group .items:nth-child(2)",{
     y:-30,
     x:-35,
     rotation:-375,
     duration:2.5,
     ease:"expo.inOut",
   })
   .to(".img-group .items:nth-child(4)",{
     y:-40,
     duration:2.5,
     ease:"expo.inOut",
   })
   .to(".img-group .items:nth-child(5)",{
    x:0,
     y:-30,
     rotation:15,
     duration:2.5,
     ease:"expo.inOut",
   })
   .to(".img-group .items:nth-child(3)",{
     y:70,
     duration:2.5,
     ease:"expo.inOut",
   })