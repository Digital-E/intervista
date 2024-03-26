let isIntroTyped = false;

ScrollTrigger.create({
  trigger: '#intro',
  start: 'top 0', // Start the scrollBar meets 5  00px from the top of the scrolltrigger.
  end: 'bottom 0',
  scrub: 1,
  markers: false,
  // markers: {
  //   startColor: 'blue',
  //   endColor: 'blue',
  // },
  pin: true,
  pinSpacing: true,
});

ScrollTrigger.create({
  trigger: '#intro',
  start: 'top 0',
  end: 'bottom 0',
  scrub: 1,
  markers: false,
  // markers: {
  //   startColor: 'green',
  //   endColor: 'green',
  // },
  onEnter: () => {
    if (!isIntroTyped) {
      // Check if the animation has not been played yet
      typewritterEffect(); // Call the function to play the animation
      isIntroTyped = true; // Set the flag to true to indicate that the animation has been played
    }
  },
});

function typewritterEffect() {
  const content = $('#content-typewritter').html();
  const typed = new Typed('#intro', {
    strings: [content],
    typeSpeed: -400,
    backSpeed: 0,
    contentType: 'html',
    onComplete: function (self) {
      $('#intro span').each(function (index) {
        var span = $(this);
        setTimeout(function () {
          span.addClass('highlighted');
        }, index * 300); // Adjust delay between each span
      });
    },
  });
}
