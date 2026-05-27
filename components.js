// ============ EXPANDABLE COMPONENT ============
class ExpandableSection {
    constructor() {
        this.init();
    }

    init() {
        const expandables = document.querySelectorAll('.expandable-header');
        expandables.forEach(header => {
            header.addEventListener('click', () => this.toggle(header));
        });
    }

    toggle(header) {
        const content = header.nextElementSibling;
        const icon = header.querySelector('.expand-icon');
        
        content.classList.toggle('active');
        icon.style.transform = content.classList.contains('active') 
            ? 'rotate(180deg)' 
            : 'rotate(0deg)';
    }
}

// ============ SERVICE CARD EXPANDER ============
class ServiceCardExpander {
    constructor() {
        this.init();
    }

    init() {
        const cards = document.querySelectorAll('.card');
        cards.forEach(card => {
            card.addEventListener('click', () => this.toggleDetails(card));
        });
    }

    toggleDetails(card) {
        const details = card.querySelector('.card-details');
        if (details) {
            details.classList.toggle('active');
        }
    }
}

// ============ HERO ANIMATION ============
class HeroAnimation {
    constructor() {
        this.init();
    }

    init() {
        window.addEventListener('scroll', () => this.handleScroll());
    }

    handleScroll() {
        const hero = document.querySelector('.hero');
        if (hero) {
            const scrolled = window.pageYOffset;
            hero.style.backgroundPosition = `0% ${scrolled * 0.5}px`;
        }
    }
}

// ============ SCROLL ANIMATIONS ============
class ScrollAnimations {
    constructor() {
        this.init();
    }

    init() {
        window.addEventListener('scroll', () => this.handleScroll());
    }

    handleScroll() {
        const elements = document.querySelectorAll('.card, .expandable, .image-placeholder');
        elements.forEach(element => {
            const rect = element.getBoundingClientRect();
            if (rect.top < window.innerHeight * 0.8) {
                element.style.opacity = '1';
                element.style.transform = 'translateY(0)';
            }
        });
    }
}

// ============ GALLERY SCROLL ============
class GalleryScroll {
    constructor() {
        this.init();
    }

    init() {
        const gallery = document.querySelector('.gallery-strip');
        if (gallery) {
            gallery.addEventListener('wheel', (e) => this.handleWheel(e));
            gallery.addEventListener('keydown', (e) => this.handleKeyboard(e));
        }
    }

    handleWheel(e) {
        e.preventDefault();
        const gallery = e.target.closest('.gallery-strip');
        gallery.scrollLeft += e.deltaY;
    }

    handleKeyboard(e) {
        const gallery = e.target.closest('.gallery-strip');
        if (e.key === 'ArrowLeft') gallery.scrollLeft -= 300;
        if (e.key === 'ArrowRight') gallery.scrollLeft += 300;
    }
}

// ============ FORM INTERACTION ============
class FormInteraction {
    constructor() {
        this.init();
    }

    init() {
        const buttons = document.querySelectorAll('.btn-primary, .btn-secondary, .cta-button');
        buttons.forEach(button => {
            button.addEventListener('click', (e) => this.rippleEffect(e));
        });
    }

    rippleEffect(e) {
        const button = e.target;
        const ripple = document.createElement('span');
        const rect = button.getBoundingClientRect();
        const size = Math.max(rect.width, rect.height);
        const x = e.clientX - rect.left - size / 2;
        const y = e.clientY - rect.top - size / 2;

        ripple.style.width = ripple.style.height = size + 'px';
        ripple.style.left = x + 'px';
        ripple.style.top = y + 'px';
        ripple.classList.add('ripple');

        button.appendChild(ripple);
        setTimeout(() => ripple.remove(), 600);
    }
}

// ============ MOBILE MENU ============
class MobileMenu {
    constructor() {
        this.init();
    }

    init() {
        const hamburger = document.querySelector('.hamburger');
        const navMenu = document.querySelector('.nav-menu');
        
        if (hamburger) {
            hamburger.addEventListener('click', () => this.toggle());
        }
    }

    toggle() {
        const navMenu = document.querySelector('.nav-menu');
        if (navMenu) {
            navMenu.classList.toggle('active');
        }
    }
}

// ============ SMOOTH SCROLL ============
class SmoothScroll {
    constructor() {
        this.init();
    }

    init() {
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', (e) => this.handleClick(e));
        });
    }

    handleClick(e) {
        e.preventDefault();
        const href = e.target.getAttribute('href');
        const element = document.querySelector(href);
        
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    }
}

// ============ ACCESSIBILITY ============
class Accessibility {
    constructor() {
        this.init();
    }

    init() {
        this.addAriaLabels();
        this.handleKeyboardNav();
    }

    addAriaLabels() {
        document.querySelectorAll('.btn-primary, .btn-secondary, .cta-button').forEach(btn => {
            if (!btn.getAttribute('aria-label')) {
                btn.setAttribute('aria-label', btn.textContent);
            }
        });
    }

    handleKeyboardNav() {
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape') {
                const navMenu = document.querySelector('.nav-menu');
                if (navMenu) navMenu.classList.remove('active');
            }
        });
    }
}

// ============ INITIALIZE ALL COMPONENTS ============
document.addEventListener('DOMContentLoaded', () => {
    new ExpandableSection();
    new ServiceCardExpander();
    new HeroAnimation();
    new ScrollAnimations();
    new GalleryScroll();
    new FormInteraction();
    new MobileMenu();
    new SmoothScroll();
    new Accessibility();
});