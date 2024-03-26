gsap.registerPlugin(ScrollTrigger);

let container = gsap.utils.toArray('#cards-flop');
let tl = gsap.timeline({
  // scrollTrigger: { // ScrollTrigger part of the timeline, now you know it is only controlling this timeline
  //   trigger: "#cards-flop",
  //   start: "top top",
  //   end: "bottom tpop",
  //   pin: true, // pin by default is the trigger
  //   scrub: true,
  //   // toggleActions: "play pause resume none", // This doesnt do anything if you have scrub: true,
  //   markers: true
  // }
});

tl.add(() => {}, '+=1'); // do nohtibng for 1 second

tl.from('.card', {
  // .fromTo() are almost always overkill, simple .from() is all you need
  opacity: 0, // Browsers default is opacity 1 which GSAP will animate to
  duration: 0.5,
  stagger: 1, // stagger twice as long as duration will add a small delay
  ease: 'steps(1)',
  // ease: 0, // Probably works, but all eases have a name check https://gsap.com/docs/v3/Eases/
});
ScrollTrigger.create({
  trigger: '#cards-flop',
  start: 'top top',
  end: 'center -200%',
  animation: tl,
  pin: '#cards-flop',
  scrub: true,
  toggleActions: 'play pause resume none',
  markers: true,
});
