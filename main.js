document.addEventListener('DOMContentLoaded', () => {
    // Mobile Navigation Toggle
    const navToggle = document.querySelector('.nav-toggle');
    const navMenu = document.querySelector('.nav-menu');
    const body = document.body;

    if (navToggle && navMenu) {
        navToggle.addEventListener('click', () => {
            navMenu.classList.toggle('active');
            navToggle.classList.toggle('active');
            // Prevent scrolling when menu is open
            if (navMenu.classList.contains('active')) {
                body.style.overflow = 'hidden';
            } else {
                body.style.overflow = 'auto';
            }
        });

        // Close menu when a link is clicked
        document.querySelectorAll('.nav-menu a').forEach(link => {
            link.addEventListener('click', () => {
                navMenu.classList.remove('active');
                navToggle.classList.remove('active');
                body.style.overflow = 'auto';
            });
        });
    }

    // Smooth Scrolling
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                // Account for fixed header height
                const headerOffset = 80;
                const elementPosition = targetElement.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Contact Form Handling (Simulation)
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            
            // Get form values
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            
            // Basic validation simulation
            if (name && email) {
                const btn = contactForm.querySelector('button[type="submit"]');
                const originalText = btn.innerText;
                
                btn.innerText = 'Sending...';
                btn.disabled = true;
                
                // Simulate network request
                setTimeout(() => {
                    alert(`Thanks ${name}! I'll be in touch with you at ${email} shortly.`);
                    contactForm.reset();
                    btn.innerText = originalText;
                    btn.disabled = false;
                }, 1500);
            }
        });
    }

    // Scroll Animation (Fade in elements on scroll)
    const observerOptions = {
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    document.querySelectorAll('section').forEach(section => {
        section.classList.add('hidden'); // Add this class in CSS if you want initial hidden state
        // observer.observe(section); // Uncomment to enable scroll animations
    });
});