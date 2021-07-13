document.addEventListener('DOMContentLoaded', () => {
    var menuMobile = document.querySelector("#nav-icon2");

    if (menuMobile) {
        menuMobile.addEventListener('click', () => {
            if (menuMobile.classList.contains('open')) {
                menuMobile.classList.remove('open');    
            } else {
                menuMobile.classList.add('open');
            }
        });
    }

    var tl = gsap.timeline();
    tl
    .from(".menu-1", {
        duration: 1,
        opacity: 0,
        delay: 0.3
    })
    .from(".menu-2", {
        duration: 1,
        opacity: 0,
    }, "-=0.8")
    .from(".menu-3", {
        duration: 1,
        opacity: 0,
    }, "-=0.8")
    .from(".menu-4", {
        duration: 1,
        opacity: 0,
    }, "-=0.8")
    .from(".menu-5", {
        duration: 1,
        opacity: 0,
    }, "-=0.8")
    .from(".container-item div", {
        duration: 1,
        opacity: 0,
        y: 300,
        stagger: {each: 0.2},
        ease: "power3.out"
    }, "-=0.8");

    gsap.registerPlugin(ScrollTrigger);

    gsap.from("#section-works div", {
        duration: 1,
        opacity: 0,
        y: 300,
        stagger: {each: 0.2},
        ease: "power3.out",
        scrollTrigger: {
            trigger: "#section-works",

        }
    });

    gsap.from("#contact", {
        duration: 1,
        opacity: 0,
        y: 300,
        stagger: {each: 0.2},
        ease: "power3.out",
        scrollTrigger: {
            trigger: "#contact",

        }
    });

});