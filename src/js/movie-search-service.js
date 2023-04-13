import axios from 'axios';
import Notiflix from 'notiflix';

const API_KEY = '58645e23389326a2e8ed75695b9e1b79';
const BASE_URL = 'https://api.themoviedb.org/3/search/movie';

export default class MovieSearchService {
  constructor() {
    this.searchQuery = '';
  }

  fetchMovieSearch() {
    const searchParams = new URLSearchParams({
      api_key: API_KEY,
      language: 'en-US',
      page: 1,
      include_adult: false,
      query: this.searchQuery,
    });

    const fetch = axios.get(`${BASE_URL}?${searchParams}`);
    return fetch;
  }

  emptyArray() {
    Notiflix.Notify.failure(
      'Search result not successful. Enter the correct movie name.'
    );
  }

  get query() {
    return this.searchQuery;
  }

  set query(newQuery) {
    this.searchQuery = newQuery;
  }
}
