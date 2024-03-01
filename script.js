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

// +++

tl.from(".page4-left img",{
    opacity:1,
    scale:0,
    scrollTrigger:{
        trigger:".page4-left img",
        scroller:"body",
        
        start:"top 600vh",
end:"bottom 20vh",
    scrub:0.5,
    }
})

tl.from(".card1 p,.card2 p,.card3 p",{
    opacity:0,
    
    y:-60,
    scrollTrigger:{
        trigger:".card p,.card2 p,.card3 p",
        scroller:"body",
       start:"top 190vh",
    }
})

// ++-++

tl.from(".image-section1 img:nth-child(1)",{
    opacity:1,
    scale:0,
    scrollTrigger:{
        trigger:".image-section1 img:nth-child(1)",
        scroller:"body",
        start:"top 600vh",
        end:"bottom 30vh",
    scrub:0.3,
    }

})
// +++


tl.from(".image-section1 img:nth-child(2)",{
    opacity:1,
    scale:0,
    scrollTrigger:{
        trigger:".image-section1 img:nth-child(2)",
        scroller:"body",
        start:"top 650vh",
        end:"bottom 40vh",
    scrub:0.3,
    }
})


tl.from(".image-section1 img:nth-child(3)",{
    opacity:1,
    scale:0,
    scrollTrigger:{
        trigger:".image-section1 img:nth-child(3)",
        scroller:"body",
        start:"top 600vh",
        end:"bottom 30vh",
    scrub:0.3,
    }

})



tl.from(".image-section1 img:nth-child(4)",{
    opacity:1,
    scale:0,
    scrollTrigger:{
        trigger:".image-section1 img:nth-child(4)",
        scroller:"body",
        start:"top 600vh",
        end:"bottom 30vh",
    scrub:0.3,
    }

})

// ++++


tl.from(".image-section2 img",{
    opacity:1,
    scale:0,
    scrollTrigger:{
        trigger:".image-section2 img",
        scroller:"body",
        start:"top 580vh",
        end:"bottom 60vh",
    scrub:0.3,
    }

})



