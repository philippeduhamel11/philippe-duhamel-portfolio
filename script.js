const fadeElements = document.querySelectorAll('.fade-in');

/* Reveal on load */

window.addEventListener('load', () => {

    fadeElements.forEach((element, index) => {

        setTimeout(() => {

            element.classList.add('visible');

        }, index * 120);

    });

});

/* LIGHTBOX */

const thumbs = document.querySelectorAll('.gallery-thumbs img');

const lightbox = document.querySelector('.lightbox');

const lightboxImg = document.querySelector('.lightbox img');
const lightboxVideo = document.querySelector('.lightbox video');

const galleryVideo = document.querySelector('.gallery-video video');

/* Images */

thumbs.forEach(img => {

    img.addEventListener('click', () => {

        lightbox.classList.add('active');

        lightboxImg.style.display = 'block';
        lightboxVideo.style.display = 'none';

        lightboxImg.src = img.src;

    });

});

/* Video */

if (galleryVideo) {

    galleryVideo.addEventListener('click', () => {

        lightbox.classList.add('active');

        lightboxImg.style.display = 'none';
        lightboxVideo.style.display = 'block';

        lightboxVideo.querySelector('source').src =
            galleryVideo.querySelector('source').src;

        lightboxVideo.load();

    });

}

/* Close */

if (lightbox) {

    lightbox.addEventListener('click', () => {

        lightbox.classList.remove('active');

        lightboxVideo.pause();

    });

}