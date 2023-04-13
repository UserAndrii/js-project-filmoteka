import throttle from 'lodash.throttle';
import MovieSearchService from './movie-search-service';

const movieSearchService = new MovieSearchService();

const DEBOUNCE_DELAY = 300;
const refs = {
  form: document.querySelector('.js-form'),
};

refs.form.addEventListener(
  'submit',
  throttle(handleFormSubmit, DEBOUNCE_DELAY)
);

function handleFormSubmit(e) {
  e.preventDefault();
  movieSearchService.query = e.currentTarget.elements.search.value.trim();
  fetchBySearch();
}

async function fetchBySearch() {
  try {
    const fetch = await movieSearchService.fetchMovieSearch();
    if (fetch.data.total_results === 0) {
      movieSearchService.emptyArray();
      return;
    }

    // console.log(fetch.data.results);
    return fetch.data.results;
    // returns an array of movies according to the keyword
  } catch (error) {
    console.error(error);
  }
}
