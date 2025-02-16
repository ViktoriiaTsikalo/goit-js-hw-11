import axios from 'axios';
import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

import { getImages } from './js/pixabay-api';
import { imagesRender } from './js/render-functions';

let lightbox = new SimpleLightbox('.gallery a', { 
    captionsData: 'alt',
    captionDelay: 250,
});

const refs = {
    formEl: document.querySelector('#search-images'),
    galleryEl: document.querySelector('.gallery'),
    loader: document.querySelector('.loader'),
};

refs.formEl.addEventListener('submit', e => {
    e.preventDefault();
    const userValue = e.target.elements.query.value.trim();

    refs.loader.style.display = 'block';
    refs.galleryEl.innerHTML = ''; 
    setTimeout(() => {
        getImages(userValue)
            .then(images => {
                if (!images) {
                    return;
                }
                const markup = images.map(imagesRender).join(''); 
                refs.galleryEl.insertAdjacentHTML('beforeend', markup);
                lightbox.refresh();
            })
            .catch(error => {
                console.error('Error fetching images:', error);
                iziToast.error({
                    message: 'Something went wrong. Please try again later.',
                    position: 'topRight',
                });
            })
            .finally(() => {
                refs.loader.style.display = 'none';
            });
    }, 1000);

    e.target.reset();
});

