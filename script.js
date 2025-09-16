// Trend Vision One Platform Landing Page JavaScript

// Dropdown functionality
document.addEventListener('DOMContentLoaded', function() {
    const dropdowns = document.querySelectorAll('.dropdown');
    
    dropdowns.forEach(dropdown => {
        const trigger = dropdown.querySelector('.dropdown-trigger');
        
        trigger.addEventListener('click', function(e) {
            e.preventDefault();
            e.stopPropagation();
            
            // Close other dropdowns
            dropdowns.forEach(otherDropdown => {
                if (otherDropdown !== dropdown) {
                    otherDropdown.classList.remove('active');
                }
            });
            
            // Toggle current dropdown
            dropdown.classList.toggle('active');
        });
    });
    
    // Close dropdowns when clicking outside
    document.addEventListener('click', function(e) {
        if (!e.target.closest('.dropdown')) {
            dropdowns.forEach(dropdown => {
                dropdown.classList.remove('active');
            });
        }
    });
    
    // Handle dropdown links
    document.querySelectorAll('.dropdown-column a').forEach(link => {
        link.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            
            if (href.startsWith('#')) {
                e.preventDefault();
                showComingSoon(this.textContent.trim());
            }
            
            // Close dropdown after click
            dropdowns.forEach(dropdown => {
                dropdown.classList.remove('active');
            });
        });
    });
});

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        
        if (href === '#' || href.startsWith('#') && document.querySelector(href)) {
            e.preventDefault();
            const target = document.querySelector(href);
            
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        }
    });
});

// Search input placeholder functionality
document.querySelector('.search-input')?.addEventListener('click', function() {
    showComingSoon('Search functionality');
});

// Mobile menu functionality
const mobileMenuButton = document.querySelector('.mobile-menu-button');
if (mobileMenuButton) {
    mobileMenuButton.addEventListener('click', function() {
        // For now, just show coming soon
        showComingSoon('Mobile menu');
    });
}

// Coming soon alert function
function showComingSoon(feature) {
    alert(`${feature} documentation is coming soon! 🚀\n\nCurrently available:\n• Endpoint Security Documentation\n• API Reference\n• Technical Support`);
}

// Intersection Observer for animations
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

// Observe elements for animation
document.querySelectorAll('.solution-card, .cta-card').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
});

// Add loading animation to hero
window.addEventListener('load', function() {
    const heroContent = document.querySelector('.hero-content');
    if (heroContent) {
        heroContent.style.opacity = '1';
        heroContent.style.transform = 'translateY(0)';
    }
});

// Handle solution card clicks
document.querySelectorAll('.solution-card').forEach(card => {
    card.addEventListener('click', function() {
        // This is handled by onclick attributes in HTML for simplicity
        // but could be moved here for better separation of concerns
    });
});

// Add hover effects for better interactivity
document.querySelectorAll('.solution-card').forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-8px)';
    });
    
    card.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0)';
    });
});

// Keyboard navigation for accessibility
document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
        // Close all dropdowns on Escape
        document.querySelectorAll('.dropdown').forEach(dropdown => {
            dropdown.classList.remove('active');
        });
    }
});

// Add focus management for dropdowns
document.querySelectorAll('.dropdown-trigger').forEach(trigger => {
    trigger.addEventListener('keydown', function(e) {
        if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            this.click();
        }
    });
});

// Performance: Lazy load animations
const lazyAnimationObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate');
            lazyAnimationObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.1 });

// Add scroll-triggered animations
document.querySelectorAll('.hero-feature').forEach((feature, index) => {
    feature.style.animationDelay = `${0.1 * index}s`;
    lazyAnimationObserver.observe(feature);
});

console.log('🚀 Trend Vision One Platform Landing Page loaded successfully!');
console.log('📚 Available documentation: Endpoint Security');
console.log('🔗 External links: API Reference, Training Hub, Technical Support');