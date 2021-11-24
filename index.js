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
      scrollTrigger: {
      trigger: ".animation",
      start: "top",
      end: 100,
      scrub: true,
      markers: true,
  },
  clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
  ease: "none"
    });
  




ScrollTrigger.clearScrollMemory();
window.history.scrollRestoration = "manual";
