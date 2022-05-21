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

gallery.addEventListener("click", urlExtractor);


function urlExtractor(e) {
    e.preventDefault();
    if (e.target.classList[0] === "gallery__image") {
        const lightbox = new SimpleLightbox(`.gallery a`, {captionsData: "alt", captionDelay: 250})
        lightbox.open("a");
    }
}