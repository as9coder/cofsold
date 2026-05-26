// ===== SOLDIER BOY FAN WEBSITE - INTERACTIVE JS =====

// NAVBAR SCROLL EFFECT
document.addEventListener('DOMContentLoaded', () => {
    const navbar = document.getElementById('navbar');
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // NAVBAR ACTIVE LINK HIGHLIGHT
    const sections = document.querySelectorAll('.section, #hero');
    const navLinks = document.querySelectorAll('.nav-links a');

    window.addEventListener('scroll', () => {
        let current = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop - 150;
            if (window.scrollY >= sectionTop) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${current}`) {
                link.classList.add('active');
            }
        });
    });

    // QUOTES SLIDER
    const quotes = document.querySelectorAll('.quote-card');
    const dotsContainer = document.getElementById('quoteDots');
    let currentQuote = 0;

    // Create dots
    quotes.forEach((_, index) => {
        const dot = document.createElement('div');
        dot.classList.add('quote-dot');
        if (index === 0) dot.classList.add('active');
        dot.addEventListener('click', () => showQuote(index));
        dotsContainer.appendChild(dot);
    });

    window.showQuote = function(index) {
        quotes.forEach(q => q.classList.remove('active'));
        document.querySelectorAll('.quote-dot').forEach(d => d.classList.remove('active'));
        quotes[index].classList.add('active');
        document.querySelectorAll('.quote-dot')[index].classList.add('active');
        currentQuote = index;
    };

    window.nextQuote = function() {
        const next = (currentQuote + 1) % quotes.length;
        showQuote(next);
    };

    window.prevQuote = function() {
        const prev = (currentQuote - 1 + quotes.length) % quotes.length;
        showQuote(prev);
    };

    // AUTO-ROTATE QUOTES
    let quoteInterval = setInterval(window.nextQuote, 5000);

    document.querySelector('.quotes-slider').addEventListener('mouseenter', () => {
        clearInterval(quoteInterval);
    });

    document.querySelector('.quotes-slider').addEventListener('mouseleave', () => {
        quoteInterval = setInterval(window.nextQuote, 5000);
    });

    // MOBILE MENU
    window.toggleMenu = function() {
        const navLinks = document.getElementById('navLinks');
        const hamburger = document.getElementById('hamburger');
        navLinks.classList.toggle('open');
        hamburger.classList.toggle('active');
    };

    // Close mobile menu on link click
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', () => {
            document.getElementById('navLinks').classList.remove('open');
            document.getElementById('hamburger').classList.remove('active');
        });
    });

    // KEYBOARD NAVIGATION FOR QUOTES
    document.addEventListener('keydown', (e) => {
        if (e.key === 'ArrowRight') window.nextQuote();
        if (e.key === 'ArrowLeft') window.prevQuote();
    });

    // GALLERY ITEMS - ADD CLICK EFFECT
    document.querySelectorAll('.gallery-item').forEach((item, index) => {
        item.addEventListener('click', function() {
            this.style.transform = 'scale(0.95)';
            setTimeout(() => {
                this.style.transform = 'scale(1.03)';
            }, 150);
            setTimeout(() => {
                this.style.transform = '';
            }, 500);
        });
    });

    // INTERSECTION OBSERVER FOR ENTRY ANIMATIONS
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    document.querySelectorAll('.bio-card, .power-card, .gallery-item').forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'all 0.6s ease';
        observer.observe(el);
    });

    console.log('%c🛡️ SOLDIER BOY FAN WEBSITE LOADED', 'font-size: 20px; font-weight: bold; color: #cc0000; text-shadow: 2px 2px 0 #002868;');
    console.log('%c"I\'m the goddamn hero."', 'font-size: 14px; font-style: italic; color: #c9a84c;');
});