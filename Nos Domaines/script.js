gsap.registerPlugin(ScrollTrigger);

let tl = gsap.timeline();

// Nos Domaines Text Animation
tl.fromTo('.nos-domaines__section-2 h2', 
{
  left: '100vw',
  top: 200,
  scale: 4,
  duration: 0,
  ease: 'steps(1)',
},
{
  left: 0,
  top: 0,
  scale: 1,
  stagger: 0.2,
}
);

// Nos Domaines Bande Rouge 1 Animation
let bandeRouge1 = gsap.fromTo('.nos-domaines__bande-rouge-1',
{
  left: '100vw',
  bottom: -300,
  ease: 'steps(1)',
},
{
  bottom: 0,
  left: '-200vw',
}
)


// Nos Domaines Bande Rouge 2 Animation
let bandeRouge2 = gsap.fromTo('.nos-domaines__bande-rouge-2',
{
  left: '100vw',
  bottom: 0,
  ease: 'steps(1)',
},
{
  bottom: 200,
  left: '-100vw',
}
)

// Nos Domaines Bande Rouge 3 Animation
let bandeRouge3 = gsap.fromTo('.nos-domaines__bande-rouge-3',
{
  left: '100vw',
  bottom: 300,
  ease: 'steps(1)',
},
{
  bottom: 300,
  left: '-100vw',
}
)

// Nos Domaines Bande Rouge 4 Animation

let tlBandeRouge4 = gsap.timeline();

tlBandeRouge4.to('.nos-domaines__bande-rouge-4',
{
  left: '100vw',
  bottom: 400,
  ease: 'steps(1)',
}
)

tlBandeRouge4.to('.nos-domaines__bande-rouge-4',
{
  bottom: 400,
  left: 200,
}
)

tlBandeRouge4.to('.nos-domaines__bande-rouge-4',
{
  bottom: 1000,
}
)

// Nos Domaines Image 1 Animation
let image1 = gsap.fromTo('.nos-domaines__image-1',
{
  ease: 'steps(1)',
},
{
  translateY: '-200%'
}
)

// Nos Domaines Image 2 Animation
let image2 = gsap.fromTo('.nos-domaines__image-2',
{
  ease: 'steps(1)',
},
{
  translateY: '-500%'
}
)

// Nos Domaines Image 3 Animation
let image3 = gsap.fromTo('.nos-domaines__image-3',
{
  ease: 'steps(1)',
},
{
  translateY: '-500%'
}
)

// Nos Domaines Image 4 Animation
let image4 = gsap.fromTo('.nos-domaines__image-4',
{
  ease: 'steps(1)',
},
{
  translateY: '-500%'
}
)

// Nos Domaines Image 5 Animation
let image5 = gsap.fromTo('.nos-domaines__image-5',
{
  ease: 'steps(1)',
},
{
  translateY: '-500%'
}
)

// Nos Domaines Text Animation ScrollTrigger
ScrollTrigger.create({
  trigger: '.nos-domaines__section-2',
  start: 'top bottom',
  end: 'bottom top+=200',
  animation: tl,
  scrub: true,
  
});

// Nos Domaines Bande Rouge 1 ScrollTrigger
ScrollTrigger.create({
  trigger: '.nos-domaines__image-1',
  start: 'top bottom',
  end: 'top+=100',
  animation: bandeRouge1,
  scrub: true,
  
})

// Nos Domaines Bande Rouge 2 ScrollTrigger
ScrollTrigger.create({
  trigger: '.nos-domaines__image-2',
  start: 'top bottom',
  end: 'top+=100',
  animation: bandeRouge2,
  scrub: true,
  
})

// Nos Domaines Bande Rouge 3 ScrollTrigger
ScrollTrigger.create({
  trigger: '.nos-domaines__image-3',
  start: 'top+=300 bottom',
  end: 'top+=100',
  animation: bandeRouge3,
  scrub: true,
  
})

// Nos Domaines Bande Rouge 4 ScrollTrigger
ScrollTrigger.create({
  trigger: '.nos-domaines__image-5',
  start: 'top bottom',
  end: 'top-=100',
  animation: tlBandeRouge4,
  scrub: true,
  
})

// Nos Domaines Image 1 ScrollTrigger
ScrollTrigger.create({
  trigger: '.nos-domaines__section-2',
  start: 'top bottom',
  // end: 'top+=100',
  animation: image1,
  scrub: true,
  
})

// Nos Domaines Image 2 ScrollTrigger
ScrollTrigger.create({
  trigger: '.nos-domaines__image-2',
  // start: 'top bottom',
  // end: 'top+=100',
  animation: image2,
  scrub: true,
  
})

// Nos Domaines Image 3 ScrollTrigger
ScrollTrigger.create({
  trigger: '.nos-domaines__image-3',
  // start: 'top bottom',
  // end: 'top+=100',
  animation: image3,
  scrub: true,
  
})

// Nos Domaines Image 4 ScrollTrigger
ScrollTrigger.create({
  trigger: '.nos-domaines__image-4',
  // start: 'top bottom',
  // end: 'top+=100',
  animation: image4,
  scrub: true,
  
})

// Nos Domaines Image 5 ScrollTrigger
ScrollTrigger.create({
  trigger: '.nos-domaines__image-5',
  // start: 'top bottom',
  // end: 'top+=100',
  animation: image5,
  scrub: true,
  
})

