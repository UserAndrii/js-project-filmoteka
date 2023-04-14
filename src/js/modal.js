const API_KEY = '58645e23389326a2e8ed75695b9e1b79';
const axios = require('axios').default;


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
  classTogle(refs.modal);
});
// refs.modalBackdrop.addEventListener('click', function () {
//   classTogle(refs.modalBackdrop);
//   classTogle(refs.modal);
// });

function classTogle(element) {
  if (element.classList.contains('is-hidden')) {
    element.classList.remove('is-hidden');
  } else {
    element.classList.add('is-hidden');
  }
}

async function getFilmData(filmId) {
  const url = `https://api.themoviedb.org/3/movie/${filmId}?api_key=${API_KEY}`;
  clearMarcup(refs.modalCont);
  try {
    const response = await axios.get(url);
    console.log(response);
    return addModalMarcup(response);
  } catch (error) {
    console.error(error);
  }
}

function addModalMarcup(data) {
  const content = `
  <img
  class="modal__img"
  src="https://image.tmdb.org/t/p/w500/${data.data.poster_path}"
  alt="${
data.data.title
}"
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
        <span class="acsent">${Math.round10( data.data.vote_average, -1 )}</span> / <span
          >${data.data.vote_count}</span
        >
      </li>
      <li class="charact__value">
        ${Math.round10( data.data.popularity, -1 )}
      </li>
      <li class="charact__value">${ data.data.original_title }</li>
      <li class="charact__value">${data.data.title}</li>
    </ul>
  </div>
  <div class="modal__about">
    <p>ABOUT</p>
    <p class="about">${data.data.overview}</p>
  </div>
  <div class="modal__buttons">
    <button
      class="modal__button"
      type="button"
      data-modal-button="add-to-watched"
    >
      add to Watched
    </button>
    <button
      class="modal__button"
      type="button"
      data-modal-button="add-to-queue"
    >
      add to queue
    </button>
  </div>
</div>
`;
  return refs.modalCont.insertAdjacentHTML('afterbegin', content);
}

function clearMarcup(element) {
  element.innerHTML = '';
}

function onModalOpen(event) {
  let filmId = event.target.id;
  getFilmData(filmId);
  classTogle(refs.modalBackdrop);
  classTogle(refs.modal);
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
