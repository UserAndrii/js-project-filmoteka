const API_KEY = '58645e23389326a2e8ed75695b9e1b79';
const axios = require('axios').default;

const filmId = 76341;

const refs = {
  modalCont: document.querySelector('.modal__container'),
};

async function getFilmData() {
  const url = `https://api.themoviedb.org/3/movie/${filmId}?api_key=${API_KEY}`;
  try {
    const response = await axios.get(url);
    console.log(response);
    return addModalMarcup(response);
  } catch (error) {
    console.error(error);
  }
}
getFilmData();

function addModalMarcup(data) {
  const content = `<div class="modal__img">
    <img src="https://image.tmdb.org/t/p/w500/${data.data.poster_path}" alt="${
    data.data.title
  }" width="500px"/>
  </div>
  <div class="modal__content">
    <h2 class="modal__title">${data.data.title}</h2>
    <ul class="charact__list">
      <li class="charact__item"><span>Vote / Votes</span>${Math.round10(
        data.data.vote_average,
        -1
      )}/${data.data.vote_count}</li>
      <li class="charact__item"><span>Popularity</span>${Math.round10(
        data.data.popularity,
        -1
      )}</li>
      <li class="charact__item"><span>Original Title</span>${
        data.data.original_title
      }</li>
      <li class="charact__item"><span>Genre</span>${data.data.title}</li>
    </ul>
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
  console.log(content);
  return refs.modalCont.insertAdjacentHTML('afterbegin', content);
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

// document.getElementById('btn-modal').addEventListener('click', function() {
//   document.getElementById('backdrop').classList.add('is-visible');
//   document.getElementById('modal').classList.add('is-visible');
// });

document.getElementById('close-btn').addEventListener('click', function () {
  document.getElementById('backdrop').classList.remove('is-visible');
  document.getElementById('modal').classList.remove('is-visible');
});
document.getElementById('backdrop').addEventListener('click', function () {
  document.getElementById('backdrop').classList.remove('is-visible');
  document.getElementById('modal').classList.remove('is-visible');
});

document.getElementById('btn-modal').addEventListener('click', function () {
  document.getElementById('overlay').classList.add('is-visible');
  document.getElementById('modal').classList.add('is-visible');
});

document.getElementById('close-btn').addEventListener('click', function () {
  document.getElementById('overlay').classList.remove('is-visible');
  document.getElementById('modal').classList.remove('is-visible');
});
document.getElementById('overlay').addEventListener('click', function () {
  document.getElementById('overlay').classList.remove('is-visible');
});
