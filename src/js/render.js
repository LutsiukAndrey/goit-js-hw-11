import { refs } from './refs';

import 'simplelightbox/dist/simple-lightbox.min.css';
export const renderContent = data => {
  const markup = data.hits
    .map(
      ({
        likes,
        webformatURL,
        comments,
        views,
        downloads,
        tags,
        largeImageURL,
      }) => {
        return `<div class="photo-card">
        <a class="gallery__item" href="${webformatURL}">
    <img src="${webformatURL}" alt="${tags}" loading="lazy" width = '380' height = '280' />
    </a>
    <div class="info">
      <p class="info-item">
        <b>Likes 
        ${likes}</b>
      </p>
      <p class="info-item">
        <b>Views 
        ${views}</b>
      </p>
      <p class="info-item">
        <b>Comments 
        ${comments}</b>
      </p>
      <p class="info-item">
        <b>Downloads 
        ${downloads}</b>
      </p>
    </div>
  </div>`;
      }
    )
    .join('');

  refs.gallery.insertAdjacentHTML('beforeend', markup);
};
