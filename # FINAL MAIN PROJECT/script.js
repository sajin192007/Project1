// script.js

/* =========================================
LOGIN PANEL
========================================= */

const loginBtn = document.getElementById('loginBtn');
const closeLogin = document.getElementById('closeLogin');

const overlay = document.getElementById('overlay');
const loginPanel = document.getElementById('loginPanel');

loginBtn.addEventListener('click', (e) => {

    e.preventDefault();

    loginPanel.classList.add('active');
    overlay.classList.add('active');

    document.body.style.overflow = 'hidden';
});

function closePanel(){

    loginPanel.classList.remove('active');
    overlay.classList.remove('active');

    document.body.style.overflow = 'auto';
}

closeLogin.addEventListener('click', closePanel);

overlay.addEventListener('click', closePanel);

/* =========================================
MAGNETIC PRODUCT HOVER
========================================= */

const cards = document.querySelectorAll('.product-card');

cards.forEach(card => {

    card.addEventListener('mousemove', (e) => {

        const rect = card.getBoundingClientRect();

        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        const centerX = rect.width / 2;
        const centerY = rect.height / 2;

        const rotateX = ((y - centerY) / 20);
        const rotateY = ((centerX - x) / 20);

        card.style.transform = `
            perspective(1000px)
            rotateX(${rotateX}deg)
            rotateY(${rotateY}deg)
            translateY(-12px)
        `;
    });

    card.addEventListener('mouseleave', () => {

        card.style.transform = `
            perspective(1000px)
            rotateX(0)
            rotateY(0)
            translateY(0)
        `;
    });

});

/* =========================================
HERO PARALLAX
========================================= */

window.addEventListener('scroll', () => {

    const scrollY = window.scrollY;

    document.querySelector('.hero-content').style.transform =
    `translateY(${scrollY * 0.2}px)`;

});

/* =========================================
CART COUNTER
========================================= */

let cartCount = 0;

const cartCounter = document.querySelector('.cart-count');

const cartButtons =
document.querySelectorAll('.dark-btn');

cartButtons.forEach(btn => {

    btn.addEventListener('click', () => {

        cartCount++;

        cartCounter.innerHTML = cartCount;

        btn.innerHTML = 'Added';

        setTimeout(() => {

            btn.innerHTML = 'Add To Cart';

        }, 1000);

    });

});
/* =========================================
ABOUT SECTION PARALLAX
ADD BELOW EXISTING JS
========================================= */

const aboutImage =
document.querySelector('.about-image-wrapper img');

window.addEventListener('scroll', () => {

    const scrollY = window.scrollY;

    if(aboutImage){

        aboutImage.style.transform =
        `scale(1.05) translateY(${scrollY * 0.03}px)`;
    }

});

/* =========================================
MAGNETIC ABOUT BUTTONS
========================================= */

const aboutButtons =
document.querySelectorAll('.about-btn');

aboutButtons.forEach(btn => {

    btn.addEventListener('mousemove', (e) => {

        const rect = btn.getBoundingClientRect();

        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        const moveX = (x - rect.width / 2) / 6;
        const moveY = (y - rect.height / 2) / 6;

        btn.style.transform =
        `translate(${moveX}px, ${moveY}px)`;

    });

    btn.addEventListener('mouseleave', () => {

        btn.style.transform =
        `translate(0px,0px)`;

    });

});/* =========================================
NAVBAR SCROLL ANIMATION
ADD BELOW EXISTING JS
========================================= */

const navbar =
document.querySelector('.navbar');

window.addEventListener('scroll', () => {

    if(window.scrollY > 50){

        navbar.style.height = '75px';

        navbar.style.boxShadow =
        '0 10px 40px rgba(0,0,0,0.06)';

        navbar.style.background =
        'rgba(255,255,255,0.82)';

    }

    else{

        navbar.style.height = '90px';

        navbar.style.boxShadow =
        'none';

        navbar.style.background =
        'rgba(255,255,255,0.75)';
    }

});

/* =========================================
MAGNETIC NAV LINKS
========================================= */

const navLinks =
document.querySelectorAll(
'.nav-right a, .categories a'
);

navLinks.forEach(link => {

    link.addEventListener('mousemove', (e) => {

        const rect = link.getBoundingClientRect();

        const x =
        e.clientX - rect.left - rect.width / 2;

        const y =
        e.clientY - rect.top - rect.height / 2;

        link.style.transform =
        `translate(${x * 0.12}px, ${y * 0.12}px)`;

    });

    link.addEventListener('mouseleave', () => {

        link.style.transform =
        'translate(0px,0px)';

    });

});

/* =========================================
MENU BUTTON ROTATION
========================================= */

const menuBtn =
document.querySelector('.menu-btn');

menuBtn.addEventListener('mouseenter', () => {

    menuBtn.style.transform =
    'rotate(180deg) scale(1.1)';
});

menuBtn.addEventListener('mouseleave', () => {

    menuBtn.style.transform =
    'rotate(0deg) scale(1)';
});
/* =========================================
PREMIUM SEARCH INTERACTIONS
ADD BELOW EXISTING JS
========================================= */

const searchBox =
document.querySelector('.search-box');

const searchInput =
document.querySelector('.search-box input');

const searchIcon =
document.querySelector('.search-box i');

/* Magnetic movement */

searchBox.addEventListener('mousemove', (e) => {

    const rect =
    searchBox.getBoundingClientRect();

    const x =
    e.clientX - rect.left - rect.width / 2;

    const y =
    e.clientY - rect.top - rect.height / 2;

    searchBox.style.transform =
    `translate(${x * 0.03}px, ${y * 0.03}px)`;

});

/* Reset */

searchBox.addEventListener('mouseleave', () => {

    searchBox.style.transform =
    'translate(0px,0px)';
});

/* Icon pulse when typing */

searchInput.addEventListener('input', () => {

    searchIcon.style.transform =
    'scale(1.25) rotate(15deg)';

    setTimeout(() => {

        searchIcon.style.transform =
        'scale(1) rotate(0deg)';

    }, 200);

});

/* Focus glow */

searchInput.addEventListener('focus', () => {

    searchBox.style.boxShadow =
    '0 15px 40px rgba(0,0,0,0.08)';

});

/* Remove glow */

searchInput.addEventListener('blur', () => {

    searchBox.style.boxShadow =
    'none';

});/* =========================================
SERVICES MAGNETIC HOVER
ADD BELOW EXISTING JS
========================================= */

const serviceCards =
document.querySelectorAll('.service-card');

serviceCards.forEach(card => {

    card.addEventListener('mousemove', (e) => {

        const rect =
        card.getBoundingClientRect();

        const x =
        e.clientX - rect.left;

        const y =
        e.clientY - rect.top;

        const centerX =
        rect.width / 2;

        const centerY =
        rect.height / 2;

        const rotateX =
        ((y - centerY) / 18);

        const rotateY =
        ((centerX - x) / 18);

        card.style.transform = `
            perspective(1000px)
            rotateX(${rotateX}deg)
            rotateY(${rotateY}deg)
            translateY(-12px)
        `;

    });

    card.addEventListener('mouseleave', () => {

        card.style.transform = `
            perspective(1000px)
            rotateX(0deg)
            rotateY(0deg)
            translateY(0px)
        `;

    });

});

/* =========================================
SERVICE ICON FLOAT
========================================= */

const serviceIcons =
document.querySelectorAll('.service-icon');

serviceIcons.forEach(icon => {

    icon.addEventListener('mouseenter', () => {

        icon.style.animation =
        'iconFloat 1.5s ease-in-out infinite';

    });

    icon.addEventListener('mouseleave', () => {

        icon.style.animation =
        'none';

    });

});

/* =========================================
ICON FLOAT KEYFRAME
========================================= */

const style =
document.createElement('style');

style.innerHTML = `

@keyframes iconFloat {

    0%{
        transform:translateY(0px);
    }

    50%{
        transform:translateY(-8px);
    }

    100%{
        transform:translateY(0px);
    }

}

`;

document.head.appendChild(style);
/* =========================================
PREMIUM PRODUCT CARD INTERACTIONS
========================================= */

const luxuryCards =
document.querySelectorAll('.luxury-product-card');

luxuryCards.forEach(card => {

    card.addEventListener('mousemove', (e) => {

        const rect =
        card.getBoundingClientRect();

        const x =
        e.clientX - rect.left;

        const y =
        e.clientY - rect.top;

        const centerX =
        rect.width / 2;

        const centerY =
        rect.height / 2;

        const rotateX =
        ((y - centerY) / 25);

        const rotateY =
        ((centerX - x) / 25);

        card.style.transform = `
            perspective(1200px)
            rotateX(${rotateX}deg)
            rotateY(${rotateY}deg)
            translateY(-15px)
        `;

    });

    card.addEventListener('mouseleave', () => {

        card.style.transform = `
            perspective(1200px)
            rotateX(0deg)
            rotateY(0deg)
            translateY(0px)
        `;

    });

});

/* =========================================
BUTTON RIPPLE EFFECT
========================================= */

const overlayButtons =
document.querySelectorAll('.luxury-overlay button');

overlayButtons.forEach(button => {

    button.addEventListener('mouseenter', () => {

        button.style.transform =
        'scale(1.03)';

    });

    button.addEventListener('mouseleave', () => {

        button.style.transform =
        'scale(1)';

    });

});
/* =========================================
PREMIUM FOOTER BRAND ANIMATION
========================================= */

const footerBrand =
document.querySelector('.footer-brand');

/* Magnetic movement */

footerBrand.addEventListener('mousemove', (e) => {

    const rect =
    footerBrand.getBoundingClientRect();

    const x =
    e.clientX - rect.left;

    const center =
    rect.width / 2;

    const move =
    (x - center) / 18;

    footerBrand.style.transform = `
        translateX(${move}px)
        scale(1.04)
    `;

});

/* Reset */

footerBrand.addEventListener('mouseleave', () => {

    footerBrand.style.transform =
    'translateX(0px) scale(1)';

});

/* =========================================
LETTER WAVE EFFECT
========================================= */

const letters =
footerBrand.textContent.split('');

footerBrand.innerHTML = '';

letters.forEach((letter, index) => {

    const span =
    document.createElement('span');

    span.textContent = letter;

    span.style.display = 'inline-block';

    span.style.transition =
    'transform 0.4s ease';

    span.style.animation =
    `footerWave 2s ease-in-out ${index * 0.1}s infinite`;

    footerBrand.appendChild(span);

});

/* =========================================
WAVE ANIMATION
========================================= */

const footerStyle =
document.createElement('style');

footerStyle.innerHTML = `

@keyframes footerWave {

    0%{
        transform:translateY(0px);
    }

    25%{
        transform:translateY(-10px);
    }

    50%{
        transform:translateY(0px);
    }

    75%{
        transform:translateY(6px);
    }

    100%{
        transform:translateY(0px);
    }

}

`;

document.head.appendChild(footerStyle);