import { galleryItems } from './gallery-items.js';
// Change code below this line
const gallery = document.querySelector(".gallery");
const markup = galleryItems.map(({preview, original, description})=> {
return `<div class="gallery__item">
<a class="gallery__link" href="${original}">
  <img
    class="gallery__image"
    src="${preview}"
    data-source="${original}"
    alt="${description}"
  />
</a>
</div>`
}).join('');
gallery.insertAdjacentHTML("beforeend", markup);

document.addEventListener("click", (e) => {
    e.preventDefault();
    if (e.target.nodeName !== "IMG"){
        return;
    }
    const imgSelected = e.target.dataset.source;
    const template = basicLightbox.create(
        `<img src="${imgSelected}" width="800" height="600">`
        ,
        {
            onShow: () => {
                document.addEventListener("keydown", closeModal);
            },
            onClose: () => {
                document.removeEventListener("keydown", closeModal);
            },
        }
    );
    template.show();
    function closeModal(e) {
        if (e.code ==="Escape"){
            template.close();
        }
    }
});

