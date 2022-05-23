import { galleryItems } from './gallery-items.js';
// Change code below this line
const gallery = document.querySelector(".gallery");

const addImages = () => {
    const adding = galleryItems.reduce((acc, el) => acc + `<li><a class="gallery__link" href="${el.original}">
    <img
      class="gallery__image"
      src="${el.preview}"
      alt="${el.description}"
    />
  </a></li>`, "");
    gallery.insertAdjacentHTML("beforeend", adding);
}
    addImages();
    const lightbox = new SimpleLightbox(`.gallery a`, {captionsData: "alt", captionDelay: 250})