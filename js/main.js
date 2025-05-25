// Main JavaScript file for Frederik Schulz website

// Smooth scroll for navigation links
document.addEventListener('DOMContentLoaded', function() {
    // Rotating text animation
    const rotatingText = document.getElementById('rotating-text');
    if (rotatingText) {
        const words = ['AI', 'Data', 'Microbe', 'Virus'];
        const colors = ['#ff6b35', '#ff006e', '#00f5ff', '#ccff00']; // neon orange, pink, cyan, lime
        let currentIndex = 0;
        
        // Get the shape box element
        const shapeBox = rotatingText.closest('.shape-box');
        
        setInterval(() => {
            currentIndex = (currentIndex + 1) % words.length;
            rotatingText.textContent = words[currentIndex];
            
            // Change the background color of the shape box
            if (shapeBox) {
                shapeBox.style.backgroundColor = colors[currentIndex];
            }
        }, 2000); // Change word every 2 seconds
    }
    
    // Add smooth scrolling to all links
    const links = document.querySelectorAll('a[href^="#"]');
    
    links.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                targetSection.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
    
    // Add active state to navigation based on current page
    const currentLocation = location.pathname;
    const navLinks = document.querySelectorAll('.nav-item');
    
    navLinks.forEach(link => {
        if (link.getAttribute('href') === currentLocation) {
            link.classList.add('active');
        }
    });
    
    // Add intersection observer for fade-in animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries, observer) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);
    
    // Observe all cards and sections
    const elementsToObserve = document.querySelectorAll('.research-card, .link-card, .ai-card, .project-item');
    
    elementsToObserve.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
        observer.observe(el);
    });
    
    // Add hover effect to cards
    const cards = document.querySelectorAll('.link-card, .research-card, .ai-card');
    
    cards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translate(-2px, -2px)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translate(0, 0)';
        });
    });
});

// Console easter egg
console.log('%c Frederik Schulz, PhD ', 'background: #fa4b13; color: white; font-size: 24px; font-weight: bold; padding: 10px;');
console.log('%c Exploring the hidden diversity of life through AI and data science ', 'font-size: 14px; padding: 5px;'); 