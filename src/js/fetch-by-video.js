
import * as basicLightbox from 'basiclightbox';
import 'basiclightbox/dist/basicLightbox.min.css';

const BASE_URL = 'https://api.themoviedb.org/3';
const KEY = '58645e23389326a2e8ed75695b9e1b79';

 async function fetchTrailerById(trailerId) {
  const url = `${BASE_URL}/movie/${trailerId}/videos?api_key=${KEY}`;
  try {
    const response = await axios.get(url);
    return response.data.results[0];
  } catch (error) {
    console.error(error);
  }
}
const watchButtons = document.querySelectorAll('[data-modal-button="watch-trailer"]');
watchButtons.forEach(button => {
  button.addEventListener('click', async (event) => {
    const trailerId = button.dataset.modalTrailer;
    const trailer = await fetchTrailerById(trailerId);
   addTrailerToModal(trailer);
  });
});
export function addTrailerToModal(trailer) {
  const content = `
    <div class="modal__trailer">
      <iframe
        width="640px"
        height="360px"
        src="https://www.youtube.com/embed/${trailer.key}"
        frameborder="0"
        allowfullscreen
      ></iframe>
    </div>
  `;
  const instance = basicLightbox.create(content);

  const closeOnEsc = (event) => {
    if (event.keyCode === 27) {
      instance.close();
      window.removeEventListener('keydown', closeOnEsc);
    }
  };

  window.addEventListener('keydown', closeOnEsc);
  instance.show();
}
