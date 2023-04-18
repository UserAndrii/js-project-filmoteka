import throttle from 'lodash.throttle';
import MovieSearchService from './movie-search-service';
import { getTopMovies } from './main-gallery';
import { fetchPopularFilms } from './fetch-popular-films';
import { renderSearchFilmsPagination } from './pagination-main-page';

const movieSearchService = new MovieSearchService();

const DEBOUNCE_DELAY = 300;
const refs = {
  form: document.querySelector('.js-form'),
  home: document.querySelector('.btn-home'),
  heroBtnLibrary: document.querySelector('.hero__btn-library'),
  libraryBtn: document.querySelector('.btn_library'),
  pagination: document.querySelector('#pagination'),
  emptyPage: document.querySelector('.empty-page'),
  audio: document.querySelector('#audio-play'),
  watched: document.querySelector('.btn-watched'),
  queue: document.querySelector('.btn-queue'),
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
  refs.audio.pause();
  refs.audio.currentTime = 0;
  homePage();
  movieSearchService.enableLoader();
  fetchPopularFilms(1);
  refs.form.reset();
  pagination.style.display = 'block';
}

function handleFormSubmit(e) {
  e.preventDefault();
  homePage();
  movieSearchService.enableLoader();
  movieSearchService.query = e.currentTarget.elements.search.value.trim();
  fetchBySearch();
}

function fetchBySearch() {
  if (!movieSearchService.query) {
    movieSearchService.emptyArray();
    refs.form.reset();
    // відключає loader
    movieSearchService.disableLoader();
    return;
  }

  try {
    backendDataToRenderedPage(1);
  } catch (error) {
    console.error(error);
  }
}

export async function backendDataToRenderedPage(currentPage) {
  const fetch = await movieSearchService.fetchMovieSearch(currentPage);
  if (fetch.data.total_results === 0) {
    movieSearchService.emptyArray();
    // відключає loader
    setTimeout(movieSearchService.disableLoader, 300);
    return;
  }
  getTopMovies(fetch.data.results);
  renderSearchFilmsPagination(fetch.data.total_results, currentPage);
}

function homePage() {
  refs.watched.removeAttribute('data-watched');
  refs.queue.removeAttribute('data-queue');
  refs.heroBtnLibrary.style.display = 'none';
  refs.home.style.color = '#fff';
  refs.home.style.backgroundColor = '#000';
  refs.libraryBtn.style.backgroundColor = '#fff';
  refs.libraryBtn.style.color = '#000';
  refs.emptyPage.style.display = 'none';
  pagination.style.display = 'block';
}
