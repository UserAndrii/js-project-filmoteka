import Notiflix from 'notiflix';
import { alternativePoster, API_URL_IMG } from './main-gallery';
import { saveLocal, loadLocal, removeLocal, clearLocal } from './localStorage';

const libRefs = {
  libraryBtn: document.querySelector('.btn_library'),
  library: document.querySelector('.gallery'),
  watchBtn: document.querySelector('.btn-watched'),
  queueBtn: document.querySelector('.btn-queue'),
  heroWrapper: document.querySelector('.hero__wrapper'),
  heroBtnLibrary: document.querySelector('.hero__btn-library'),
  homeBtn: document.querySelector('.btn-home'),
  audio: document.querySelector('#audio-play'),
  container: document.querySelector('.notiflix-position'),
};

libRefs.libraryBtn.addEventListener('click', onLibraryBtnClick);

function onLibraryBtnClick() {
  libRefs.watchBtn.setAttribute('data-watched', 'active');
  libRefs.library.innerHTML = '';
  libRefs.homeBtn.style.backgroundColor = '#fff';
  libRefs.homeBtn.style.color = '#000';
  libRefs.libraryBtn.style.backgroundColor = '#000';
  libRefs.libraryBtn.style.color = '#fff';
  libRefs.heroBtnLibrary.style.display = 'block';
  libRefs.watchBtn.classList.add('btn-watched--active');
  libRefs.queueBtn.classList.remove('btn-queue--active');

  if (!localStorage.getItem('watched')) {
    localStorage.setItem('watched', '[]');
  }

  if (JSON.parse(localStorage.getItem('watched')).length !== 0) {
    document.querySelector('.empty-page').style.display = 'none';
    libRefs.audio.play();
    Notiflix.Notify.failure('Enjoy watching your favorite movies!');
    libRefs.container.append(document.querySelector('#NotiflixNotifyWrap'));
    return renderWatchedMovies();
  } else {
    return (document.querySelector('.empty-page').style.display = 'block');
  }
}

libRefs.homeBtn.addEventListener('click', clearMyLibMarUp);

function clearMyLibMarUp() {
  return (document.querySelector('.empty-page').style.display = 'none');
}

libRefs.watchBtn.addEventListener('click', () => {
  libRefs.queueBtn.classList.remove('is-active');
  libRefs.watchBtn.classList.add('is-active');
  libRefs.queueBtn.removeAttribute('data-queue');
  libRefs.watchBtn.classList.add('btn-watched--active');
  libRefs.queueBtn.classList.remove('btn-queue--active');

  if (!localStorage.getItem('watched')) {
    localStorage.setItem('watched', '[]');
  }

  if (JSON.parse(localStorage.getItem('watched')).length !== 0) {
    document.querySelector('.empty-page').style.display = 'none';
    return renderWatchedMovies();
  } else {
    libRefs.library.innerHTML = '';
    return (document.querySelector('.empty-page').style.display = 'block');
  }
});

libRefs.queueBtn.addEventListener('click', () => {
  libRefs.queueBtn.setAttribute('data-queue', 'active');
  libRefs.watchBtn.removeAttribute('data-watched');
  libRefs.watchBtn.classList.remove('is-active');
  libRefs.queueBtn.classList.add('is-active');

  libRefs.watchBtn.classList.remove('btn-watched--active');
  libRefs.queueBtn.classList.add('btn-queue--active');

  if (!localStorage.getItem('queue')) {
    localStorage.setItem('queue', '[]');
  }

  if (JSON.parse(localStorage.getItem('queue')).length !== 0) {
    document.querySelector('.empty-page').style.display = 'none';
    return renderQueueMovies();
  } else {
    libRefs.library.innerHTML = '';
    return (document.querySelector('.empty-page').style.display = 'block');
  }
});

function renderWatchedMovies() {
  try {
    const watchedMovies = loadLocal('watched');

    getLibraryMovies(watchedMovies);
  } catch (error) {
    Notiflix.Notify.failure('Something went wrong, please try again');
  }
}

function renderQueueMovies() {
  try {
    const queueMovies = loadLocal('queue');

    getLibraryMovies(queueMovies);
  } catch (error) {
    console.log(error);
    Notiflix.Notify.failure('Something went wrong, please try again');
  }
}

function getLibraryMovies(data) {
  libRefs.library.innerHTML = '';
  const markup = data
    .map(({ id, poster_path, title, genres, release_date, vote_average }) => {
      let year = release_date.substring(0, 4);

      let genreNames = [];
      for (let i = 0; i < genres.length; i++) {
        genreNames.push(genres[i].name);
      }
      genreNames = genreNames.slice(0, 3).join(', ');

      if (title) {
        return `
          <li class="movie-card" id="${id}">
            <img
              class="movie-card__image"
              src="${
                poster_path ? API_URL_IMG + poster_path : alternativePoster
              }"
              alt="${title}"
              width="300"
              height="574"           
            />
            <h2 class="movie-card__name">${title}</h2>
            <p class="movie-card__text">
              ${genreNames} | ${year}
              <span class="movie-card__box">
                <span class="movie-card__average">${vote_average.toFixed(
                  1
                )}</span>
              </span>
            </p>
          </li>
          `;
      }
    })
    .join('');

  libRefs.library.innerHTML = markup;
}

export function addToWatchedToLocalStorage(data) {
  const watchedMovies = loadLocal('watched') || [];
  const isMovieExists = watchedMovies.some(movie => movie.id === data.data.id);
  if (!isMovieExists) {
    watchedMovies.push(data.data);
  }
  saveLocal('watched', watchedMovies);

  const watched = libRefs.watchBtn.hasAttribute('data-watched');
  if (watched) {
    renderWatchedMovies();
    if (isMovieExists.length !== 0) {
      document.querySelector('.empty-page').style.display = 'none';
    }
  }
}

export function addToQueueToLocalStorage(data) {
  const queueMovies = loadLocal('queue') || [];
  const isMovieExists = queueMovies.some(movie => movie.id === data.data.id);
  if (!isMovieExists) {
    queueMovies.push(data.data);
  }
  saveLocal('queue', queueMovies);

  const queue = libRefs.queueBtn.hasAttribute('data-queue');
  if (queue) {
    renderQueueMovies();
    if (isMovieExists.length !== 0) {
      document.querySelector('.empty-page').style.display = 'none';
    }
  }
}

export function removeFromWatchedFromLocalStorage(data) {
  const watchedMovies = loadLocal('watched');
  const updateWatchedMovies = watchedMovies
    ? watchedMovies.filter(movie => movie.id !== data.data.id)
    : [];
  saveLocal('watched', updateWatchedMovies);

  const watched = libRefs.watchBtn.hasAttribute('data-watched');
  if (watched) {
    renderWatchedMovies();
    if (updateWatchedMovies.length === 0) {
      document.querySelector('.empty-page').style.display = 'block';
    }
  }
}

export function removeFromQueueFromLocalStorage(data) {
  const queueMovies = loadLocal('queue') || [];
  const updateQueueMovies = queueMovies.filter(
    movie => movie.id !== data.data.id
  );
  saveLocal('queue', updateQueueMovies);

  const queue = libRefs.queueBtn.hasAttribute('data-queue');
  if (queue) {
    renderQueueMovies();
    if (updateQueueMovies.length === 0) {
      document.querySelector('.empty-page').style.display = 'block';
    }
  }
}
