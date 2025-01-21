document.addEventListener('DOMContentLoaded', function() {

    // Optional: Add click tracking for buttons
    const hireBtn = document.querySelector('.hire-btn');
    const cvBtn = document.querySelector('.cv-btn');

    hireBtn.addEventListener('click', function() {
        console.log('Hire Me button clicked');
    });

    cvBtn.addEventListener('click', function() {
        console.log('Download CV button clicked');
    });
});
