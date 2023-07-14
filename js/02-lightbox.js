import { galleryItems } from './gallery-items.js';
console.log(galleryItems);
// Change code below this line

const lightbox = new SimpleLightbox('.gallery a', ;
  captionData: 'alt',
	captionDelay: 250
});
document.addEventListener('keyup', closeGallery);
function closeGallery(evt) {
	if (evt.code === 'Space') {
		Lightbox.close();
	}
}