gsap.registerPlugin(ScrollTrigger);

// Une Minute Subtitle Animation
let subtitleAnimation = gsap.fromTo('.une-minute__section-1__text-container__subtitle', 
{
  scale: 2,
  duration: 0,
  ease: 'steps(1)',
},
{
  scale: 1,
}
);

// Une Minute Text Animation
let textAnimation = gsap.fromTo('.une-minute__section-1__text-container__text', 
{
  y: '100%',
  ease: 'steps(1)',
},
{
  y: 0
}
);

// Une Minute Background Animation
let backgroundAnimation = gsap.fromTo('.une-minute__section-1__background', 
{
  scale: 1,
  x: "90vw",
  y: 500,
  ease: 'steps(1)',
},
{
  scale: 1,
  x: 0,
  y: 0
}
);

// Une Minute Subtitle Animation ScrollTrigger
ScrollTrigger.create({
  trigger: '.une-minute__section-1',
  start: 'top bottom',
  end: 'bottom top+=200',
  animation: subtitleAnimation,
  scrub: true,
});

// Une Minute Text Animation ScrollTrigger
ScrollTrigger.create({
  trigger: '.une-minute__section-1',
  start: 'top bottom',
  end: 'bottom top+=200',
  animation: textAnimation,
  scrub: true,
});

// Une Minute Background Animation
ScrollTrigger.create({
  trigger: '.une-minute__section-1',
  start: 'top bottom',
  end: 'bottom top+=200',
  animation: backgroundAnimation,
  scrub: true,
});

let uneMinuteSection2Height = document.querySelector('.une-minute__section-2').getBoundingClientRect().height

// Une Minute Pin Animation
ScrollTrigger.create({
  trigger: '.une-minute__section-1',
  start: 'top top',
  end: `+=${uneMinuteSection2Height + window.innerHeight + window.innerHeight / 4 }`,
  // end: 'bottom top+=200',
  // animation: backgroundAnimation,
  pin: true,
  pinSpacing: false,
  scrub: true,
});

// Une Minute Section 2 Parallax

let uneMinuteSection2Animation = gsap.fromTo('.une-minute__section-2',
{
  ease: 'steps(1)',
},
{
  translateY: '-20%'
}
)

ScrollTrigger.create({
  trigger: '.une-minute__section-2',
  start: 'bottom bottom',
  // end: 'top+=100',
  animation: uneMinuteSection2Animation,
  scrub: true,
})