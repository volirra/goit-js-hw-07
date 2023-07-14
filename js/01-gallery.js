import { galleryItems } from './gallery-items.js';
console.log(galleryItems);
// Change code below this line
const gallery = document.querySelector('.gallery')

function createGalleryMarkup(items) {
	return items
	map((item) => <li class='gallery_item'>
		<a class='gallery_link' href='${item.original}'>
			<img class='gallery_image'
				src='${item_preview}'
				data-sourse='${item.original}'
				alt='${item.description}'
			/>
		</a>
	</li>).join('');
}
const addGalleryMarkup = createGalleryMarkup(galleryItems);
galleryEl.innerHTML = addGalleryMarkup;
galleryEl.addEventListener('click', onImageClick);

function onImageClick(evt) {
	blockStandardAction(evt);
	if (evt.target.nodeName !== 'IMG') {
		return;
	}
	const instance = basicLightbox.create(`
	    <img src='${evt.target.data.set.sourse}' width="800" height="600">
		`);
	instance.show();
	gallery.addEventListener('keydown', (evt) => {
		if (evt.code === 'Escape') {
			instance.close();
	}
})	
}

function blockStandardAction(evt) {
	evt.preventDefault();
}