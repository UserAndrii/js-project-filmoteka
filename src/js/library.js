import { Notiflix } from 'notiflix';
import { alternativePoster, API_URL_IMG } from './main-gallery';
import { saveLocal, loadLocal, removeLocal, clearLocal } from './localStorage';

const libRefs = {
  libraryBtn: document.querySelector('.btn_library'),
  // назва класу gallery--library може бути змінена
  library: document.querySelector('.gallery'),    // -- > клас gallery--library був змінений на gallery
  // кнопки watchBtn та queueBtn додані та закоментовані в index.html
  watchBtn: document.querySelector('.btn-watched'),
  queueBtn: document.querySelector('.btn-queue'),
  // для позиціонування кнопок watched та queue  (O)
  heroWrapper: document.querySelector('.hero__wrapper'),
  heroBtnLibrary: document.querySelector('.hero__btn-library'),
  homeBtn: document.querySelector('.btn-home'),
};

// Автоматично створюється клас is hidden (O)
// libRefs.watchBtn.classList.add('is-hidden');
// libRefs.queueBtn.classList.add('is-hidden');

libRefs.libraryBtn.addEventListener('click', onLibraryBtnClick);

function onLibraryBtnClick() {
  libRefs.library.innerHTML = '';
  // libRefs.watchBtn.classList.remove('is-hidden');
  // libRefs.queueBtn.classList.remove('is-hidden');

  // Робить кнопку home білою
  libRefs.homeBtn.style.backgroundColor = '#fff';
  libRefs.homeBtn.style.color = '#000';

  // Робить кнопку library чорною
  libRefs.libraryBtn.style.backgroundColor = '#000';
  libRefs.libraryBtn.style.color = '#fff';

  // Реалізує появу кнопок watched та queue 
  libRefs.heroBtnLibrary.style.display = 'block'

  // Надає кнопкам watched та queue стилі
  libRefs.watchBtn.classList.add('btn-watched--active');
  libRefs.queueBtn.classList.remove('btn-queue--active');

  // Перевірка на наявність доданих фільмів
  
  // Якщо зайшов перший раз у бібліотеку без ключа watched в localStorage
  if (!localStorage.getItem('watched')) {
    console.log('Спрацювало');
    localStorage.setItem("watched", '[]');
  };
  
  // Перевірка, чи пустий масив
  if (JSON.parse(localStorage.getItem('watched')).length !== 0) {
    console.log('Присутні елементи');
    document.querySelector('.empty-page').style.display = 'none';
    return renderWatchedMovies();
  } else {
    console.log('Масив пустий');
    return document.querySelector('.empty-page').style.display = 'block';
  };
};

libRefs.homeBtn.addEventListener('click', clearMyLibMarUp);

function clearMyLibMarUp() {
  return document.querySelector('.empty-page').style.display= 'none';
}

libRefs.watchBtn.addEventListener('click', () => {
  //   класс 'is-active' може буте змінений відповідно до загального css
  libRefs.queueBtn.classList.remove('is-active');
  libRefs.watchBtn.classList.add('is-active');
  // renderWatchedMovies();

  // Зміна стилів кнопок

  libRefs.watchBtn.classList.add('btn-watched--active');
  libRefs.queueBtn.classList.remove('btn-queue--active');

  // Перевірка на наявність доданих фільмів

  // Якщо зайшов перший раз у бібліотеку без ключа watched в localStorage

  if (!localStorage.getItem('watched')) {
    localStorage.setItem("watched", '[]');
  };
  
  // Перевірка, чи пустий масив
  if (JSON.parse(localStorage.getItem('watched')).length !== 0) {
    document.querySelector('.empty-page').style.display = 'none';
    return renderWatchedMovies();
  } else {
    libRefs.library.innerHTML = '';
    return document.querySelector('.empty-page').style.display = 'block';
  };
});

libRefs.queueBtn.addEventListener('click', () => {
  //   класс 'is-active' може буте змінений відповідно до загального css
  libRefs.watchBtn.classList.remove('is-active');
  libRefs.queueBtn.classList.add('is-active');
  // renderQueueMovies();

  // Зміна стилів кнопок

  libRefs.watchBtn.classList.remove('btn-watched--active');
  libRefs.queueBtn.classList.add('btn-queue--active');

  // Перевірка на наявність доданих фільмів

  // Якщо зайшов перший раз у бібліотеку без ключа queue в localStorage
  if (!localStorage.getItem('queue')) {
    localStorage.setItem("queue", '[]');
  };
  
  // Перевірка, чи пустий масив
  if (JSON.parse(localStorage.getItem('queue')).length !== 0) {
    document.querySelector('.empty-page').style.display = 'none';
    return renderQueueMovies();
  } else {
    libRefs.library.innerHTML = '';
    return document.querySelector('.empty-page').style.display = 'block';
  };
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
  // очищує контейнер
  libRefs.library.innerHTML = '';
  //рендер галереї фільмів
  const markup = data
    .map(
      ({ id, poster_path, title, genres, release_date, vote_average }) => {
        let year = release_date.substring(0, 4);

        let genreNames = [];
        for (let i = 0; i < genres.length; i++) {
          genreNames.push(genres[i].name);
        };
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
              id="${id}"
            />
            <h2 class="movie-card__name" id="${id}">${title}</h2>
            <p class="movie-card__text" id="${id}">
              ${genreNames} | ${year}
              <span class="movie-card__box">
                <span class="movie-card__average">${vote_average.toFixed(1)}</span>
              </span>
            </p>
          </li>
          `;
        }
      }
    )
    .join('');

  libRefs.library.innerHTML = markup;
}

export function addToWatchedToLocalStorage(data) {
  let localStorageItem = loadLocal('watched') || [];
  // if (localStorageItem.find(watched => watched.id === id)) return;
  localStorageItem.push(data.data);
  saveLocal('watched', localStorageItem);
  // renderWatchedMovies();
}

export function addToQueueToLocalStorage(data) {

  let localStorageItem = loadLocal('queue') || [];
  // if (localStorageItem.find(queue => queue.id === id)) return;
  localStorageItem.push(data.data);
  saveLocal('queue', localStorageItem);
  // renderQueueMovies();
}


// export function removeFromWatchedFromToLocalStorage() {
//   let localStorageItem = loadLocal('watched');
//   const movieId = (localStorageItem.find(watched => watched.id === id));
//   removeLocal('watched', movieId);
// }

// export function removeFromQueueFromLocalStorage() {
//   let localStorageItem = loadLocal('queue');
//   const movieId = (localStorageItem.find(queue => queue.id === id));
//   removeLocal('queue', movieId);
// }

// libRefs.library.addEventListener('click', (e) => {
  
//   if (e.target.nodeName !== 'IMG') { 
//     return;
//   }

//   console.log('Цей фільм вже доданий, видаляєм...');
//   console.log('ID фільму: ', e.target.id);
  
//   const films = JSON.parse(localStorage.getItem('watched'));
//   console.log('film: ', films);

//   const filteredFilms = films.filter(filmEl => filmEl.id !== Number(e.target.id));
//   console.log('filteredFilm: ', filteredFilms);

//   localStorage.setItem('watched', JSON.stringify(filteredFilms));
//   renderWatchedMovies();
// })