// Mobile menu functionality
const mobileMenuBtn = document.getElementById('mobileMenuBtn');
const mobileNav = document.getElementById('mobileNav');
const menuIcon = document.getElementById('menuIcon');
const header = document.getElementById('header');

let isMenuOpen = false;

// Toggle mobile menu
mobileMenuBtn.addEventListener('click', () => {
    isMenuOpen = !isMenuOpen;
    
    if (isMenuOpen) {
        mobileNav.classList.add('active');
        menuIcon.className = 'fas fa-times';
    } else {
        mobileNav.classList.remove('active');
        menuIcon.className = 'fas fa-bars';
    }
});

// Close mobile menu when clicking on nav links
const mobileNavLinks = document.querySelectorAll('.nav-link-mobile');
mobileNavLinks.forEach(link => {
    link.addEventListener('click', () => {
        isMenuOpen = false;
        mobileNav.classList.remove('active');
        menuIcon.className = 'fas fa-bars';
    });
});

// Header scroll effect
window.addEventListener('scroll', () => {
    if (window.scrollY > 20) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});

// Smooth scrolling for navigation links
const allNavLinks = document.querySelectorAll('a[href^="#"]');
allNavLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        
        const targetId = link.getAttribute('href');
        const targetSection = document.querySelector(targetId);
        
        if (targetSection) {
            const headerHeight = header.offsetHeight;
            const targetPosition = targetSection.offsetTop - headerHeight;
            
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// Add hover effects to match cards
const matchCards = document.querySelectorAll('.match-card');
matchCards.forEach(card => {
    card.addEventListener('mouseenter', () => {
        card.style.transform = 'translateY(-4px)';
    });
    
    card.addEventListener('mouseleave', () => {
        card.style.transform = 'translateY(0)';
    });
});

// Add hover effects to team cards
const teamCards = document.querySelectorAll('.team-card');
teamCards.forEach(card => {
    card.addEventListener('mouseenter', () => {
        card.style.transform = 'translateY(-4px)';
    });
    
    card.addEventListener('mouseleave', () => {
        card.style.transform = 'translateY(0)';
    });
});

// Initialize page
document.addEventListener('DOMContentLoaded', () => {
    // Initialize scroll animations
    initScrollAnimations();
    
    // Add stagger animation classes to grid items
    addStaggerAnimations();
    
    console.log('ASPECT Esports website loaded successfully!');
});

// Scroll Animation System
function initScrollAnimations() {
    // Add animation classes to elements
    const elementsToAnimate = [
        { selector: '.section-title', class: 'animate-on-scroll fade-up' },
        { selector: '.match-card', class: 'animate-on-scroll fade-up' },
        { selector: '.team-card', class: 'animate-on-scroll scale-in' },
        { selector: '.footer-brand', class: 'animate-on-scroll fade-left' },
        { selector: '.footer-links', class: 'animate-on-scroll fade-right' }
    ];

    elementsToAnimate.forEach(({ selector, class: className }) => {
        const elements = document.querySelectorAll(selector);
        elements.forEach(el => {
            el.classList.add(...className.split(' '));
        });
    });

    // Create intersection observer
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate');
                // Optional: unobserve after animation to improve performance
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Observe all elements with animation classes
    const animatedElements = document.querySelectorAll('.animate-on-scroll');
    animatedElements.forEach(el => observer.observe(el));
}

// Add stagger animation delays to grid items
function addStaggerAnimations() {
    // Stagger match cards
    const matchCards = document.querySelectorAll('.match-card');
    matchCards.forEach((card, index) => {
        card.style.animationDelay = `${index * 0.1}s`;
    });

    // Stagger team cards
    const teamCards = document.querySelectorAll('.team-card');
    teamCards.forEach((card, index) => {
        card.style.animationDelay = `${index * 0.15}s`;
    });

    // Stagger navigation links
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach((link, index) => {
        link.style.animationDelay = `${index * 0.1}s`;
    });
}

// Enhanced parallax effect for hero background
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const parallaxElements = document.querySelectorAll('.bg-element');
    
    parallaxElements.forEach((element, index) => {
        const speed = 0.5 + (index * 0.2);
        const yPos = -(scrolled * speed);
        element.style.transform = `translateY(${yPos}px)`;
    });
    
    // Header scroll effect (existing code)
    if (window.scrollY > 20) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});