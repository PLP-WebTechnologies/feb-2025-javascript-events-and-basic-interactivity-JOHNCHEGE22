// Button Click Event
const colorButton = document.getElementById('colorButton');
colorButton.addEventListener('click', () => {
    const colors = ['#ff4081', '#00e676', '#3f51b5', '#ffeb3b'];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    colorButton.style.backgroundColor = randomColor;
    colorButton.textContent = 'Color Changed!';
});

// Secret Action on Double-Click
const secretButton = document.getElementById('secretButton');
secretButton.addEventListener('dblclick', () => {
    secretButton.classList.add('secret-active');
    secretButton.textContent = 'Secret Revealed!';
    setTimeout(() => {
        secretButton.classList.remove('secret-active');
        secretButton.textContent = 'Double-Click for Secret';
    }, 1000);
});

// Long Press Detection
let pressTimer;
const longPressButton = document.getElementById('longPressButton');
longPressButton.addEventListener('mousedown', () => {
    pressTimer = setTimeout(() => {
        longPressButton.textContent = 'Long Press Detected!';
        longPressButton.style.backgroundColor = '#ff5722';
    }, 1000);
});
longPressButton.addEventListener('mouseup', () => {
    clearTimeout(pressTimer);
    longPressButton.textContent = 'Hold Me (Long Press)';
    longPressButton.style.backgroundColor = '#6200ea';
});
longPressButton.addEventListener('mouseleave', () => {
    clearTimeout(pressTimer);
});

// Slideshow Functionality
let currentSlide = 0;
const slides = document.querySelectorAll('.slide');
const prevButton = document.querySelector('.prev');
const nextButton = document.querySelector('.next');

function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.classList.toggle('active', i === index);
    });
}

prevButton.addEventListener('click', () => {
    currentSlide = (currentSlide - 1 + slides.length) % slides.length;
    showSlide(currentSlide);
});

nextButton.addEventListener('click', () => {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
});

// Tabs Functionality
const tabButtons = document.querySelectorAll('.tab-button');
const tabContents = document.querySelectorAll('.tab-content');

tabButtons.forEach(button => {
    button.addEventListener('click', () => {
        tabButtons.forEach(btn => btn.classList.remove('active'));
        tabContents.forEach(content => content.style.display = 'none');
        
        button.classList.add('active');
        document.getElementById(button.dataset.tab).style.display = 'block';
    });
});

// Accordion Functionality
const accordionButtons = document.querySelectorAll('.accordion-button');
accordionButtons.forEach(button => {
    button.addEventListener('click', () => {
        const content = button.nextElementSibling;
        content.classList.toggle('active');
    });
});

// Form Validation
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');
const submitButton = document.getElementById('submitForm');

function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

function validatePassword(password) {
    return password.length >= 8;
}

function showError(input, message) {
    const errorElement = input.nextElementSibling;
    errorElement.textContent = message;
}

emailInput.addEventListener('input', () => {
    if (!validateEmail(emailInput.value)) {
        showError(emailInput, 'Please enter a valid email address');
    } else {
        showError(emailInput, '');
    }
});

passwordInput.addEventListener('input', () => {
    if (!validatePassword(passwordInput.value)) {
        showError(passwordInput, 'Password must be at least 8 characters long');
    } else {
        showError(passwordInput, '');
    }
});

submitButton.addEventListener('click', (e) => {
    e.preventDefault();
    if (validateEmail(emailInput.value) && validatePassword(passwordInput.value)) {
        alert('Form submitted successfully!');
        emailInput.value = '';
        passwordInput.value = '';
        document.querySelectorAll('.error-message').forEach(el => el.textContent = '');
    } else {
        alert('Please fix the errors in the form');
    }
});

// Keypress Detection
document.addEventListener('keydown', (e) => {
    const keyOutput = document.getElementById('keyOutput');
    keyOutput.textContent = `You pressed: ${e.key}`;
    keyOutput.style.color = `#${Math.floor(Math.random()*16777215).toString(16)}`;
});

