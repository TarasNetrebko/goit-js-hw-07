import { galleryItems } from './gallery-items.js';
// Change code below this line
const gallery = document.querySelector(".gallery");

const addImages = () => {
    const adding = galleryItems.reduce((acc, el) => acc + `<div class="gallery__item">
  <a class="gallery__link" href="${el.original}">
    <img
      class="gallery__image"
      src="${el.preview}"
      data-source="${el.original}"
      alt="${el.description}"
    />
  </a>
</div>`, "");
    gallery.insertAdjacentHTML("beforeend", adding);
}
addImages();

gallery.addEventListener("click", urlExtractor);

function urlExtractor(e) {
    e.preventDefault();
    if (e.target.dataset.source) {
        const instance = basicLightbox.create(`
    <img src="${e.target.dataset.source}" width="800" height="600">
`)      
        instance.show() 
        gallery.addEventListener("keydown", closeModal);
        function closeModal(e) {
            if (e.key === "Escape") {
                instance.close()
                gallery.removeEventListener("keydown", closeModal);
            }
        }
    }   
    
}

