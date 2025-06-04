document.addEventListener('DOMContentLoaded', () => {
    const mobileMenuButton = document.getElementById('mobile-menu-button');
    const mobileMenu = document.getElementById('mobile-menu');

    if (mobileMenuButton && mobileMenu) {
        mobileMenuButton.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
        });
    }

    // Add any other interactive JavaScript here.
    // For example, for product add to cart, you'd likely have event listeners on each button.
    // Or for a hero carousel, form validations, etc.
});

 