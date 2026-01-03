/* ========================================
   MARVEL-THEMED PORTFOLIO - JavaScript
   ======================================== */

document.addEventListener('DOMContentLoaded', function() {
    // ===== HELPER FUNCTIONS =====
    const $ = (selector) => document.querySelector(selector);
    const $$ = (selector) => Array.from(document.querySelectorAll(selector));

    // ===== THEME TOGGLE =====
    const themeToggle = $('#themeToggle');
    const themeIcon = $('#themeIcon');
    
    // Load saved theme
    const savedTheme = localStorage.getItem('theme') || 'dark';
    document.body.setAttribute('data-theme', savedTheme);
    updateThemeIcon(savedTheme);

    function updateThemeIcon(theme) {
        if (themeIcon) {
            themeIcon.className = theme === 'dark' ? 'fas fa-moon' : 'fas fa-sun';
        }
    }

    if (themeToggle) {
        themeToggle.addEventListener('click', () => {
            const currentTheme = document.body.getAttribute('data-theme');
            const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
            
            document.body.setAttribute('data-theme', newTheme);
            localStorage.setItem('theme', newTheme);
            updateThemeIcon(newTheme);
            
            // Add a subtle animation
            themeToggle.style.transform = 'rotate(360deg)';
            setTimeout(() => {
                themeToggle.style.transform = '';
            }, 300);
        });
    }

    // ===== MOBILE NAVIGATION =====
    const hamburger = $('#hamburger');
    const navLinks = $('#navLinks');

    if (hamburger && navLinks) {
        hamburger.addEventListener('click', () => {
            const isOpen = hamburger.classList.toggle('open');
            navLinks.classList.toggle('show');
            hamburger.setAttribute('aria-expanded', isOpen.toString());
        });

        // Close menu when clicking a link
        $$('.nav-link').forEach(link => {
            link.addEventListener('click', () => {
                hamburger.classList.remove('open');
                navLinks.classList.remove('show');
                hamburger.setAttribute('aria-expanded', 'false');
            });
        });

        // Close menu when clicking outside
        document.addEventListener('click', (e) => {
            if (navLinks.classList.contains('show') && 
                !hamburger.contains(e.target) && 
                !navLinks.contains(e.target)) {
                hamburger.classList.remove('open');
                navLinks.classList.remove('show');
                hamburger.setAttribute('aria-expanded', 'false');
            }
        });
    }

    // ===== SMOOTH SCROLLING =====
    $$('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            
            if (targetElement) {
                const offsetTop = targetElement.offsetTop - 80;
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
                
                // Update URL
                history.pushState(null, null, `#${targetId}`);
            }
        });
    });

    // ===== ACTIVE NAVIGATION HIGHLIGHT =====
    const sections = $$('section[id]');
    const navLinksElements = $$('.nav-link');

    function updateActiveNav() {
        const scrollPosition = window.scrollY + 100;

        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;
            const sectionId = section.getAttribute('id');

            if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                navLinksElements.forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === `#${sectionId}`) {
                        link.classList.add('active');
                    }
                });
            }
        });
    }

    window.addEventListener('scroll', updateActiveNav);
    updateActiveNav();

    // ===== NAVBAR SCROLL EFFECT =====
    const navbar = $('#navbar');
    
    function handleNavbarScroll() {
        if (window.scrollY > 50) {
            navbar?.classList.add('scrolled');
        } else {
            navbar?.classList.remove('scrolled');
        }
    }

    window.addEventListener('scroll', handleNavbarScroll);

    // ===== BACK TO TOP BUTTON =====
    const backToTop = $('#backToTop');

    function handleBackToTop() {
        if (window.scrollY > 500) {
            backToTop?.classList.add('visible');
        } else {
            backToTop?.classList.remove('visible');
        }
    }

    window.addEventListener('scroll', handleBackToTop);

    if (backToTop) {
        backToTop.addEventListener('click', () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }

    // ===== PROJECTS SCROLLER =====
    const projectsScroller = $('.projects-scroller');

    if (projectsScroller) {
        // Keyboard navigation
        projectsScroller.addEventListener('keydown', (e) => {
            const scrollAmount = 370;
            if (e.key === 'ArrowRight') {
                e.preventDefault();
                projectsScroller.scrollBy({ left: scrollAmount, behavior: 'smooth' });
            } else if (e.key === 'ArrowLeft') {
                e.preventDefault();
                projectsScroller.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
            }
        });

        // Horizontal scroll with mouse wheel
        projectsScroller.addEventListener('wheel', (e) => {
            if (Math.abs(e.deltaY) > Math.abs(e.deltaX)) {
                e.preventDefault();
                projectsScroller.scrollBy({ left: e.deltaY, behavior: 'auto' });
            }
        }, { passive: false });
    }

    // ===== CONTACT FORM WITH EMAILJS =====
    const contactForm = $('#contactForm');
    const submitBtn = $('#submitBtn');
    const formStatus = $('#formStatus');

    // Initialize EmailJS (replace with your credentials)
    // emailjs.init('YOUR_PUBLIC_KEY');

    if (contactForm) {
        contactForm.addEventListener('submit', async function(e) {
            e.preventDefault();

            // Show loading state
            submitBtn.classList.add('loading');
            submitBtn.disabled = true;

            const formData = {
                name: $('#name').value,
                email: $('#email').value,
                subject: $('#subject').value,
                message: $('#message').value
            };

            try {
                // EmailJS integration (uncomment and configure)
                /*
                await emailjs.send('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', {
                    from_name: formData.name,
                    from_email: formData.email,
                    subject: formData.subject,
                    message: formData.message
                });
                */

                // Simulate success (remove this when EmailJS is configured)
                await new Promise(resolve => setTimeout(resolve, 1500));

                // Show success message
                formStatus.textContent = 'Message sent successfully! I\'ll get back to you soon.';
                formStatus.className = 'form-status success';
                contactForm.reset();

            } catch (error) {
                console.error('Email error:', error);
                formStatus.textContent = 'Oops! Something went wrong. Please try again or email me directly.';
                formStatus.className = 'form-status error';
            } finally {
                submitBtn.classList.remove('loading');
                submitBtn.disabled = false;

                // Hide status after 5 seconds
                setTimeout(() => {
                    formStatus.className = 'form-status';
                }, 5000);
            }
        });
    }

    // ===== INTERSECTION OBSERVER FOR ANIMATIONS =====
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-fade-in');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Observe elements for animation
    $$('.project-card, .experience-card, .skill-category, .education-card, .info-card').forEach(el => {
        el.style.opacity = '0';
        observer.observe(el);
    });

    // ===== TYPING EFFECT FOR HERO (optional) =====
    function typeWriter(element, text, speed = 50) {
        let i = 0;
        element.textContent = '';
        
        function type() {
            if (i < text.length) {
                element.textContent += text.charAt(i);
                i++;
                setTimeout(type, speed);
            }
        }
        
        type();
    }

    // ===== SKILL TAG HOVER EFFECT =====
    $$('.skill-tag, .tech-tag').forEach(tag => {
        tag.addEventListener('mouseenter', function() {
            this.style.transform = 'scale(1.1)';
        });
        
        tag.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(1)';
        });
    });

    // ===== PARALLAX EFFECT FOR HERO (subtle) =====
    const hero = $('.hero');
    
    if (hero) {
        window.addEventListener('scroll', () => {
            const scrolled = window.scrollY;
            if (scrolled < window.innerHeight) {
                hero.style.backgroundPositionY = `${scrolled * 0.5}px`;
            }
        });
    }

    // ===== CONSOLE EASTER EGG =====
    console.log(`
    %c🦸 MARVEL-THEMED PORTFOLIO 🦸
    %cDesigned with Iron Man's precision and Spider-Man's agility!
    
    Built by Solomon Chilumula
    AI Developer & Startup Founder
    
    "No amount of money ever bought a second of time" - Tony Stark
    `, 
    'color: #00BFFF; font-size: 20px; font-weight: bold;',
    'color: #E62429; font-size: 12px;'
    );

    // ===== HANDLE PAGE VISIBILITY =====
    document.addEventListener('visibilitychange', () => {
        if (document.hidden) {
            document.title = '👋 Come back! - Solomon Chilumula';
        } else {
            document.title = 'Solomon Chilumula - Portfolio';
        }
    });

    // ===== KEYBOARD SHORTCUTS =====
    document.addEventListener('keydown', (e) => {
        // Press 'T' to toggle theme
        if (e.key === 't' && !e.target.matches('input, textarea')) {
            themeToggle?.click();
        }
        
        // Press 'Escape' to close mobile menu
        if (e.key === 'Escape' && navLinks?.classList.contains('show')) {
            hamburger?.classList.remove('open');
            navLinks?.classList.remove('show');
        }
    });

    // ===== PRELOAD CRITICAL IMAGES =====
    const criticalImages = ['nexxify-founder.jpg'];
    criticalImages.forEach(src => {
        const img = new Image();
        img.src = src;
    });

    // ===== PERFORMANCE: DEBOUNCE SCROLL EVENTS =====
    function debounce(func, wait = 10) {
        let timeout;
        return function(...args) {
            clearTimeout(timeout);
            timeout = setTimeout(() => func.apply(this, args), wait);
        };
    }

    // Apply debouncing to scroll handlers
    window.addEventListener('scroll', debounce(() => {
        handleNavbarScroll();
        handleBackToTop();
        updateActiveNav();
    }, 10));
});

// ===== SERVICE WORKER REGISTRATION (for PWA) =====
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        // Uncomment to enable service worker
        // navigator.serviceWorker.register('/sw.js');
    });
}
