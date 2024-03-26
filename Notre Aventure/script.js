gsap.registerPlugin(ScrollTrigger);


// Notre Aventure Pin Timeline
let tl = gsap.timeline({
  scrollTrigger: {
    trigger: '.notre-aventure__section-1',
    start: 'top top',
    end: 'bottom+=10000',
    // animation: backgroundAnimation,
    pin: true,
    // pinSpacing: false,
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

let notreAventureSection1Image1Width = document.querySelector('.notre-aventure__section-1__image-1').getBoundingClientRect().width

tl.to(".notre-aventure__section-1__image-1",
{
  x: -window.innerWidth - notreAventureSection1Image1Width,
  duration: 5,
  ease: 'none'
},
"<-=0.1"
)

// Notre Aventure Text 3 Animation

let notreAventureSection1Text3Width = document.querySelector('.notre-aventure__section-1__text-3').getBoundingClientRect().width

tl.to(".notre-aventure__section-1__text-3", 
{
  x: -window.innerWidth - notreAventureSection1Text3Width,
  duration: 7,
  ease: 'none'
},
"<+=1.5"
)

// Notre Aventure Image 2 Animation

let notreAventureSection1Image2Width = document.querySelector('.notre-aventure__section-1__image-2').getBoundingClientRect().width

tl.to(".notre-aventure__section-1__image-2",
{
  x: -window.innerWidth - notreAventureSection1Image2Width,
  duration: 5,
  ease: 'none'
},
"<+=3"
)

// Notre Aventure Text 4 Animation

let notreAventureSection1Text4Width = document.querySelector('.notre-aventure__section-1__text-4').getBoundingClientRect().width

tl.to(".notre-aventure__section-1__text-4", 
{
  x: -window.innerWidth - notreAventureSection1Text3Width,
  duration: 7,
  ease: 'none'
},
"<+=1"
)

// Notre Aventure Image 3 Animation

let notreAventureSection1Image3Width = document.querySelector('.notre-aventure__section-1__image-3').getBoundingClientRect().width

tl.to(".notre-aventure__section-1__image-3",
{
  x: -window.innerWidth - notreAventureSection1Image3Width,
  duration: 5,
  ease: 'none'
},
"<+=3"
)

// Notre Aventure Text 5 Animation

let notreAventureSection1Text5Width = document.querySelector('.notre-aventure__section-1__text-5').getBoundingClientRect().width

tl.to(".notre-aventure__section-1__text-5", 
{
  x: -window.innerWidth - notreAventureSection1Text5Width,
  duration: 6,
  ease: 'none'
},
"<+=1.5"
)

// Notre Aventure Image 4 Animation

let notreAventureSection1Image4Width = document.querySelector('.notre-aventure__section-1__image-4').getBoundingClientRect().width

tl.to(".notre-aventure__section-1__image-4",
{
  x: -window.innerWidth - notreAventureSection1Image4Width,
  duration: 5,
  ease: 'none'
},
"<+=2.7"
)

// Notre Aventure Text 6 Animation

let notreAventureSection1Text6Width = document.querySelector('.notre-aventure__section-1__text-6').getBoundingClientRect().width

tl.to(".notre-aventure__section-1__text-6", 
{
  x: -window.innerWidth - notreAventureSection1Text6Width,
  duration: 5,
  ease: 'none'
},
"<+=1.5"
)

// Notre Aventure Image 5 Animation

let notreAventureSection1Image5Width = document.querySelector('.notre-aventure__section-1__image-5').getBoundingClientRect().width

tl.to(".notre-aventure__section-1__image-5",
{
  x: -window.innerWidth - notreAventureSection1Image5Width,
  duration: 4,
  ease: 'none'
},
"<+=2.3"
)

// Notre Aventure Text 7 Animation

let notreAventureSection1Text7Width = document.querySelector('.notre-aventure__section-1__text-7').getBoundingClientRect().width

tl.to(".notre-aventure__section-1__text-7", 
{
  x: -window.innerWidth - notreAventureSection1Text7Width,
  duration: 4,
  ease: 'none'
},
"<+=1.5"
)

// Notre Aventure Image 6 Animation

let notreAventureSection1Image6Width = document.querySelector('.notre-aventure__section-1__image-6').getBoundingClientRect().width

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
  // opacity: 0, // Browsers default is opacity 1 which GSAP will animate to
  display: 'none',
  duration: 2,
  stagger: 0.5, // stagger twice as long as duration will add a small delay
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