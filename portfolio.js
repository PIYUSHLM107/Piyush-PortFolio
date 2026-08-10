


// ======================================
// GSAP + SCROLLTRIGGER
// ======================================

gsap.registerPlugin(ScrollTrigger);


// ======================================
// PAGE LOAD
// ======================================

const tl = gsap.timeline();

tl.from(".mainnav", {
    y: -100,
    opacity: 0,
    duration: 1,
    ease: "power3.out"
})

.from("#logoheading", {
    x: -100,
    opacity: 0,
    duration: 0.8,
    ease: "back.out(1.7)"
})

.from(".navlinks", {
    y: -30,
    opacity: 0,
    duration: 0.5,
    stagger: 0.15
});


// ======================================
// ABOUT SECTION
// ======================================

gsap.from("#portfolioimg", {
    scrollTrigger: {
        trigger: ".section2",
        start: "top 80%",
        toggleActions: "play none none reverse"
    },

    scale: 0,
    rotation: -180,
    opacity: 0,

    duration: 1.5,

    ease: "back.out(1.7)"
});


gsap.from("#mainparadiv", {
    scrollTrigger: {
        trigger: ".section2",
        start: "top 80%"
    },

    x: 100,
    opacity: 0,

    duration: 1,

    ease: "power3.out"
});


// ======================================
// PROJECT TITLE
// ======================================

gsap.from("#myprojectH", {
    scrollTrigger: {
        trigger: "#section3",
        start: "top 80%",
        toggleActions: "play none none reverse"
    },

    y: 100,
    opacity: 0,

    duration: 1,

    ease: "power3.out"
});


// ======================================
// 3D PROJECT CARD HOVER
// ======================================

document.querySelectorAll(".prjs").forEach((card) => {

    card.addEventListener("mousemove", (e) => {

        const rect = card.getBoundingClientRect();

        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        const centerX = rect.width / 2;
        const centerY = rect.height / 2;

        const rotateX = (y - centerY) / 12;
        const rotateY = (centerX - x) / 12;

        gsap.to(card, {
            rotationX: rotateX,
            rotationY: rotateY,
            scale: 1.03,

            duration: 0.3,

            ease: "power2.out",

            transformPerspective: 1000
        });

    });


    card.addEventListener("mouseleave", () => {

        gsap.to(card, {
            rotationX: 0,
            rotationY: 0,
            scale: 1,

            duration: 0.6,

            ease: "power3.out"
        });

    });

});

// ======================================
// SKILLS
// ======================================

gsap.from("#skillsH", {
    scrollTrigger: {
        trigger: "#section4",
        start: "top 80%"
    },

    y: 80,
    opacity: 0,

    duration: 1
});


gsap.from("#skillsmaindiv > div", {
    scrollTrigger: {
        trigger: "#skillsmaindiv",
        start: "top 80%"
    },

    y: 80,
    opacity: 0,
    scale: 0.5,

    duration: 0.7,

    stagger: 0.15,

    ease: "back.out(1.7)"
});


// ======================================
// CONTACT
// ======================================

gsap.from("#mycontactH", {
    scrollTrigger: {
        trigger: "#section5",
        start: "top 80%"
    },

    y: 80,
    opacity: 0,

    duration: 1
});


gsap.from(".form-container", {
    scrollTrigger: {
        trigger: ".form-container",
        start: "top 80%"
    },

    x: -100,
    opacity: 0,

    duration: 1,

    ease: "power3.out"
});


// ======================================
// FOOTER
// ======================================

gsap.from("#footerSec", {
    scrollTrigger: {
        trigger: "#footerSec",
        start: "top 90%"
    },

    y: 100,
    opacity: 0,

    duration: 1
});

// ======================================
// SCROLL PROGRESS BAR
// ======================================

gsap.to(".scroll-progress", {
    width: "100%",
    ease: "none",

    scrollTrigger: {
        start: "top top",
        end: "max",
        scrub: 0.2
    }
});

