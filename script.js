// Intersection Observer for scroll animations
document.addEventListener("DOMContentLoaded", () => {
    
    // Select all feature cards for the fade-in animation
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                // Add a staggered delay based on index for grid items
                entry.target.style.animation = `fadeUp 0.6s ease-out ${index * 0.1}s forwards`;
                entry.target.style.opacity = '0'; // Starting state before animation
                
                // Stop observing once animated
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    const featureCards = document.querySelectorAll('.feature-card');
    featureCards.forEach(card => {
        // Initial setup to hide elements before scroll
        card.style.opacity = '0';
        observer.observe(card);
    });
});
