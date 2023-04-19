import * as basicLightbox from 'basiclightbox';
import 'basiclightbox/dist/basicLightbox.min.css';

const sliderEl = document.querySelector('.swiper-wrapper');

const BASE_URL = 'https://api.themoviedb.org/3';
const KEY = '58645e23389326a2e8ed75695b9e1b79';

export async function fetchTrailerById(id) {
  const url = new URL(`${BASE_URL}/movie/${id}/videos`);
  url.searchParams.append('api_key', KEY);

  const response = await fetch(url);
  const data = await response.json();
  return data;
}

sliderEl.addEventListener('click', onLinkPlayClick);

export async function onLinkPlayClick(evt) {
  evt.preventDefault();

  if (evt.target.nodeName !== 'A') return;

  try {
    const { results } = await fetchTrailerById(evt.target.dataset.id);
    const { key } = results[results.length - 1];
    console.log(evt.target.dataset.id);

    const closeModal = e => {
      if (e.code === 'Escape') {
        instance.close();
      }
    };

    const instance = basicLightbox.create(
      `<iframe class="youtube-frame" width="800" height="400" src="https://www.youtube.com/embed/${key}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`,
      {
        onShow: () => {
          document.addEventListener('keydown', closeModal);
          document.body.classList.add('modal-open');
        },
        onClose: () => {
          document.removeEventListener('keydown', closeModal);
          document.body.classList.remove('modal-open');
        },
      }
    );

    instance.show();
  } catch (error) {
    console.error(error.message);
  }
}
