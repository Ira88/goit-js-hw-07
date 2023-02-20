import { galleryItems } from './gallery-items.js';
// Change code below this line
const gallery = document.querySelector(".gallery");
const usage = galleryItems.map(({preview, original, description}) => {
return `<li class="gallery__item">
<a class="gallery__item" href="${original}">
  <img class="gallery__image" src="${preview}" 
  alt="${description}" />
</a>
</li>`
}).join('');
gallery.insertAdjacentHTML("beforeend", usage);
new SimpleLightbox('.gallery a', {
    captionDelay: 250,
    captionPosition: 'bottom',
});
console.log(galleryItems);
