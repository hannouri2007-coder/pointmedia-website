// GSAP Animations
gsap.registerPlugin(ScrollTrigger);

// Hero Animation
gsap.from(".hero h1", { opacity: 0, y: 50, duration: 1, delay: 0.5 });
gsap.from(".hero p", { opacity: 0, y: 50, duration: 1, delay: 1 });
gsap.from(".hero .cta-button", { opacity: 0, y: 50, duration: 1, delay: 1.5 });

// Section Reveals
gsap.utils.toArray(".section").forEach(section => {
    gsap.from(section, {
        opacity: 0,
        y: 50,
        duration: 1,
        scrollTrigger: {
            trigger: section,
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none reverse"
        }
    });
});

// Smooth Scrolling for Nav Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
