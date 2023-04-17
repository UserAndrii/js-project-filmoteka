import {
  addToWatchedToLocalStorage,
  addToQueueToLocalStorage,
  removeFromWatchedFromLocalStorage,
  removeFromQueueFromLocalStorage,
} from './library';
import { loadLocal } from './localStorage';

import {alternativePoster} from '../js/main-gallery';
const API_KEY = '58645e23389326a2e8ed75695b9e1b79';
const axios = require('axios').default;
let filmId;

const refs = {
  modalCont: document.querySelector('.modal__container'),
  galleryEl: document.querySelector('.gallery'),
  btnModalClose: document.querySelector('.close-btn'),
  modalBackdrop: document.querySelector('.backdrop'),
  modal: document.querySelector('.modal'),
};

refs.galleryEl.addEventListener('click', onModalOpen);

refs.btnModalClose.addEventListener('click', function () {
  classTogle(refs.modalBackdrop);
  // console.log('click btn');
});
refs.modalBackdrop.addEventListener('click', function (evt) {
  if (evt.target === refs.modalBackdrop) {
    classTogle(refs.modalBackdrop);
    // console.log('click backdrop');
  }
});

export function classTogle(element) {
  if (element.classList.contains('backdrop_is-hidden')) {
    document.body.classList.add('modal-open');
    element.classList.remove('backdrop_is-hidden');
  } else {
    element.classList.add('backdrop_is-hidden');
    document.body.classList.remove('modal-open');
  }
}

async function getFilmData(filmId) {
  const url = `https://api.themoviedb.org/3/movie/${filmId}?api_key=${API_KEY}`;
  clearMarcup(refs.modalCont);
  try {
    const response = await axios.get(url);
    return addModalMarcup(response);
  } catch (error) {
    console.error(error);
  }
}

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
import urlIcon from '../images/sprite.svg';

import {addTrailerToModal} from './fetch-by-video'
export function addModalMarcup(data) {
  const content = `
    <img
      class="modal__img"
      src="https://image.tmdb.org/t/p/w400/${data.data.poster_path||alternativePoster}"
      alt="${data.data.title}"
      width="375px"
    />
    <div class="modal__content">
      <h2 class="modal__title">${data.data.title}</h2>
      <div class="characteristics">
        <ul class="charact__list">
          <li class="charact__name">Vote / Votes</li>
          <li class="charact__name">Popularity</li>
          <li class="charact__name">Original Title</li>
          <li class="charact__name">Genre</li>
        </ul>
        <ul class="charact__list">
          <li class="charact__value">
            <span class="acsent"
              >${Math.round10(data.data.vote_average, -1)}</span
            >
            / <span>${data.data.vote_count}</span>
          </li>
          <li class="charact__value">
            ${Math.round10(data.data.popularity, -1)}
          </li>
          <li class="charact__value">
            ${trimString(data.data.original_title)}
          </li>
          <li class="charact__value">
            ${trimString(getGenres(data.data.genres))}
          </li>
        </ul>
      </div>
      <div class="modal__about">
        <p>ABOUT</p>
        <p class="about">${data.data.overview}</p>
      </div>
      <div class="modal__buttons">
        <button
          class="modal__button watched-button"
          type="button"
          data-modal-button="add-to-watched"
        >
          add to Watched
        </button>
        <button
          class="modal__button queue-button"
          type="button"
          data-modal-button="add-to-queue"
        >
          add to queue
        </button>
        <button
          class="modal__button trailer-button"
          type="button"
          data-modal-button="watch-trailer"
          data-modal-trailer="${data.data.id}"
        >
          Watch trailer
          <svg class="trailer-icons"  width="20" height="20">
        <use href="${urlIcon}#icon-play"></use>
      </svg>
        </button>
      </div>

      <div id="player-container"></div>
      <script src="https://www.youtube.com/player_api"></script>
    </div>
  `;

  refs.modalCont.insertAdjacentHTML('afterbegin', content);

  const watchTrailerButton = document.querySelector('[data-modal-button="watch-trailer"]');
  watchTrailerButton.addEventListener('click', async () => {
    const trailer = await fetchTrailerById(data.data.id);
    addTrailerToModal(trailer);
  });
}


function addListener() {

  setTimeout(() => {
    isWatchedMovieExists(data);
  }, 300);

  setTimeout(() => {
    isQueueMovieExists(data);
  }, 300);
 
  return refs.modalCont.insertAdjacentHTML('afterbegin', content);
}

function isWatchedMovieExists(data) {
  const addToWatchedButton = document.querySelector('.watched-button');
  const watchedMovies = loadLocal('watched') || [];
  const isMovieWatched = watchedMovies.some(movie => movie.id === data.data.id);
  addToWatchedButton.textContent = isMovieWatched ? 'Remove watched' : 'Add to watched';
  if(isMovieWatched) {
    removeListener(data);
  }
  if(!isMovieWatched) {
    addListener(data);
  } 
}

function isQueueMovieExists(data) {
  const addToQueueButton = document.querySelector('.queue-button');
  const queueMovies = loadLocal('queue') || [];
  const isMovieQueue = queueMovies.some(movie => movie.id === data.data.id);
  addToQueueButton.textContent = isMovieQueue ? 'Remove queue' : 'Add to queue';
  if(isMovieQueue) {
    removeListener(data);
  }
  if(!isMovieQueue) {
    addListener(data);
  } 
};

function addListener(data) {
  const addToWatchedBtn = document.querySelector('.watched-button');
  const addToQueueBtn = document.querySelector('.queue-button');

  addToWatchedBtn.addEventListener('click', event => {
    event.currentTarget.textContent = 'Remove watched';
    // event.currentTarget.disabled = true;
    addToWatchedToLocalStorage(data);
    removeListener(data);
  });

  addToQueueBtn.addEventListener('click', event => {
    event.currentTarget.textContent = 'Remove queue';
    // event.currentTarget.disabled = true;
    addToQueueToLocalStorage(data);
    removeListener(data);
  });
}

function removeListener(data) {
  const removeFromWatchedBtn = document.querySelector('.watched-button');
  const removeFromQueueBtn = document.querySelector('.queue-button');

  removeFromWatchedBtn.addEventListener('click', event => {
    event.currentTarget.textContent = 'Add to watched';
    // event.currentTarget.disabled = true;
    removeFromWatchedFromLocalStorage(data);
    addListener(data);
  });

  removeFromQueueBtn.addEventListener('click', event => {
    event.currentTarget.textContent = 'Add to queue';
    // event.currentTarget.disabled = true;
    removeFromQueueFromLocalStorage(data);
    addListener(data);
  });
}

function clearMarcup(element) {
  element.innerHTML = '';
}

function onModalOpen(event) {
  // console.log('click galery');
  filmId = event.target.id;
  if (filmId) {
    getFilmData(filmId);
    classTogle(refs.modalBackdrop);
    document.addEventListener('keydown', escEvt);
  }
}
// Округлення чисел

function decimalAdjust(type, value, exp) {
  if (typeof exp === 'undefined' || +exp === 0) {
    return Math[type](value);
  }
  value = +value;
  exp = +exp;
  if (isNaN(value) || !(typeof exp === 'number' && exp % 1 === 0)) {
    return NaN;
  }

  value = value.toString().split('e');
  value = Math[type](+(value[0] + 'e' + (value[1] ? +value[1] - exp : -exp)));

  value = value.toString().split('e');
  return +(value[0] + 'e' + (value[1] ? +value[1] + exp : exp));
}

if (!Math.round10) {
  Math.round10 = function (value, exp) {
    return decimalAdjust('round', value, exp);
  };
}

if (!Math.floor10) {
  Math.floor10 = function (value, exp) {
    return decimalAdjust('floor', value, exp);
  };
}

if (!Math.ceil10) {
  Math.ceil10 = function (value, exp) {
    return decimalAdjust('ceil', value, exp);
  };
}

function getGenres(genres) {
  let genresListArray = [];
  genres.forEach(item => {
    genresListArray.push(item.name);
  });
  return genresListArray.join(', ');
}

function trimString(string) {
  const width = window.innerWidth;
  if ((string.length > 40) & (width >= 1280)) {
    return `${string.slice(0, 39)}...`;
  }
  if ((string.length > 30) & (width >= 768)) {
    return `${string.slice(0, 29)}...`;
  }
  if ((string.length > 17) & (width >= 320)) {
    return `${string.slice(0, 16)}...`;
  }
  return string;
}

function escEvt(evt) {
  evt.preventDefault();
  if (evt.keyCode == 27 && refs.modal != null) {
    classTogle(refs.modalBackdrop);
    // console.log('Esc');
  }
  document.removeEventListener('keydown', escEvt);
}
