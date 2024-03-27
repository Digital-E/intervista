gsap.registerPlugin(ScrollTrigger);

// Carousel Animation
let tl = gsap.timeline({
  onComplete: () => {
    document.querySelector(".carousel-zoom").style.display = "none"
    document.querySelector(".menu").style.display = "block"
  }
});
tl.to('#color-slide', { opacity: 0, duration: 1 });
tl.to('#slide-1', { scale: 1.5, duration: 1 }, '-=1');
tl.to('#slide-1', { opacity: 0, duration: 1 });
tl.fromTo(
  '#slide-2',
  { scale: 1.5, duration: 1, ease: 'power1.inOut' },
  { scale: 1, duration: 1.2 },
  '-=0.5'
);
tl.to(".carousel-zoom", {y: () => -window.innerHeight + 100, duration: 2})

ScrollTrigger.create({
  trigger: '#intro',
  start: 'top top',
  end: '+=10000',
  animation: tl,
  pin: '#intro',
  scrub: true,
});


// Highlight Animation
let currentIndex = 0;
let highlightElements = 6;

tl.to(".span", {
  duration: 1,
  stagger: 1,
  css: {className: "highlighted"}
})
