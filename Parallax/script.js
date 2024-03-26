gsap.registerPlugin(ScrollTrigger);

gsap.to('#img-1', {
  y: '-25%',
  ease: 'none',
  scrollTrigger: {
    trigger: '#parallax-1',
    start: 'top bottom',
    end: 'bottom top',
    scrub: 3,
  },
});

gsap.to('#img-2', {
  y: '-50%',
  ease: 'none',
  scrollTrigger: {
    trigger: '#parallax-1',
    start: 'top bottom',
    end: 'bottom top',
    scrub: 3,
  },
});

gsap.to('#img-3', {
  y: '-75%',
  ease: 'none',
  scrollTrigger: {
    trigger: '#parallax-1',
    start: 'top bottom',
    end: 'bottom top',
    scrub: 3,
  },
});

gsap.to('#img-4', {
  y: '-150%',
  ease: 'none',
  scrollTrigger: {
    trigger: '#parallax-1',
    start: 'top bottom',
    end: 'bottom top',
    scrub: 3,
  },
});
