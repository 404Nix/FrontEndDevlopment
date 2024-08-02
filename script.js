var crsr = document.querySelector("#cursor");
var crsrBlur = document.querySelector("#cursor-blur");
document.addEventListener("mousemove", function(dets){
    crsr.style.left = dets.x+"px";
    crsr.style.top = dets.y+"px";
    crsrBlur.style.left = dets.x - 250 +"px";
    crsrBlur.style.top = dets.y - 250 +"px";
})

// var h4all = document.querySelectorAll("#nav h4");
// h4all.forEach(function(elem) {
//     elem.addEventListener("mouseenter", function(){
//         crsr.style.scale = 3
//         crsr.style.border = "1px solid #fff"
//         crsr.style.backgroundColor = "transparent"
//     })

//     elem.addEventListener("mouseleave", function(){
//         crsr.style.scale = 1
//         crsr.style.border = "0px solid #800080"
//         crsr.style.backgroundColor = "#800080"
//     })
// })

gsap.to('#nav', {
    backgroundColor : "#000",
    height : "120px",
    duration : 0.5,
    scrollTrigger : {
        trigger : "#nav",
        scroller : "body",
        // markers : true,
        start : "top -10%",
        end : "top -11%",
        scrub : 1
    }
})

gsap.to("#main", {
    backgroundColor : "#000",
    scrollTrigger : {
        trigger : "#main",
        scroller : "body",
        // markers : true,
        start : "top -25%",
        end : "top -70%",
        scrub : 2
    }
})

gsap.from("#About-us-in, #About-us img", {
    y : 50,
    opacity : 0,
    duration : 1,
    stagger : 0.4,
    scrollTrigger : {
        trigger : "#About-us",
        scroller : "body",
        // markers: true,
        start : "top 60%",
        end : "top 58%",
        scrub: 3
    }
})

// gsap.from(".card", {
//     scale: 0.8,
//     opacity : 0,
//     duration : 1,
//     scrollTrigger : {
//         trigger : ".card",
//         scroller : "body",
//         // markers: true,
//         start : "top 70%",
//         end : "top 65%",
//         scrub: 1
//     }
// })

gsap.from("#katana1", {
    y: -70,
    duration : 1,
    scrollTrigger : {
        trigger : "#katana1",
        scroller : "body",
        // markers: true,
        start : "top 55%",
        end : "top 45%",
        scrub: 3
    }
})

gsap.from("#katana2", {
    y: 70,
    duration : 1,
    scrollTrigger : {
        trigger : "#katana1",
        scroller : "body",
        // markers: true,
        start : "top 55%",
        end : "top 45%",
        scrub: 4
    }
})