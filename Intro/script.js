gsap.registerPlugin(ScrollTrigger);

let tl = gsap.timeline({ repeat: 0 });
tl.to('#color-slide', { opacity: 0, duration: 1 });
tl.to('#slide-1', { scale: 1.5, duration: 1 }, '-=1');
tl.to('#slide-1', { opacity: 0, duration: 1 });
tl.fromTo(
  '#slide-2',
  { scale: 1.5, duration: 1, ease: 'power1.inOut' },
  { scale: 1, duration: 1.2 },
  '-=0.5'
);

ScrollTrigger.create({
  trigger: '#carousel-zoom',
  start: 'top top',
  animation: tl,
  pin: '#carousel-zoom',
  scrub: true,
  toggleActions: 'play pause resume none',
  markers: true,
});
