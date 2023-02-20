import { galleryItems } from './gallery-items.js';
// Change code below this line
const gallery = document.querySelector(".gallery");
const markup = galleryItems.map(({preview, original, description}) => {
return `<div class="gallery__item">
<li class="gallery__item">
<a class="gallery__item" href="${original}">
  <img class="gallery__image" src="${preview}" 
  alt="${description}" />
</a>
</li>
</div>`
}).join('');
gallery.insertAdjacentHTML("beforeend", markup);
new SimpleLightbox('.gallery a', {
    captionDelay: 250,
    captionPosition: 'bottom',
});
console.log(galleryItems);
