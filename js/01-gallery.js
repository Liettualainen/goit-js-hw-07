import { galleryItems } from './gallery-items.js';
// Change code below this line
// console.log(galleryItems);

const imagesContainer = document.querySelector(`.gallery`);
const imagesMarkup = createImgCardMarkup(galleryItems);

imagesContainer.insertAdjacentHTML('beforeend', imagesMarkup);
imagesContainer.addEventListener('click', onImageContainerClick);

function createImgCardMarkup(galleryItems) {     
return galleryItems.map(({preview, original, description}) => {
  return `<div class = "gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</div>`;}).join('');
}
///-----Modal window -----

function onImageContainerClick(evt) {
  evt.preventDefault();
if (!evt.target.nodeName === 'img'){
    return;
  }

const onActiveImage = evt.target.getAttribute('data-source')

const instance = basicLightbox.create(`
<img src ="${onActiveImage}">)`)
instance.show()

imagesContainer.addEventListener('keydown', evt => {
  if (evt.code === 'Escape') {
    instance.close()
  }
})
}


