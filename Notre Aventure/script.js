gsap.registerPlugin(ScrollTrigger);


// Notre Aventure Pin Timeline
let tl = gsap.timeline({
  scrollTrigger: {
    trigger: '.notre-aventure__section-1',
    start: 'top top',
    end: 'bottom+=10000',
    pin: true,
    scrub: 1,
  }
})

// Notre Aventure Text 1 Animation
tl.to(".notre-aventure__section-1__text-1", {
  x: "-100vw",
  duration: 5,
  ease: 'none'
})

// Notre Aventure Text 2 Animation
tl.fromTo(".notre-aventure__section-1__text-2", 
{
  y: "100vh"
},
{
  y: 0,
  duration: 5,
  ease: 'none'
}
, "<"
)

tl.to(".notre-aventure__section-1__text-2",
{
  x: "-100vw",
  duration: 5,
  ease: 'none'
}
)

// Notre Aventure Image 1 Animation

tl.to(".notre-aventure__section-1__image-1",
{
  x: () => -window.innerWidth - document.querySelector('.notre-aventure__section-1__image-1').getBoundingClientRect().width,
  duration: 5,
  ease: 'none'
},
"<-=0.1"
)

// Notre Aventure Text 3 Animation

tl.to(".notre-aventure__section-1__text-3", 
{
  x: () => -window.innerWidth - document.querySelector('.notre-aventure__section-1__text-3').getBoundingClientRect().width,
  duration: 7,
  ease: 'none'
},
"<+=1.5"
)

// Notre Aventure Image 2 Animation

tl.to(".notre-aventure__section-1__image-2",
{
  x: () => -window.innerWidth - document.querySelector('.notre-aventure__section-1__image-2').getBoundingClientRect().width,
  duration: 5,
  ease: 'none'
},
"<+=3"
)

// Notre Aventure Text 4 Animation

tl.to(".notre-aventure__section-1__text-4", 
{
  x: () => -window.innerWidth - document.querySelector('.notre-aventure__section-1__text-4').getBoundingClientRect().width,
  duration: 7,
  ease: 'none'
},
"<+=1"
)

// Notre Aventure Image 3 Animation

tl.to(".notre-aventure__section-1__image-3",
{
  x: () => -window.innerWidth - document.querySelector('.notre-aventure__section-1__image-3').getBoundingClientRect().width,
  duration: 5,
  ease: 'none'
},
"<+=3"
)

// Notre Aventure Text 5 Animation

tl.to(".notre-aventure__section-1__text-5", 
{
  x: () => -window.innerWidth - document.querySelector('.notre-aventure__section-1__text-5').getBoundingClientRect().width,
  duration: 6,
  ease: 'none'
},
"<+=1.5"
)

// Notre Aventure Image 4 Animation

tl.to(".notre-aventure__section-1__image-4",
{
  x: () => -window.innerWidth - document.querySelector('.notre-aventure__section-1__image-4').getBoundingClientRect().width,
  duration: 5,
  ease: 'none'
},
"<+=2.7"
)

// Notre Aventure Text 6 Animation

tl.to(".notre-aventure__section-1__text-6", 
{
  x: () => -window.innerWidth - document.querySelector('.notre-aventure__section-1__text-6').getBoundingClientRect().width,
  duration: 5,
  ease: 'none'
},
"<+=1.5"
)

// Notre Aventure Image 5 Animation


tl.to(".notre-aventure__section-1__image-5",
{
  x: () => -window.innerWidth - document.querySelector('.notre-aventure__section-1__image-5').getBoundingClientRect().width,
  duration: 4,
  ease: 'none'
},
"<+=2.3"
)

// Notre Aventure Text 7 Animation

tl.to(".notre-aventure__section-1__text-7", 
{
  x: () => -window.innerWidth - document.querySelector('.notre-aventure__section-1__text-7').getBoundingClientRect().width,
  duration: 4,
  ease: 'none'
},
"<+=1.5"
)

// Notre Aventure Image 6 Animation

tl.fromTo(".notre-aventure__section-1__image-6",
{
  x: "100vw"
},
{
  x: 0,
  duration: 4,
  ease: 'none'
},
"<+=1"
)

// Image Stack

tl.from('.imagestack-image', {
  display: 'none',
  duration: 2,
  stagger: 0.5,
  ease: 'none'
});

// Image Stack Exit Animation

tl.to('.notre-aventure__section-1__title', {
  y: "-100vh",
  duration: 6,
  ease: 'none'
});

tl.to('.notre-aventure__section-1__imagestack', {
  y: "-100vh",
  duration: 4,
  ease: 'none'
},
"<-=0"
);

tl.to('.notre-aventure__section-1__rectangle', {
  y: "-200vh",
  duration: 4,
  ease: 'none'
},
"<-=1"
);