// Theme Toggle Functionality
const themeSwitch = document.getElementById('theme-switch');
const body = document.body;

// Check for saved theme in localStorage
const savedTheme = localStorage.getItem('theme');
if (savedTheme) {
    body.classList.add(savedTheme);
    themeSwitch.checked = savedTheme === 'dark-theme';
}

// Toggle theme on button click
themeSwitch.addEventListener('change', () => {
    if (themeSwitch.checked) {
        body.classList.remove('light-theme');
        body.classList.add('dark-theme');
        localStorage.setItem('theme', 'dark-theme');
    } else {
        body.classList.remove('dark-theme');
        body.classList.add('light-theme');
        localStorage.setItem('theme', 'light-theme');
    }
});

// Carousel Functionality
let currentIndex = 0;

function moveSlide(direction) {
    const carouselInner = document.querySelector('.carousel-inner');
    const totalItems = document.querySelectorAll('.carousel-item').length;

    currentIndex += direction;

    if (currentIndex < 0) {
        currentIndex = totalItems - 1;
    } else if (currentIndex >= totalItems) {
        currentIndex = 0;
    }

    const offset = -currentIndex * 100;
    carouselInner.style.transform = `translateX(${offset}%)`;
}

// Modal Functionality for Enlarged Images
const modal = document.getElementById('image-modal');
const modalImg = document.getElementById('modal-image');
const closeModal = document.querySelector('.close');

// Open modal when an image is clicked in Experience or Projects sections
document.querySelectorAll('.experience-image, .project-image').forEach(image => {
    image.addEventListener('click', () => {
        modal.style.display = 'block';
        modalImg.src = image.src;
    });
});


// Close modal when clicking outside the image
window.addEventListener('click', (e) => {
    if (e.target === modal) {
        modal.style.display = 'none';
    }
});