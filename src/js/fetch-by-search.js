import throttle from 'lodash.throttle';
import MovieSearchService from './movie-search-service';
import { getTopMovies } from './main-gallery';
import { fetchPopularFilms } from './fetch-popular-films'

const movieSearchService = new MovieSearchService();

const DEBOUNCE_DELAY = 300;
const refs = {
  form: document.querySelector('.js-form'),
  home: document.querySelector('.btn-home'),
  heroBtnLibrary: document.querySelector('.hero__btn-library'),
  libraryBtn: document.querySelector('.btn_library'),
};

refs.home.addEventListener(
  'click',
  throttle(pressButtonToHome, DEBOUNCE_DELAY)
);

refs.form.addEventListener(
  'submit',
  throttle(handleFormSubmit, DEBOUNCE_DELAY)
);

function pressButtonToHome(e) {
  e.preventDefault();
  refs.heroBtnLibrary.style.display = 'none';

  refs.libraryBtn.style.backgroundColor = '#fff';
  refs.libraryBtn.style.color = '#000';

  refs.home.style.backgroundColor = '';
  refs.home.style.color = '';

  movieSearchService.enableLoader();
  fetchPopularFilms();
  refs.form.reset();
}

function handleFormSubmit(e) {
  e.preventDefault();
  movieSearchService.enableLoader();
  movieSearchService.query = e.currentTarget.elements.search.value.trim();
  fetchBySearch();
}

async function fetchBySearch() {
  if (!movieSearchService.query) {
    movieSearchService.emptyArray();
    refs.form.reset();
    // відключає loader
    movieSearchService.disableLoader();
    return;
  }

  try {
    const fetch = await movieSearchService.fetchMovieSearch();
    if (fetch.data.total_results === 0) {
      movieSearchService.emptyArray();
      // відключає loader
      setTimeout(movieSearchService.disableLoader, 300);
      return;
    }

    // console.log(fetch.data.results);
    getTopMovies(fetch.data.results);
    // returns an array of movies according to the keyword
  } catch (error) {
    console.error(error);
  }
}
