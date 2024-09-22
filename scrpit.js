gsap.from('p',{
   opacity:0,
   y:30, 
   duration:1,
})

var h1 = document.querySelector("#span1")
var h1Text = document.querySelector("#span1").textContent;
 var split = h1Text.split("");
 var clutter = " "
 split.forEach(function(e){
clutter+=`<span>${e}</span>`
 })
 h1.innerHTML = clutter
gsap.from("#span1 span",{
    y:25,
    opacity:0,
    duration:1,
    delay:0.5,
    stagger:0.09
})

document.querySelectorAll('.card').forEach(card =>{
    gsap.to(card , {
       scale:0.7,
       opacity:0,
       scrollTrigger: {
        trigger:card,
        start:"top 15%",
        end:"bottom 15%",
        scrub:true
       } 
    })
})