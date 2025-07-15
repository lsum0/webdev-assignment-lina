// ===== ENHANCED MODERN 2025 PORTFOLIO JAVASCRIPT =====

// ===== GSAP REGISTRATION =====
gsap.registerPlugin(ScrollTrigger, TextPlugin);

// ===== ENHANCED GLOBAL VARIABLES =====
let isLoading = true;
let currentSection = 'home';
let mouseX = 0;
let mouseY = 0;
let cursorX = 0;
let cursorY = 0;

// ===== ENHANCED CURSOR SYSTEM =====
class EnhancedCursor {
    constructor() {
        this.cursor = document.querySelector('.cursor');
        this.follower = document.querySelector('.cursor-follower');
        this.isHovering = false;
        
        this.init();
    }
    
    init() {
        // Mouse move event with smooth interpolation
        document.addEventListener('mousemove', (e) => {
            mouseX = e.clientX;
            mouseY = e.clientY;
        });
        
        // Smooth cursor animation
        this.animateCursor();
        
        // Enhanced hover effects
        this.setupHoverEffects();
    }
    
    animateCursor() {
        // Smooth interpolation for cursor movement
        cursorX += (mouseX - cursorX) * 0.1;
        cursorY += (mouseY - cursorY) * 0.1;
        
        if (this.cursor) {
            this.cursor.style.transform = `translate(${cursorX}px, ${cursorY}px)`;
        }
        
        if (this.follower) {
            this.follower.style.transform = `translate(${cursorX - 20}px, ${cursorY - 20}px)`;
        }
        
        requestAnimationFrame(() => this.animateCursor());
    }
    
    setupHoverEffects() {
        // Enhanced hover elements
        const hoverElements = document.querySelectorAll(`
            a, button, .btn, .nav-link, .skill-card, .project-card, 
            .certificate-card, .contact-item, .social-link, .filter-btn,
            .view-btn, .certificate-image, input, textarea
        `);
        
        hoverElements.forEach(element => {
            element.addEventListener('mouseenter', () => {
                this.cursor?.classList.add('hover');
                this.follower?.classList.add('hover');
                this.isHovering = true;
                
                // Add magnetic effect
                this.addMagneticEffect(element);
            });
            
            element.addEventListener('mouseleave', () => {
                this.cursor?.classList.remove('hover');
                this.follower?.classList.remove('hover');
                this.isHovering = false;
                
                // Remove magnetic effect
                this.removeMagneticEffect(element);
            });
        });
    }
    
    addMagneticEffect(element) {
        const handleMouseMove = (e) => {
            const rect = element.getBoundingClientRect();
            const x = e.clientX - rect.left - rect.width / 2;
            const y = e.clientY - rect.top - rect.height / 2;
            
            gsap.to(element, {
                x: x * 0.1,
                y: y * 0.1,
                duration: 0.3,
                ease: "power2.out"
            });
        };
        
        element.addEventListener('mousemove', handleMouseMove);
        element._magneticHandler = handleMouseMove;
    }
    
    removeMagneticEffect(element) {
        if (element._magneticHandler) {
            element.removeEventListener('mousemove', element._magneticHandler);
            delete element._magneticHandler;
        }
        
        gsap.to(element, {
            x: 0,
            y: 0,
            duration: 0.5,
            ease: "elastic.out(1, 0.3)"
        });
    }
}

// ===== ENHANCED LOADING SYSTEM =====
class EnhancedLoader {
    constructor() {
        this.loadingScreen = document.getElementById('loading-screen');
        this.progressBar = document.querySelector('.progress-bar');
        this.progressText = document.querySelector('.progress-text');
        this.loadingParticles = document.getElementById('loading-particles');
        
        this.init();
    }
    
    init() {
        // Initialize particles
        this.initParticles();
        
        // Simulate loading progress
        this.simulateLoading();
        
        // Hide loading screen after completion
        setTimeout(() => {
            this.hideLoader();
        }, 3000);
    }
    
    initParticles() {
        if (typeof particlesJS !== 'undefined' && this.loadingParticles) {
            particlesJS('loading-particles', {
                particles: {
                    number: { value: 50 },
                    color: { value: "#6366f1" },
                    shape: { type: "circle" },
                    opacity: { value: 0.5 },
                    size: { value: 3 },
                    move: {
                        enable: true,
                        speed: 2,
                        direction: "none",
                        random: true,
                        out_mode: "out"
                    }
                },
                interactivity: {
                    detect_on: "canvas",
                    events: {
                        onhover: { enable: false },
                        onclick: { enable: false }
                    }
                }
            });
        }
    }
    
    simulateLoading() {
        let progress = 0;
        const interval = setInterval(() => {
            progress += Math.random() * 15;
            if (progress > 100) progress = 100;
            
            if (this.progressText) {
                this.progressText.textContent = `${Math.round(progress)}%`;
            }
            
            if (progress >= 100) {
                clearInterval(interval);
            }
        }, 200);
    }
    
    hideLoader() {
        gsap.to(this.loadingScreen, {
            opacity: 0,
            duration: 1,
            ease: "power2.out",
            onComplete: () => {
                this.loadingScreen.style.display = 'none';
                isLoading = false;
                this.initMainAnimations();
            }
        });
    }
    
    initMainAnimations() {
        // Initialize all main page animations
        new EnhancedAnimations();
        new EnhancedNavigation();
        new EnhancedHero();
        new EnhancedSkills();
        new EnhancedCertificates();
        new EnhancedContact();
    }
}

// ===== ENHANCED NAVIGATION SYSTEM =====
class EnhancedNavigation {
    constructor() {
        this.navbar = document.getElementById('navbar');
        this.navLinks = document.querySelectorAll('.nav-link');
        this.hamburger = document.getElementById('hamburger');
        this.navMenu = document.getElementById('nav-menu');
        
        this.init();
    }
    
    init() {
        // Scroll effects
        this.setupScrollEffects();
        
        // Navigation interactions
        this.setupNavigation();
        
        // Mobile menu
        this.setupMobileMenu();
        
        // Active section tracking
        this.setupSectionTracking();
    }
    
    setupScrollEffects() {
        let lastScrollY = window.scrollY;
        
        window.addEventListener('scroll', () => {
            const currentScrollY = window.scrollY;
            
            // Add scrolled class
            if (currentScrollY > 100) {
                this.navbar.classList.add('scrolled');
            } else {
                this.navbar.classList.remove('scrolled');
            }
            
            // Hide/show navbar on scroll
            if (currentScrollY > lastScrollY && currentScrollY > 200) {
                gsap.to(this.navbar, {
                    y: -100,
                    duration: 0.3,
                    ease: "power2.out"
                });
            } else {
                gsap.to(this.navbar, {
                    y: 0,
                    duration: 0.3,
                    ease: "power2.out"
                });
            }
            
            lastScrollY = currentScrollY;
        });
    }
    
    setupNavigation() {
        this.navLinks.forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                
                const targetId = link.getAttribute('href').substring(1);
                const targetSection = document.getElementById(targetId);
                
                if (targetSection) {
                    // Smooth scroll with GSAP
                    gsap.to(window, {
                        duration: 1.5,
                        scrollTo: {
                            y: targetSection,
                            offsetY: 80
                        },
                        ease: "power2.inOut"
                    });
                    
                    // Update active link
                    this.updateActiveLink(link);
                    
                    // Close mobile menu
                    this.closeMobileMenu();
                }
            });
        });
    }
    
    setupMobileMenu() {
        if (this.hamburger) {
            this.hamburger.addEventListener('click', () => {
                this.toggleMobileMenu();
            });
        }
    }
    
    toggleMobileMenu() {
        this.hamburger.classList.toggle('active');
        this.navMenu.classList.toggle('active');
        
        // Animate menu items
        if (this.navMenu.classList.contains('active')) {
            gsap.fromTo('.nav-item', {
                opacity: 0,
                y: 30
            }, {
                opacity: 1,
                y: 0,
                duration: 0.5,
                stagger: 0.1,
                ease: "power2.out"
            });
        }
    }
    
    closeMobileMenu() {
        this.hamburger.classList.remove('active');
        this.navMenu.classList.remove('active');
    }
    
    setupSectionTracking() {
        const sections = document.querySelectorAll('section[id]');
        
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const sectionId = entry.target.id;
                    const correspondingLink = document.querySelector(`a[href="#${sectionId}"]`);
                    
                    if (correspondingLink) {
                        this.updateActiveLink(correspondingLink);
                    }
                }
            });
        }, {
            threshold: 0.3,
            rootMargin: '-80px 0px -80px 0px'
        });
        
        sections.forEach(section => observer.observe(section));
    }
    
    updateActiveLink(activeLink) {
        this.navLinks.forEach(link => link.classList.remove('active'));
        activeLink.classList.add('active');
    }
}

// ===== ENHANCED HERO SYSTEM =====
class EnhancedHero {
    constructor() {
        this.heroParticles = document.getElementById('hero-particles');
        this.typedElement = document.getElementById('typed-text');
        this.statNumbers = document.querySelectorAll('.stat-number');
        
        this.init();
    }
    
    init() {
        // Initialize hero particles
        this.initHeroParticles();
        
        // Initialize typed text
        this.initTypedText();
        
        // Initialize floating animations
        this.initFloatingAnimations();
        
        // Initialize stat counters
        this.initStatCounters();
        
        // Initialize scroll animations
        this.initScrollAnimations();
    }
    
    initHeroParticles() {
        if (typeof particlesJS !== 'undefined' && this.heroParticles) {
            particlesJS('hero-particles', {
                particles: {
                    number: { value: 80 },
                    color: { value: ["#6366f1", "#06b6d4", "#f59e0b"] },
                    shape: { type: "circle" },
                    opacity: {
                        value: 0.3,
                        random: true,
                        anim: { enable: true, speed: 1, opacity_min: 0.1 }
                    },
                    size: {
                        value: 3,
                        random: true,
                        anim: { enable: true, speed: 2, size_min: 0.1 }
                    },
                    move: {
                        enable: true,
                        speed: 1,
                        direction: "none",
                        random: true,
                        straight: false,
                        out_mode: "out",
                        bounce: false
                    }
                },
                interactivity: {
                    detect_on: "canvas",
                    events: {
                        onhover: { enable: true, mode: "repulse" },
                        onclick: { enable: true, mode: "push" }
                    },
                    modes: {
                        repulse: { distance: 100, duration: 0.4 },
                        push: { particles_nb: 4 }
                    }
                }
            });
        }
    }
    
    initTypedText() {
        if (this.typedElement && typeof Typed !== 'undefined') {
            new Typed(this.typedElement, {
                strings: [
                    'مطورة مواقع ويب',
                    'متخصصة في علم البيانات',
                    'مصممة UX/UI',
                    'باحثة في الذكاء الاصطناعي',
                    'مشاركة في الهاكثونات'
                ],
                typeSpeed: 50,
                backSpeed: 30,
                backDelay: 2000,
                loop: true,
                showCursor: true,
                cursorChar: '|'
            });
        }
    }
    
    initFloatingAnimations() {
        // Floating orbs animation
        gsap.to('.orb-1', {
            y: -30,
            x: 20,
            duration: 6,
            ease: "sine.inOut",
            repeat: -1,
            yoyo: true
        });
        
        gsap.to('.orb-2', {
            y: 25,
            x: -15,
            duration: 8,
            ease: "sine.inOut",
            repeat: -1,
            yoyo: true
        });
        
        gsap.to('.orb-3', {
            y: -20,
            x: 30,
            duration: 7,
            ease: "sine.inOut",
            repeat: -1,
            yoyo: true
        });
        
        gsap.to('.orb-4', {
            y: 35,
            x: -25,
            duration: 5,
            ease: "sine.inOut",
            repeat: -1,
            yoyo: true
        });
        
        // Floating icons animation
        gsap.to('.floating-icon', {
            y: -15,
            duration: 3,
            ease: "sine.inOut",
            repeat: -1,
            yoyo: true,
            stagger: 0.5
        });
    }
    
    initStatCounters() {
        this.statNumbers.forEach(stat => {
            const target = parseInt(stat.getAttribute('data-count'));
            
            ScrollTrigger.create({
                trigger: stat,
                start: "top 80%",
                onEnter: () => {
                    gsap.to(stat, {
                        innerHTML: target,
                        duration: 2,
                        ease: "power2.out",
                        snap: { innerHTML: 1 },
                        onUpdate: function() {
                            stat.innerHTML = Math.ceil(stat.innerHTML);
                        }
                    });
                }
            });
        });
    }
    
    initScrollAnimations() {
        // Hero content animations
        gsap.timeline({
            scrollTrigger: {
                trigger: ".hero",
                start: "top center",
                end: "bottom center",
                scrub: 1
            }
        })
        .to(".hero-content", { y: -50, opacity: 0.8 })
        .to(".hero-orbs", { y: -100, opacity: 0.5 }, 0);
    }
}

// ===== ENHANCED ANIMATIONS SYSTEM =====
class EnhancedAnimations {
    constructor() {
        this.init();
    }
    
    init() {
        // Section reveal animations
        this.initSectionAnimations();
        
        // Card animations
        this.initCardAnimations();
        
        // Text animations
        this.initTextAnimations();
        
        // Button animations
        this.initButtonAnimations();
    }
    
    initSectionAnimations() {
        // Animate sections on scroll
        gsap.utils.toArray('section').forEach(section => {
            gsap.fromTo(section, {
                opacity: 0,
                y: 50
            }, {
                opacity: 1,
                y: 0,
                duration: 1,
                ease: "power2.out",
                scrollTrigger: {
                    trigger: section,
                    start: "top 80%",
                    end: "bottom 20%",
                    toggleActions: "play none none reverse"
                }
            });
        });
    }
    
    initCardAnimations() {
        // Animate cards with stagger
        const cardSelectors = [
            '.about-card',
            '.skill-card',
            '.project-card',
            '.certificate-card',
            '.contact-item'
        ];
        
        cardSelectors.forEach(selector => {
            gsap.fromTo(selector, {
                opacity: 0,
                y: 30,
                scale: 0.9
            }, {
                opacity: 1,
                y: 0,
                scale: 1,
                duration: 0.6,
                ease: "back.out(1.7)",
                stagger: 0.1,
                scrollTrigger: {
                    trigger: selector,
                    start: "top 85%",
                    toggleActions: "play none none reverse"
                }
            });
        });
    }
    
    initTextAnimations() {
        // Animate section titles
        gsap.utils.toArray('.section-title').forEach(title => {
            gsap.fromTo(title, {
                opacity: 0,
                y: 30
            }, {
                opacity: 1,
                y: 0,
                duration: 0.8,
                ease: "power2.out",
                scrollTrigger: {
                    trigger: title,
                    start: "top 90%",
                    toggleActions: "play none none reverse"
                }
            });
        });
        
        // Animate section subtitles
        gsap.utils.toArray('.section-subtitle').forEach(subtitle => {
            gsap.fromTo(subtitle, {
                opacity: 0,
                y: 20
            }, {
                opacity: 1,
                y: 0,
                duration: 0.6,
                delay: 0.2,
                ease: "power2.out",
                scrollTrigger: {
                    trigger: subtitle,
                    start: "top 90%",
                    toggleActions: "play none none reverse"
                }
            });
        });
    }
    
    initButtonAnimations() {
        // Enhanced button hover effects
        document.querySelectorAll('.btn').forEach(btn => {
            btn.addEventListener('mouseenter', () => {
                gsap.to(btn, {
                    scale: 1.05,
                    duration: 0.3,
                    ease: "back.out(1.7)"
                });
            });
            
            btn.addEventListener('mouseleave', () => {
                gsap.to(btn, {
                    scale: 1,
                    duration: 0.3,
                    ease: "back.out(1.7)"
                });
            });
        });
    }
}

// ===== ENHANCED SKILLS SYSTEM =====
class EnhancedSkills {
    constructor() {
        this.skillCards = document.querySelectorAll('.skill-card');
        this.progressBars = document.querySelectorAll('.skill-progress .progress-bar');
        
        this.init();
    }
    
    init() {
        this.initProgressAnimations();
        this.initSkillCardAnimations();
    }
    
    initProgressAnimations() {
        this.progressBars.forEach(bar => {
            const progress = bar.getAttribute('data-progress');
            
            ScrollTrigger.create({
                trigger: bar,
                start: "top 80%",
                onEnter: () => {
                    gsap.to(bar, {
                        '--progress': `${progress}%`,
                        duration: 2,
                        ease: "power2.out"
                    });
                    
                    // Animate the progress bar fill
                    gsap.fromTo(bar, {
                        '--width': '0%'
                    }, {
                        '--width': `${progress}%`,
                        duration: 2,
                        ease: "power2.out"
                    });
                }
            });
        });
    }
    
    initSkillCardAnimations() {
        this.skillCards.forEach(card => {
            // Hover animations
            card.addEventListener('mouseenter', () => {
                gsap.to(card, {
                    y: -10,
                    scale: 1.02,
                    duration: 0.3,
                    ease: "power2.out"
                });
                
                // Animate skill icon
                const icon = card.querySelector('.skill-icon');
                if (icon) {
                    gsap.to(icon, {
                        rotation: 5,
                        scale: 1.1,
                        duration: 0.3,
                        ease: "back.out(1.7)"
                    });
                }
            });
            
            card.addEventListener('mouseleave', () => {
                gsap.to(card, {
                    y: 0,
                    scale: 1,
                    duration: 0.3,
                    ease: "power2.out"
                });
                
                // Reset skill icon
                const icon = card.querySelector('.skill-icon');
                if (icon) {
                    gsap.to(icon, {
                        rotation: 0,
                        scale: 1,
                        duration: 0.3,
                        ease: "back.out(1.7)"
                    });
                }
            });
        });
    }
}

// ===== ENHANCED CERTIFICATES SYSTEM =====
class EnhancedCertificates {
    constructor() {
        this.filterBtns = document.querySelectorAll('.filter-btn');
        this.certificateCards = document.querySelectorAll('.certificate-card');
        this.modal = document.getElementById('certificate-modal');
        this.modalBody = document.getElementById('modal-body');
        
        this.init();
    }
    
    init() {
        this.initFilterSystem();
        this.initCertificateModal();
        this.initCertificateAnimations();
    }
    
    initFilterSystem() {
        this.filterBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                const filter = btn.getAttribute('data-filter');
                
                // Update active button
                this.filterBtns.forEach(b => b.classList.remove('active'));
                btn.classList.add('active');
                
                // Filter certificates with animation
                this.filterCertificates(filter);
            });
        });
    }
    
    filterCertificates(filter) {
        this.certificateCards.forEach(card => {
            const category = card.getAttribute('data-category');
            const shouldShow = filter === 'all' || category === filter;
            
            if (shouldShow) {
                gsap.to(card, {
                    opacity: 1,
                    scale: 1,
                    y: 0,
                    duration: 0.5,
                    ease: "back.out(1.7)"
                });
                card.style.display = 'block';
            } else {
                gsap.to(card, {
                    opacity: 0,
                    scale: 0.8,
                    y: 20,
                    duration: 0.3,
                    ease: "power2.in",
                    onComplete: () => {
                        card.style.display = 'none';
                    }
                });
            }
        });
    }
    
    initCertificateModal() {
        // Close modal when clicking outside
        this.modal?.addEventListener('click', (e) => {
            if (e.target === this.modal) {
                this.closeCertificateModal();
            }
        });
        
        // Close modal with escape key
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && this.modal?.classList.contains('active')) {
                this.closeCertificateModal();
            }
        });
    }
    
    openCertificate(certificatePath) {
        if (!this.modal || !this.modalBody) return;
        
        // Clear previous content
        this.modalBody.innerHTML = '';
        
        // Determine file type and create appropriate element
        const fileExtension = certificatePath.split('.').pop().toLowerCase();
        
        if (fileExtension === 'pdf') {
            const embed = document.createElement('embed');
            embed.src = certificatePath;
            embed.type = 'application/pdf';
            embed.style.width = '90vw';
            embed.style.height = '90vh';
            this.modalBody.appendChild(embed);
        } else if (['jpg', 'jpeg', 'png', 'gif'].includes(fileExtension)) {
            const img = document.createElement('img');
            img.src = certificatePath;
            img.style.maxWidth = '90vw';
            img.style.maxHeight = '90vh';
            img.style.objectFit = 'contain';
            this.modalBody.appendChild(img);
        }
        
        // Show modal with animation
        this.modal.classList.add('active');
        gsap.fromTo(this.modal, {
            opacity: 0
        }, {
            opacity: 1,
            duration: 0.3,
            ease: "power2.out"
        });
        
        gsap.fromTo('.modal-content', {
            scale: 0.8,
            opacity: 0
        }, {
            scale: 1,
            opacity: 1,
            duration: 0.4,
            ease: "back.out(1.7)"
        });
    }
    
    closeCertificateModal() {
        if (!this.modal) return;
        
        gsap.to(this.modal, {
            opacity: 0,
            duration: 0.3,
            ease: "power2.in",
            onComplete: () => {
                this.modal.classList.remove('active');
                this.modalBody.innerHTML = '';
            }
        });
    }
    
    initCertificateAnimations() {
        this.certificateCards.forEach(card => {
            const image = card.querySelector('.certificate-image');
            const overlay = card.querySelector('.certificate-overlay');
            
            if (image && overlay) {
                card.addEventListener('mouseenter', () => {
                    gsap.to(card, {
                        y: -10,
                        scale: 1.02,
                        duration: 0.3,
                        ease: "power2.out"
                    });
                    
                    gsap.to(overlay, {
                        opacity: 1,
                        duration: 0.3,
                        ease: "power2.out"
                    });
                });
                
                card.addEventListener('mouseleave', () => {
                    gsap.to(card, {
                        y: 0,
                        scale: 1,
                        duration: 0.3,
                        ease: "power2.out"
                    });
                    
                    gsap.to(overlay, {
                        opacity: 0,
                        duration: 0.3,
                        ease: "power2.out"
                    });
                });
            }
        });
    }
}

// ===== ENHANCED CONTACT SYSTEM =====
class EnhancedContact {
    constructor() {
        this.contactForm = document.getElementById('contact-form');
        this.formInputs = document.querySelectorAll('.form-group input, .form-group textarea');
        
        this.init();
    }
    
    init() {
        this.initFormAnimations();
        this.initFormValidation();
        this.initFormSubmission();
    }
    
    initFormAnimations() {
        this.formInputs.forEach(input => {
            // Focus animations
            input.addEventListener('focus', () => {
                const formGroup = input.closest('.form-group');
                gsap.to(formGroup, {
                    scale: 1.02,
                    duration: 0.3,
                    ease: "power2.out"
                });
            });
            
            input.addEventListener('blur', () => {
                const formGroup = input.closest('.form-group');
                gsap.to(formGroup, {
                    scale: 1,
                    duration: 0.3,
                    ease: "power2.out"
                });
            });
            
            // Typing animations
            input.addEventListener('input', () => {
                const label = input.nextElementSibling;
                if (label && input.value.length > 0) {
                    gsap.to(label, {
                        color: '#6366f1',
                        duration: 0.2,
                        ease: "power2.out"
                    });
                }
            });
        });
    }
    
    initFormValidation() {
        this.formInputs.forEach(input => {
            input.addEventListener('blur', () => {
                this.validateField(input);
            });
        });
    }
    
    validateField(field) {
        const value = field.value.trim();
        const formGroup = field.closest('.form-group');
        
        // Remove existing error states
        formGroup.classList.remove('error', 'success');
        
        // Basic validation
        let isValid = true;
        
        if (field.hasAttribute('required') && !value) {
            isValid = false;
        }
        
        if (field.type === 'email' && value) {
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            isValid = emailRegex.test(value);
        }
        
        // Apply visual feedback
        if (value && isValid) {
            formGroup.classList.add('success');
            gsap.to(field, {
                borderColor: '#28a745',
                duration: 0.3,
                ease: "power2.out"
            });
        } else if (value && !isValid) {
            formGroup.classList.add('error');
            gsap.to(field, {
                borderColor: '#dc3545',
                duration: 0.3,
                ease: "power2.out"
            });
        }
        
        return isValid;
    }
    
    initFormSubmission() {
        if (this.contactForm) {
            this.contactForm.addEventListener('submit', (e) => {
                e.preventDefault();
                
                // Validate all fields
                let isFormValid = true;
                this.formInputs.forEach(input => {
                    if (!this.validateField(input)) {
                        isFormValid = false;
                    }
                });
                
                if (isFormValid) {
                    this.submitForm();
                } else {
                    this.showFormError();
                }
            });
        }
    }
    
    submitForm() {
        const submitBtn = this.contactForm.querySelector('button[type="submit"]');
        const originalText = submitBtn.innerHTML;
        
        // Show loading state
        submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> جاري الإرسال...';
        submitBtn.disabled = true;
        
        // Simulate form submission
        setTimeout(() => {
            // Show success message
            this.showSuccessMessage();
            
            // Reset form
            this.contactForm.reset();
            
            // Reset button
            submitBtn.innerHTML = originalText;
            submitBtn.disabled = false;
        }, 2000);
    }
    
    showSuccessMessage() {
        // Create success notification
        const notification = document.createElement('div');
        notification.className = 'notification success';
        notification.innerHTML = `
            <i class="fas fa-check-circle"></i>
            <span>تم إرسال رسالتك بنجاح! سأتواصل معك قريباً.</span>
        `;
        
        document.body.appendChild(notification);
        
        // Animate notification
        gsap.fromTo(notification, {
            opacity: 0,
            y: -50
        }, {
            opacity: 1,
            y: 0,
            duration: 0.5,
            ease: "back.out(1.7)"
        });
        
        // Remove notification after 5 seconds
        setTimeout(() => {
            gsap.to(notification, {
                opacity: 0,
                y: -50,
                duration: 0.3,
                ease: "power2.in",
                onComplete: () => {
                    notification.remove();
                }
            });
        }, 5000);
    }
    
    showFormError() {
        // Create error notification
        const notification = document.createElement('div');
        notification.className = 'notification error';
        notification.innerHTML = `
            <i class="fas fa-exclamation-circle"></i>
            <span>يرجى تصحيح الأخطاء في النموذج قبل الإرسال.</span>
        `;
        
        document.body.appendChild(notification);
        
        // Animate notification
        gsap.fromTo(notification, {
            opacity: 0,
            y: -50
        }, {
            opacity: 1,
            y: 0,
            duration: 0.5,
            ease: "back.out(1.7)"
        });
        
        // Remove notification after 3 seconds
        setTimeout(() => {
            gsap.to(notification, {
                opacity: 0,
                y: -50,
                duration: 0.3,
                ease: "power2.in",
                onComplete: () => {
                    notification.remove();
                }
            });
        }, 3000);
    }
}

// ===== GLOBAL FUNCTIONS =====
function openCertificate(certificatePath) {
    const certificatesSystem = new EnhancedCertificates();
    certificatesSystem.openCertificate(certificatePath);
}

function closeCertificateModal() {
    const certificatesSystem = new EnhancedCertificates();
    certificatesSystem.closeCertificateModal();
}

// ===== ENHANCED INITIALIZATION =====
document.addEventListener('DOMContentLoaded', () => {
    // Initialize cursor system
    new EnhancedCursor();
    
    // Initialize loader
    new EnhancedLoader();
    
    // Initialize AOS
    if (typeof AOS !== 'undefined') {
        AOS.init({
            duration: 1000,
            easing: 'ease-out-cubic',
            once: true,
            offset: 100
        });
    }
    
    // Add notification styles
    const notificationStyles = `
        <style>
        .notification {
            position: fixed;
            top: 100px;
            right: 20px;
            background: rgba(255, 255, 255, 0.1);
            backdrop-filter: blur(20px);
            border: 1px solid rgba(255, 255, 255, 0.2);
            border-radius: 15px;
            padding: 1rem 1.5rem;
            color: white;
            display: flex;
            align-items: center;
            gap: 0.5rem;
            z-index: 10000;
            max-width: 400px;
            box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);
        }
        
        .notification.success {
            border-left: 4px solid #28a745;
        }
        
        .notification.error {
            border-left: 4px solid #dc3545;
        }
        
        .notification i {
            font-size: 1.2rem;
        }
        
        .notification.success i {
            color: #28a745;
        }
        
        .notification.error i {
            color: #dc3545;
        }
        </style>
    `;
    
    document.head.insertAdjacentHTML('beforeend', notificationStyles);
});

// ===== ENHANCED PERFORMANCE OPTIMIZATIONS =====
// Debounce function for performance
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Throttle function for scroll events
function throttle(func, limit) {
    let inThrottle;
    return function() {
        const args = arguments;
        const context = this;
        if (!inThrottle) {
            func.apply(context, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    }
}

// Enhanced scroll performance
const optimizedScrollHandler = throttle(() => {
    // Handle scroll-based animations here
}, 16); // ~60fps

window.addEventListener('scroll', optimizedScrollHandler);

// Enhanced resize performance
const optimizedResizeHandler = debounce(() => {
    // Handle resize-based updates here
    ScrollTrigger.refresh();
}, 250);

window.addEventListener('resize', optimizedResizeHandler);

