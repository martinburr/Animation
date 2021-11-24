gsap.fromTo(".abzieher", {
  yPercent: 3}, {
  yPercent: 85,
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
      scrollTrigger: {
      trigger: ".animation",
      start: "top",
      end: 100,
      scrub: true,
    markers: true,
  },
  clipPath: "polygon(0 0, 100% 0, 100% 90%, 0 90%)",
  ease: "none",
    });

ScrollTrigger.clearScrollMemory();
window.history.scrollRestoration = "manual";
