function locomotiveanimation (){
    gsap.registerPlugin(ScrollTrigger);

// Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

const locoScroll = new LocomotiveScroll({
  el: document.querySelector(".main"),
  smooth: true
});
// each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
locoScroll.on("scroll", ScrollTrigger.update);

// tell ScrollTrigger to use these proxy methods for the ".main" element since Locomotive Scroll is hijacking things
ScrollTrigger.scrollerProxy(".main", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  }, // we don't have to define a scrollLeft because we're only scrolling vertically.
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },
  // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
  pinType: document.querySelector(".main").style.transform ? "transform" : "fixed"
});


// each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

// after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
ScrollTrigger.refresh();

}
locomotiveanimation()


// curser animation
function curser1animation() {
    let main = document.querySelector(".page1")
let crsr = document.querySelector(".play-reel")

main.addEventListener("mousemove",function(dets){
    gsap.to(".play-reel",{
        x:dets.x,
        y:dets.y,
    })
})

main.addEventListener("mouseenter",function(){
    gsap.to(".play-reel",{
        scale:1
    })
})
main.addEventListener("mouseleave",function(){
    gsap.to(".play-reel",{
        scale:0
    })
})
}
curser1animation()


// // page4 curser animation
// function curseranimatio2() {
// let page4 = document.querySelector(".page4")
// let crsr2 = document.querySelector(".play-reel2")

// page4.addEventListener("mousemove",function(dets){
//     gsap.to(".play-reel2",{
//         x:dets.x,
//         y:dets.y,
//     })
// })

// page4.addEventListener("mouseenter",function(){
//     gsap.to(".play-reel2",{
//         scale:1
//     })
// })
// page4.addEventListener("mouseleave",function(){
//     gsap.to(".play-reel2",{
//         scale:0
//     })
// })
// }
// curseranimatio2()


//Swiper animation
function swiperanimation() {
    var swiper = new Swiper(".mySwiper", {
        slidesPerView: 1,
        spaceBetween: 30,
        loop: true,
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
      });
}
swiperanimation()

// menu animate
function menuanimation (){
    const menubtn = document.querySelector('.content h2');
const menu = document.querySelector('.menu');
const close = document.querySelector('.menu-nav .close');

menubtn.addEventListener('click', ()=>{
    menu.classList.add('active');
});

close.addEventListener('click', ()=>{
    menu.classList.remove('active');
});
}
menuanimation()


//Swiper video animation
function videoswiperanima(){
    var swiper = new Swiper(".mySwiper", {
        slidesPerView: "auto",
        spaceBetween: 20,
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
      });
}
videoswiperanima()




let tl = gsap.timeline()


tl.from(".loader h3",{
    x:150,
    opacity:0,
    duration:1.2,
    stagger:0.1,
})
tl.to(".loader h3",{
    opacity:0,
    x:-20,
    duration:1.2,
    stagger:0.1,
})
tl.to(".loader",{
    opacity:0,
    duration:0.3,
})
tl.to(".loader",{
    display:"none"
})
tl.from(".content-botom h1",{
    y:100,
    opacity:0,
    stagger:0.1,
    duration:0.6,
    delay:-0.5,
})
tl.from("nav h3,nav h2",{
    opacity:0,
    x:20,
    duration:0.4,
    delay:-0.3,
})























