let tl = gsap.timeline({scrollTrigger:{
    trigger:".two",
    start:"0% 95%",
    end:"70% 50%",
    scrub: true,
    // markers:true
}})

tl.to("#cocacola",{
    top:"120%",
    left:"7%",
})

tl.to("#cocacola", {
    top: "120%",
    left: "7%",
    rotateZ: 90 // Spins the image 360 degrees
});


let tl2 = gsap.timeline({scrollTrigger:{
    trigger:".three",
    start:"0% 95%",
    end:"70% 50%",
    scrub: true,
    // markers:true
}})

tl2.to("#cocacola", {
    top: "220%",
    left: "43%",
    rotateZ: 360 // Spins the image another 360 degrees (total 720)
});

tl2.to("#cocacola",{
    top:"220%",
    left:"43%", 
})