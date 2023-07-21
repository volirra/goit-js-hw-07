import { galleryItems } from './gallery-items.js';
console.log(galleryItems);
// Change code below this line

const gallery = document.querySelector('.gallery');

const galleryList = galleryItems.map(({preview, original, description}) => `
    <li class="gallery__item">
      <a class="gallery__link" href="${original}">
        <img class="gallery__image" src="${preview}" alt="${description}" />
      </a>
    </li>`).join('');

gallery.insertAdjacentHTML('afterbegin', galleryList);

new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250
});