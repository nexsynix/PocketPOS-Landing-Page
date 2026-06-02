// -----------------------------
// GSAP SETUP
// -----------------------------
gsap.registerPlugin(ScrollTrigger, SplitText);

// -----------------------------
// LENIS SMOOTH SCROLL
// -----------------------------
const lenis = new Lenis();

lenis.on('scroll', ScrollTrigger.update);

gsap.ticker.add((time) => {
  lenis.raf(time * 1000);
});

gsap.ticker.lagSmoothing(0);

// -----------------------------
// SECTION RELATIVE HELPER (FIXED)
// -----------------------------
function getPos(section, xPercent, yPercent) {
  const rect = section.getBoundingClientRect();
  const scrollY = window.scrollY || window.pageYOffset;

  return {
    x: rect.left + rect.width * xPercent - window.innerWidth / 2,
    y: rect.top + scrollY + rect.height * yPercent - window.innerHeight / 2
  };
}

// -----------------------------
// MAIN LOGIC
// -----------------------------
ScrollTrigger.matchMedia({
  // -----------------------------------------------------------------
  // DESKTOP: 1025px and wider (Full Side Glides)
  // -----------------------------------------------------------------
  "(min-width: 1025px)": function () {
    const headphone = document.querySelector("#headphone");
    const s2 = document.querySelector("#section2");
    const sInv = document.querySelector("#section-inventory");
    const s3 = document.querySelector("#section3");
    const s4 = document.querySelector("#section4");
    const s5 = document.querySelector("#section5");

    gsap.to(headphone, {
      scrollTrigger: {
        trigger: s2,
        start: "top bottom",
        end: "center center",
        scrub: 1.2,
      },
      x: () => getPos(s2, 0.78, 0.35).x,
      y: () => getPos(s2, 0.78, 0.35).y,
      width: "32vw",
      rotate: 90,
      ease: "power1.inOut",
      immediateRender: false
    });

    gsap.to(headphone, {
      scrollTrigger: {
        trigger: sInv,
        start: "top bottom",
        end: "center center",
        scrub: 1.2,
      },
      x: () => getPos(sInv, 0.22, 0.35).x,
      y: () => getPos(sInv, 0.22, 0.35).y,
      width: "32vw",
      rotate: -90,
      ease: "power1.inOut",
      immediateRender: false
    });

    gsap.to(headphone, {
      scrollTrigger: {
        trigger: s3,
        start: "top bottom",
        end: "bottom bottom",
        scrub: 1.2,
      },
      x: () => getPos(s3, 0.5, 0.6).x,
      y: () => getPos(s3, 0.5, 0.6).y,
      width: "35vw",
      rotate: 35,
      ease: "power1.inOut",
      immediateRender: false
    });

    gsap.to(headphone, {
      scrollTrigger: {
        trigger: s4,
        start: "top bottom",
        end: "center center",
        scrub: 1.2,
      },
      x: () => getPos(s4, 0.5, 0.5).x,
      y: () => getPos(s4, 0.5, 0.5).y,
      width: "42vw",
      rotate: 0,
      ease: "power1.inOut",
      immediateRender: false
    });

    gsap.to(headphone, {
      scrollTrigger: {
        trigger: s5,
        start: "center bottom",
        end: "bottom bottom",
        scrub: 1.2,
      },
      x: () => getPos(s5, 0.5, 0.43).x,
      y: () => getPos(s5, 0.5, 0.43).y,
      width: "300px",
      ease: "power1.inOut",
      immediateRender: false
    });

    // Desktop Text Scroll Animations
    gsap.from("#section2 .content-wrapper", {
      scrollTrigger: {
        trigger: "#section2",
        start: "-50% bottom",
        end: "center center",
        scrub: true,
      },
      y: "140%",
      ease: "power1.inOut"
    });

    gsap.from("#section-inventory .content-wrapper", {
      scrollTrigger: {
        trigger: "#section-inventory",
        start: "-50% bottom",
        end: "center center",
        scrub: true,
      },
      y: "140%",
      ease: "power1.inOut"
    });

    gsap.from("#section3 .heading", {
      scrollTrigger: {
        trigger: "#section3",
        start: "top bottom",
        end: "center bottom",
        scrub: true,
      },
      y: "140%",
      ease: "power1.inOut"
    });

    gsap.from("#section4 img", {
      scrollTrigger: {
        trigger: "#section4",
        start: "top bottom",
        end: "center center",
        scrub: true,
      },
      width: 0,
      opacity: 0,
      ease: "power1.inOut"
    });

    gsap.from("#section6 .content-wrapper", {
      scrollTrigger: {
        trigger: "#section6",
        start: "top bottom",
        end: "center bottom",
        scrub: true,
      },
      y: "40%",
      duration: 2,
      ease: "power1.inOut"
    });
  },

  // -----------------------------------------------------------------
  // TABLET: 769px to 1024px (Scaled side glides with safety offsets)
  // -----------------------------------------------------------------
  "(min-width: 769px) and (max-width: 1024px)": function () {
    const headphone = document.querySelector("#headphone");
    const s2 = document.querySelector("#section2");
    const sInv = document.querySelector("#section-inventory");
    const s3 = document.querySelector("#section3");
    const s4 = document.querySelector("#section4");
    const s5 = document.querySelector("#section5");

    gsap.to(headphone, {
      scrollTrigger: {
        trigger: s2,
        start: "top bottom",
        end: "center center",
        scrub: 1.2,
      },
      x: () => getPos(s2, 0.74, 0.35).x,
      y: () => getPos(s2, 0.74, 0.35).y,
      width: "28vw",
      rotate: 90,
      ease: "power1.inOut",
      immediateRender: false
    });

    gsap.to(headphone, {
      scrollTrigger: {
        trigger: sInv,
        start: "top bottom",
        end: "center center",
        scrub: 1.2,
      },
      x: () => getPos(sInv, 0.26, 0.35).x,
      y: () => getPos(sInv, 0.26, 0.35).y,
      width: "28vw",
      rotate: -90,
      ease: "power1.inOut",
      immediateRender: false
    });

    gsap.to(headphone, {
      scrollTrigger: {
        trigger: s3,
        start: "top bottom",
        end: "bottom bottom",
        scrub: 1.2,
      },
      x: () => getPos(s3, 0.5, 0.58).x,
      y: () => getPos(s3, 0.5, 0.58).y,
      width: "32vw",
      rotate: 35,
      ease: "power1.inOut",
      immediateRender: false
    });

    gsap.to(headphone, {
      scrollTrigger: {
        trigger: s4,
        start: "top bottom",
        end: "center center",
        scrub: 1.2,
      },
      x: () => getPos(s4, 0.5, 0.5).x,
      y: () => getPos(s4, 0.5, 0.5).y,
      width: "36vw",
      rotate: 0,
      ease: "power1.inOut",
      immediateRender: false
    });

    gsap.to(headphone, {
      scrollTrigger: {
        trigger: s5,
        start: "center bottom",
        end: "bottom bottom",
        scrub: 1.2,
      },
      x: () => getPos(s5, 0.5, 0.43).x,
      y: () => getPos(s5, 0.5, 0.43).y,
      width: "240px",
      ease: "power1.inOut",
      immediateRender: false
    });

    // Tablet Text animations
    gsap.from("#section2 .content-wrapper", {
      scrollTrigger: {
        trigger: "#section2",
        start: "-40% bottom",
        end: "center center",
        scrub: true,
      },
      y: "100%",
      ease: "power1.inOut"
    });

    gsap.from("#section-inventory .content-wrapper", {
      scrollTrigger: {
        trigger: "#section-inventory",
        start: "-40% bottom",
        end: "center center",
        scrub: true,
      },
      y: "100%",
      ease: "power1.inOut"
    });

    gsap.from("#section3 .heading", {
      scrollTrigger: {
        trigger: "#section3",
        start: "top bottom",
        end: "center bottom",
        scrub: true,
      },
      y: "100%",
      ease: "power1.inOut"
    });

    gsap.from("#section4 img", {
      scrollTrigger: {
        trigger: "#section4",
        start: "top bottom",
        end: "center center",
        scrub: true,
      },
      width: 0,
      opacity: 0,
      ease: "power1.inOut"
    });
  },

  // -----------------------------------------------------------------
  // MOBILE: 768px and narrower (Centered fluid flight path)
  // -----------------------------------------------------------------
  "(max-width: 768px)": function () {
    const headphone = document.querySelector("#headphone");
    const s2 = document.querySelector("#section2");
    const sInv = document.querySelector("#section-inventory");
    const s3 = document.querySelector("#section3");
    const s4 = document.querySelector("#section4");
    const s5 = document.querySelector("#section5");

    // Center phone on mobile flight path to act as a sleek responsive section divider
    gsap.to(headphone, {
      scrollTrigger: {
        trigger: s2,
        start: "top bottom",
        end: "center center",
        scrub: 1.2,
      },
      x: () => getPos(s2, 0.5, 0.44).x,
      y: () => getPos(s2, 0.5, 0.44).y,
      width: "190px",
      rotate: 15,
      ease: "power1.inOut",
      immediateRender: false
    });

    gsap.to(headphone, {
      scrollTrigger: {
        trigger: sInv,
        start: "top bottom",
        end: "center center",
        scrub: 1.2,
      },
      x: () => getPos(sInv, 0.5, 0.44).x,
      y: () => getPos(sInv, 0.5, 0.44).y,
      width: "190px",
      rotate: -15,
      ease: "power1.inOut",
      immediateRender: false
    });

    gsap.to(headphone, {
      scrollTrigger: {
        trigger: s3,
        start: "top bottom",
        end: "center center",
        scrub: 1.2,
      },
      x: () => getPos(s3, 0.5, 0.38).x,
      y: () => getPos(s3, 0.5, 0.38).y,
      width: "170px",
      rotate: 10,
      ease: "power1.inOut",
      immediateRender: false
    });

    gsap.to(headphone, {
      scrollTrigger: {
        trigger: s4,
        start: "top bottom",
        end: "center center",
        scrub: 1.2,
      },
      x: () => getPos(s4, 0.5, 0.5).x,
      y: () => getPos(s4, 0.5, 0.5).y,
      width: "210px",
      rotate: 0,
      ease: "power1.inOut",
      immediateRender: false
    });

    gsap.to(headphone, {
      scrollTrigger: {
        trigger: s5,
        start: "center bottom",
        end: "bottom bottom",
        scrub: 1.2,
      },
      x: () => getPos(s5, 0.5, 0.48).x,
      y: () => getPos(s5, 0.5, 0.48).y,
      width: "170px",
      rotate: 0,
      ease: "power1.inOut",
      immediateRender: false
    });

    // Smooth subtle mobile text scroll fades
    gsap.from("#section2 .content-wrapper", {
      scrollTrigger: {
        trigger: "#section2",
        start: "-30% bottom",
        end: "center center",
        scrub: true,
      },
      opacity: 0.1,
      y: "35px",
      ease: "power1.inOut"
    });

    gsap.from("#section-inventory .content-wrapper", {
      scrollTrigger: {
        trigger: "#section-inventory",
        start: "-30% bottom",
        end: "center center",
        scrub: true,
      },
      opacity: 0.1,
      y: "35px",
      ease: "power1.inOut"
    });

    gsap.from("#section3 .content", {
      scrollTrigger: {
        trigger: "#section3",
        start: "-20% bottom",
        end: "center center",
        scrub: true,
      },
      opacity: 0.1,
      y: "30px",
      ease: "power1.inOut"
    });
  }
});

// -----------------------------
// GLOBAL LOAD & INTERACTIVE ANIMATIONS
// -----------------------------
const headphone = document.querySelector("#headphone");

if (headphone) {
  // Phone introductory entry fade & scale
  gsap.from(headphone, {
    opacity: 0,
    scale: 0.6,
    duration: 1.2,
    ease: "power2.out"
  });
}

// Hero section Heading word-by-word SplitText entry
const heroHeading = document.querySelector("#section1 .heading");
if (heroHeading) {
  let split = SplitText.create(heroHeading, {
    type: "chars, words, lines",
    mask: "lines"
  });

  gsap.from(split.chars, {
    yPercent: () => gsap.utils.random(-100, 100),
    rotation: () => gsap.utils.random(-30, 30),
    autoAlpha: 0,
    ease: "back.out(1.5)",
    stagger: {
      amount: 0.5,
      from: "random"
    },
    duration: 1.5
  });
}

// -----------------------------
// MOBILE MENU TOGGLE LOGIC
// -----------------------------
const menuToggle = document.getElementById("menuToggle");
const nav = document.querySelector("nav");

if (menuToggle && nav) {
  menuToggle.addEventListener("click", () => {
    menuToggle.classList.toggle("active");
    nav.classList.toggle("active");
    document.body.classList.toggle("menu-open");
  });

  // Automatically collapse the navigation drawer on link selection
  const navLinks = nav.querySelectorAll("a");
  navLinks.forEach(link => {
    link.addEventListener("click", () => {
      menuToggle.classList.remove("active");
      nav.classList.remove("active");
      document.body.classList.remove("menu-open");
    });
  });
}

// -----------------------------
// RESIZE + LENIS SYNC
// -----------------------------
ScrollTrigger.addEventListener("refresh", () => {
  lenis.update();
});

ScrollTrigger.refresh();