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
    const phone = document.querySelector("#phone");
    const s2 = document.querySelector("#section2");
    const sInv = document.querySelector("#section-inventory");
    const s3 = document.querySelector("#section3");
    const s4 = document.querySelector("#section4");
    const s5 = document.querySelector("#section5");

    // Force default visible block layout on desktop
    gsap.set(phone, { display: "block", opacity: 1, scale: 1 });

    gsap.to(phone, {
      scrollTrigger: {
        trigger: s2,
        start: "top bottom",
        end: "center center",
        scrub: 1.5,
      },
      x: () => getPos(s2, 0.78, 0.35).x,
      y: () => getPos(s2, 0.78, 0.35).y,
      width: "32vw",
      rotate: 60,
      ease: "power1.inOut",
      immediateRender: false
    });

    gsap.to(phone, {
      scrollTrigger: {
        trigger: sInv,
        start: "top bottom",
        end: "center center",
        scrub: 1.2,
      },
      x: () => getPos(sInv, 0.22, 0.35).x,
      y: () => getPos(sInv, 0.22, 0.35).y,
      width: "32vw",
      rotate: -60,
      ease: "power1.inOut",
      immediateRender: false
    });

    gsap.to(phone, {
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

    gsap.to(phone, {
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

    gsap.to(phone, {
      scrollTrigger: {
        trigger: s5,
        start: "center bottom",
        end: "bottom bottom",
        scrub: 1.2,
      },
      x: () => getPos(s5, 0.5, 0.43).x,
      y: () => getPos(s5, 0.5, 0.43).y,
      width: "20rem",
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

    gsap.from("#section3 .content-wrapper", {
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

    gsap.from("#section5 .plans-bg-text", {
      scrollTrigger: {
        trigger: "#section5",
        start: "top bottom",
        end: "center bottom",
        scrub: true,
      },
      y: "140%",
      ease: "power1.inOut"
    });

    gsap.from("#app-screenshots-section .heading", {
      scrollTrigger: {
        trigger: "#app-screenshots-section",
        start: "top bottom",
        end: "center bottom",
        scrub: true,
      },
      y: "140%",
      duration: 2,
      ease: "power1.inOut"
    });

    gsap.from("#section6 .content-wrapper", {
      scrollTrigger: {
        trigger: "#section6",
        start: "top bottom",
        end: "center bottom",
        scrub: true,
      },
      y: "60%",
      duration: 2,
      ease: "power1.inOut"
    });
  },

  // -----------------------------------------------------------------
  // TABLET: 769px to 1024px (Scaled side glides with safety offsets)
  // -----------------------------------------------------------------
  "(min-width: 769px) and (max-width: 1024px)": function () {
    const phone = document.querySelector("#phone");
    const s2 = document.querySelector("#section2");
    const sInv = document.querySelector("#section-inventory");
    const s3 = document.querySelector("#section3");
    const s4 = document.querySelector("#section4");
    const s5 = document.querySelector("#section5");

    gsap.set(phone, { display: "block", opacity: 1, scale: 1 });

    gsap.to(phone, {
      scrollTrigger: {
        trigger: s2,
        start: "top bottom",
        end: "center center",
        scrub: 1.2,
      },
      x: () => getPos(s2, 0.74, 0.35).x,
      y: () => getPos(s2, 0.74, 0.35).y,
      width: "28vw",
      rotate: 60,
      ease: "power1.inOut",
      immediateRender: false
    });

    gsap.to(phone, {
      scrollTrigger: {
        trigger: sInv,
        start: "top bottom",
        end: "center center",
        scrub: 1.2,
      },
      x: () => getPos(sInv, 0.26, 0.35).x,
      y: () => getPos(sInv, 0.26, 0.35).y,
      width: "28vw",
      rotate: -60,
      ease: "power1.inOut",
      immediateRender: false
    });

    gsap.to(phone, {
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

    gsap.to(phone, {
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

    gsap.to(phone, {
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
  // MOBILE: 768px and narrower (Targeted Section Appearances)
  // -----------------------------------------------------------------
  "(max-width: 768px)": function () {
    const phone = document.querySelector("#phone");
    const s1 = document.querySelector("#section1");
    const s4 = document.querySelector("#section4");
    const s5 = document.querySelector("#section5");

    // Force default visual block setup for mobile execution
    gsap.set(phone, { display: "block" });

    // 1. Fade OUT when leaving Section 1 (Static inside Section 1)
    gsap.to(phone, {
      scrollTrigger: {
        trigger: s1,
        start: "center top",
        end: "bottom top",
        scrub: true
      },
      opacity: 0,
      ease: "none"
    });

    // 2. Clear Fade IN & Reset Scale specifically inside Section 4
    gsap.fromTo(phone, 
      { opacity: 0, scale: 0.6 },
      {
        scrollTrigger: {
          trigger: s4,
          start: "top bottom",
          end: "center center",
          scrub: 1.2
        },
        x: () => getPos(s4, 0.5, 0.5).x,
        y: () => getPos(s4, 0.5, 0.5).y,
        width: "220px",
        rotate: 0,
        opacity: 1,
        scale: 1,
        ease: "power1.inOut",
        immediateRender: false
      }
    );

    // 3. Keep original transition going from Section 4 down into Section 5
    gsap.to(phone, {
      scrollTrigger: {
        trigger: s5,
        start: "center bottom",
        end: "bottom bottom",
        scrub: 1.2,
      },
      x: () => getPos(s5, 0.5, 0.28).x,
      y: () => getPos(s5, 0.5, 0.28).y,
      width: "180px",
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
const sectionTargets = document.querySelectorAll("#section1, #section2, #section-inventory, #section3, #section4, #section5, #section6");
const phone = document.querySelector("#phone");

if (phone) {
  gsap.from(phone, {
    opacity: 0,
    scale: 0.6,
    rotateX: -20,
    rotateY: 15,
    rotateZ: -10,
    duration: 1.5,
    ease: "power2.out",
    delay: 0.8
  });
  
  // NOTE: Removed manual window scroll layout toggles that fought with mobile GSAP logic.
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
    duration: 0.9
  });
}

// -----------------------------
// MOBILE MENU TOGGLE LOGIC
// -----------------------------
const menuToggle = document.getElementById("menuToggle");
const nav = document.querySelector("nav");
const navLinks = document.querySelectorAll("header nav a[href^='#']");

function setActiveNav(linkId) {
  navLinks.forEach(link => {
    const href = link.getAttribute("href");
    link.classList.toggle("active", href === `#${linkId}`);
  });
}

if (navLinks.length) {
  const sectionObserver = new IntersectionObserver((entries) => {
    const visibleEntry = entries
      .filter(entry => entry.isIntersecting)
      .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

    if (!visibleEntry) return;

    const id = visibleEntry.target.id;
    if (id === "section-inventory") {
      setActiveNav("section2");
    } else if (id === "section6") {
      setActiveNav("section5");
    } else {
      setActiveNav(id);
    }
  }, {
    rootMargin: "-25% 0px -55% 0px",
    threshold: [0.15, 0.35, 0.5]
  });

  sectionTargets.forEach(section => sectionObserver.observe(section));
}

if (menuToggle && nav) {
  menuToggle.addEventListener("click", () => {
    menuToggle.classList.toggle("active");
    nav.classList.toggle("active");
    document.body.classList.toggle("menu-open");
  });

  // Automatically collapse the navigation drawer on link selection
  const activeLinks = nav.querySelectorAll("a");
  activeLinks.forEach(link => {
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