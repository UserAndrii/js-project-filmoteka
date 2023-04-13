import { Notiflix } from 'notiflix';
// import { themoviedbAPI } from './';
// import { fetchMovieById, renderMarkup } from './fetch-by-search';
import { saveLocal, loadLocal, removeLocal, clearLocal } from './localStorage';


const API_KEY = '58645e23389326a2e8ed75695b9e1b79';

const libRefs = {
    libraryBtn: document.querySelector('.btn_library'),
// назва класу gallery--library може бути змінена
    library: document.querySelector('.gallery--library'),
// кнопки watchBtn та queueBtn додані та закоментовані в index.html
    watchBtn: document.querySelector('.btn_watched'),
    queueBtn: document.querySelector('.btn_queue'),
};

libRefs.libraryBtn.addEventListener('click', onLibraryBtnClick);

function onLibraryBtnClick() {
    libRefs.watchBtn.classList.remove('is-hidden');
    libRefs.queueBtn.classList.remove('is-hidden');

// якщо немає доданих фільмів, то має з’явитися інформація про це:
// <h2>YOUR WATCHED-LIST OR QUEUE-LIST IS EMPTY...</h2>

};

// const themoviedbAPI = new ThemoviedbAPI();

libRefs.watchBtn.addEventListener('click', () => {
//   класс 'is-active' може буте змінений відповідно до загального css
  libRefs.queueBtn.classList.remove('is-active');
  libRefs.watchBtn.classList.add('is-active');
  renderWatchedMovies();
});

libRefs.queueBtn.addEventListener('click', () => {
//   класс 'is-active' може буте змінений відповідно до загального css
  libRefs.watchBtn.classList.remove('is-active');
  libRefs.queueBtn.classList.add('is-active');
  renderQueueMovies();
});

function renderWatchedMovies() {
  libRefs.library.innerHTML = '';
//  назва themoviedbAPI.watched може бути змінена в залежності від АРІ-файлу 
  const watchedMovies = loadLocal(themoviedbAPI.watched);

  try {
    const watchedMoviesIds = watchedMovies.map(movie => movie.id);
    watchedMoviesIds.forEach(id => {
//  назва функції fetchMovieById може бути змінена       
      const movie = themoviedbAPI.fetchMovieById(id);
     
      libRefs.library.insertAdjacentHTML(
        'beforeend',
//  назва функції renderMarkup може бути змінена  
        renderMarkup(movie.join(''))
      );

    });
  } catch (error) {
    Notiflix.Notify.failure('Something went wrong, please try again');
  }
}

function renderQueueMovies() {
  libRefs.library.innerHTML = '';
//  назва themoviedbAPI.queue може бути змінена в залежності від АРІ-файлу
  const queueMovies = loadLocal(themoviedbAPI.queue);

  try {
    const queueMoviesIDs = queueMovies.map(movie => movie.id);
    queueMoviesIDs.forEach(id => {
//  назва функції fetchMovieById може бути змінена     
      const movie = themoviedbAPI.fetchMovieById(id);
      
      libRefs.library.insertAdjacentHTML(
        'beforeend',
//  назва функції renderMarkup може бути змінена  
        renderMarkup(movie.join(''))
      );

    });
  } catch (error) {
    console.log(error);
    Notiflix.Notify.failure('Something went wrong, please try again');
  }
}
