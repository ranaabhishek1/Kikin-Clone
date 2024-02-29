var tl=gsap.timeline();


tl.from(".page1-text h1",{
y:"50",
duration:0.8,
stagger:0.4,
})

tl.from(".page2-text img:nth-child(1)",{
    opacity:1,
    scale:0,
    scrollTrigger:{
        trigger:".page2-text img:nth-child(1)",
        scroller:"body",
        start:"top 670vh",
        
    scrub:0.3,
    }

})

// +++++++


tl.from(".page2-text img",{
    opacity:1,
    scale:0,
    scrollTrigger:{
        trigger:".page2-text img",
        scroller:"body",
        start:"top 180vh",
        
    scrub:0.3,
    }

})




// tl.from(".page2-text img",{
//  scrollTrigger:{
//     trigger:"#page2-text img",
//     scroller:"body",
//     opacity:1,
//     delay:0.2,
//     scale:1,
//     scrub:1,
//     start:"bottom 60vh",
    
    
//     markers:true,
//  }

// })