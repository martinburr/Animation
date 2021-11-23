gsap.to(".abzieher", {
  yPercent: 90,
  ease: "none",
    scrollTrigger: {
    trigger: ".animation",
    start: "top",
    end: 100,
    scrub: true,
    markers: true,
    }
  });

gsap.to(".cleanwindow", {
    opacity: 1,
    ease: "none",
      scrollTrigger: {
      trigger: ".animation",
      start: 100,
      end: "top",
      scrub: true,
      markers: true,
      }
    });
  




ScrollTrigger.clearScrollMemory();
window.history.scrollRestoration = "manual";