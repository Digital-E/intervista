gsap.registerPlugin(ScrollTrigger);


// Notre Aventure Pin Timeline
let tl = gsap.timeline({
  scrollTrigger: {
    trigger: '.manifeste__section-1',
    start: 'top top',
    end: 'bottom+=10000',
    // animation: backgroundAnimation,
    pin: true,
    // pinSpacing: false,
    scrub: true,
  }
})

let easeVar = "power1.inOut"

let currentIndex = 0;

document.querySelectorAll(".manifeste__section-1__tile").forEach((item, index) => {
  tl.to(item, {
    x: -190,
    y: -50,
    duration: 0.5,
    ease: easeVar
  },
  `<-=${index === 0 ? 0.5 : 0.5}`
  )

  tl.to(item, {
    x: -window.innerWidth,
    y: -300,
    duration: 1,
    ease: easeVar,
    onUpdate: () => {
      if(currentIndex !== index || currentIndex === 0) {
        Array.from(document.querySelector('.manifeste__section-1__numbers').children).forEach(item => {
          item.style.color = "black";
        })
        Array.from(document.querySelector('.manifeste__section-1__numbers').children)[index].style.color = "red";
      }
      currentIndex = index
  }
  },
  `<+=${index === 0 ? 0.5 : 0.5}`
  )

  tl.to(item, {
    x: `-=${window.innerWidth}`,
    duration: 1,
    ease: easeVar
  },
  )
})

tl.fromTo(".manifeste__section-1__final__image", 
{
  x: "100vw"
},
{
  x: 0,
  duration: 1,
  ease: "easeVar"
},
"<-=0"
)

tl.to(".manifeste__bande-rouge", {
  x: "135vw",
  duration: 9,
  ease: "none"
},
"<-=9"
)