import {
  addToWatchedToLocalStorage,
  addToQueueToLocalStorage,
} from './library';

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

let responseAdd = '';

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

document.getElementById('close-btn').addEventListener('click', function () {
  document.getElementById('overlay').classList.remove('is-visible');
  document.getElementById('modal').classList.remove('is-visible');
});

document.getElementById('overlay').addEventListener('click', function () {
  document.getElementById('overlay').classList.remove('is-visible');
  document.getElementById('modal').classList.remove('is-visible');
});

// function classTogle(element) {
//   if (element.classList.contains('is-hidden')) {
//     element.classList.remove('is-hidden');
//   } else {
//     element.classList.add('is-hidden');

// refs.modalBackdrop.addEventListener('click', function () {
//   classTogle(refs.modalBackdrop);
//   classTogle(refs.modal);
// });

function classTogle(element) {
  if (element.classList.contains('backdrop_is-hidden')) {
    element.classList.remove('backdrop_is-hidden');
  } else {
    element.classList.add('backdrop_is-hidden');
  }
}

async function getFilmData(filmId) {
  const url = `https://api.themoviedb.org/3/movie/${filmId}?api_key=${API_KEY}`;
  clearMarcup(refs.modalCont);
  try {
    const response = await axios.get(url);
    responseAdd = response;
    return addModalMarcup(response);
  } catch (error) {
    console.error(error);
  }
}

export function addModalMarcup(data) {
  const content = `
    <img
      class="modal__img"
      src="https://image.tmdb.org/t/p/w400/${data.data.poster_path}"
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
      </div>

      <div id="player-container"></div>
      <script src="https://www.youtube.com/player_api"></script>
    </div>
`;

  // console.log(content);
  setTimeout(addListener, 300);
  // setTimeout(removeListener, 300);

  return refs.modalCont.insertAdjacentHTML('afterbegin', content);
}

function addListener() {
  const addToWatchedBtn = document.querySelector('.watched-button');
  const addToQuequeBtn = document.querySelector('.queue-button');

  addToWatchedBtn.addEventListener('click', event => {
    event.currentTarget.textContent = 'Remove watched';
    event.currentTarget.disabled = true;
    addToWatchedToLocalStorage(responseAdd);
  });

  addToQuequeBtn.addEventListener('click', event => {
    event.currentTarget.textContent = 'Remove queue';
    event.currentTarget.disabled = true;
    addToQueueToLocalStorage(responseAdd);
  });
}

// function removeListener() {
//   const removeFromWatchedBtn = document.querySelector('.watched-button');
//   const removeFromQuequeBtn = document.querySelector('.queue-button');

//   removeFromWatchedBtn.addEventListener('click', event => {
//     event.currentTarget.textContent = 'Added to watched';
//     event.currentTarget.disabled = true;
//     removeFromWatchedFromToLocalStorage()});

//   removeFromQuequeBtn.addEventListener('click', event => {
//     event.currentTarget.textContent = 'Added to queue';
//     event.currentTarget.disabled = true;
//     removeFromQueueFromLocalStorage()});
// }

function clearMarcup(element) {
  element.innerHTML = '';
}

function onModalOpen(event) {
  // let filmId = event.target.id;
  // getFilmData(filmId);
  // classTogle(refs.modalBackdrop);
  // classTogle(refs.modal);

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

  // if ((string.length > 35) & (width >= 1280)) {
  //   return `${string.slice(0, 34)}...`;
  // }
  // if ((string.length > 25) & (width >= 768)) {
  //   return `${string.slice(0, 24)}...`;
  // }
  // if ((string.length > 20) & (width >= 320)) {
  //   return `${string.slice(0, 19)}...`;
  // }
  // return string;

  if ((string.length > 40) & (width >= 1280)) {
    return `${string.slice(0, 39)}...`;
  }
  if ((string.length > 30) & (width >= 768)) {
    return `${string.slice(0, 29)}...`;
  }
  if ((string.length > 20) & (width >= 320)) {
    return `${string.slice(0, 17)}...`;
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
