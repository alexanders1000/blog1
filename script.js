// Smooth scrolling for navigation links
document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll('.nav-link');
    const ctaButton = document.querySelector('.cta-button');
    const readMoreBtn = document.querySelector('.read-more-btn');
    
    // Handle navigation clicks
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            
            // For now, just highlight the clicked link
            navLinks.forEach(nl => nl.style.color = '#666');
            this.style.color = '#6366f1';
            
            // You can add actual scrolling to sections when they exist
            console.log(`Navigating to: ${targetId}`);
        });
    });
    
    // CTA Button functionality
    ctaButton.addEventListener('click', function() {
        // Scroll to featured post
        const featuredPost = document.querySelector('.featured-post');
        featuredPost.scrollIntoView({ 
            behavior: 'smooth',
            block: 'start'
        });
        
        // Add a subtle animation
        featuredPost.style.transform = 'scale(1.02)';
        setTimeout(() => {
            featuredPost.style.transform = 'scale(1)';
        }, 300);
    });
    
    // Read More Button functionality
    readMoreBtn.addEventListener('click', function() {
        // Simulate reading the full post
        alert('Full post coming soon! This would typically navigate to the complete blog post.');
        
        // Add click analytics or navigation logic here
        console.log('User clicked to read full post: How to Make £150+ for Free, Now');
    });
    
    // Add scroll effect to navbar
    let lastScrollTop = 0;
    const navbar = document.querySelector('.navbar');
    
    window.addEventListener('scroll', function() {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        
        if (scrollTop > lastScrollTop && scrollTop > 100) {
            // Scrolling down
            navbar.style.transform = 'translateY(-100%)';
        } else {
            // Scrolling up
            navbar.style.transform = 'translateY(0)';
        }
        
        lastScrollTop = scrollTop;
    });
    
    // Add transition to navbar
    navbar.style.transition = 'transform 0.3s ease-in-out';
    
    // Intersection Observer for post cards animation
    const postCards = document.querySelectorAll('.post-card');
    const featuredPost = document.querySelector('.featured-post');
    
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    // Initially hide and position post cards
    postCards.forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px)';
        card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(card);
    });
    
    // Featured post animation
    featuredPost.style.opacity = '0';
    featuredPost.style.transform = 'translateY(30px)';
    featuredPost.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
    observer.observe(featuredPost);
    
    // Add hover effects to buttons
    const buttons = document.querySelectorAll('button');
    buttons.forEach(button => {
        button.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-2px)';
        });
        
        button.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
    });
    
    // Simple newsletter signup simulation (you'd replace with real functionality)
    function simulateNewsletterSignup() {
        const email = prompt('Enter your email to stay updated with the latest financial tips:');
        if (email && email.includes('@')) {
            alert('Thanks for subscribing! You\'ll receive our latest posts and exclusive money-making tips.');
            console.log(`Newsletter signup: ${email}`);
        } else if (email) {
            alert('Please enter a valid email address.');
        }
    }
    
    // Add newsletter signup to CTA if needed
    // You can call simulateNewsletterSignup() from other elements
    
    // Simple analytics tracking simulation
    function trackEvent(eventName, element) {
        console.log(`Event: ${eventName}`, {
            element: element.tagName,
            timestamp: new Date().toISOString(),
            page: window.location.href
        });
    }
    
    // Track button clicks
    readMoreBtn.addEventListener('click', () => trackEvent('read_more_click', readMoreBtn));
    ctaButton.addEventListener('click', () => trackEvent('cta_click', ctaButton));
    
    // Add loading animation completion
    setTimeout(() => {
        document.body.classList.add('loaded');
    }, 100);
});

// Add some utility functions
function formatCurrency(amount, currency = '£') {
    return currency + amount.toFixed(2);
}

function calculateReadingTime(text) {
    const wordsPerMinute = 200;
    const words = text.split(' ').length;
    return Math.ceil(words / wordsPerMinute);
}

// Export functions if using modules
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        formatCurrency,
        calculateReadingTime
    };
}
