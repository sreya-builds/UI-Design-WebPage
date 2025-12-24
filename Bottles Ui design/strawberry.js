window.addEventListener("DOMContentLoaded",function(){
    gsap.set("nav",{
        y:-100,

    })
    gsap.set(".letter-wrapper",{
        y:400,
    })
    gsap.set(".item-copy-wrapper p",{
        y:50,
    })
    gsap.defaults({
        duration:1,
        ease: "power3.out"
    })
    const tl = gsap.timeline({
        pause:true,
        delay:0.5,    
    })

    tl.to(".letter-wrapper",{
        y:0,
        stagger:0.1,
    }).to(".header-item-1",{
        left: "12vw",
    }).to(".header-item-2",{
        right:"20vw",
    },"<").to(".item-main  .item-img img",{
        clipPath: "polygon(0% 100%, 100% 100%, 100% 0%, 0% 0%)",
         scale:1,
       duration:3.6,
    },"<").to(".header-item-1",{
        left:0,
        scale:1,
    })
    .to(".header-item-2",{
        right:0,
        scale:1,
    },"<").to(".item-side .item-img",{
        clipPath:"polygon(0% 100%, 100% 100%, 100% 0%, 0% 0%)",
        stagger:0.10,

    },"<").to(".header",{
        bottom: "-2.5em",
    },"<").to(".item-copy-wrapper p",{
        y:0,
        stagger:0.09,
    },"<").to("nav",{
        y:0,
    },"<")
})
 