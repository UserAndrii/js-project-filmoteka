import * as basicLightbox from 'basiclightbox';
import 'basiclightbox/dist/basicLightbox.min.css';

const API_KEY = '58645e23389326a2e8ed75695b9e1b79';
const BASE_URL = 'https://api.themoviedb.org/3';
const SRC_TRAILER = 'https://www.youtube.com/embed/';

import { fetchTrailerById } from './api';
import { filmId } from './loading-into-modal';

const srcTrailer = 'https://www.youtube.com/embed/';
const trailerBtn = document.querySelector('.trailer-btn');

const closeModalHandler = e => {
  if (e.code === 'Escape') {
    modal.close();
  }
  window.removeEventListener('keydown', closeModalHandler);
};

trailerBtn.addEventListener('click', () => {
  openTrailer(filmId);
});

const modal = basicLightbox.create(`
  <iframe class="iframe-container" width="900" height="600" src="" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
<button class="close-modal__trailer">
     </button>`);
const iframeTrailer = modal.element().querySelector('iframe');

const modal2 = basicLightbox.create(`
    <iframe class="iframe-container" src="${srcTrailer}6DhiiFGk4_s" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      `);

export default function openTrailer(id) {
  fetchTrailerById(id)
    .then(data => {
      const key = data.results[0].key;

      iframeTrailer.src = srcTrailer + key;
      modal.show();

      const closeBtn = document.querySelector('.close-modal__trailer');
      closeBtn.addEventListener('click', closeModalHandler);
      window.addEventListener('keydown', closeModalHandler);
    })
    .catch(error => {
      modal2.show();
      console.log(error);
    });
}
