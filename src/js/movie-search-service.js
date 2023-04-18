import axios from 'axios';
import Notiflix from 'notiflix';

const container = document.querySelector('.notiflix-position');
const API_KEY = '58645e23389326a2e8ed75695b9e1b79';
const BASE_URL = 'https://api.themoviedb.org/3/search/movie';

const refs = {
  loader: document.querySelector('.loader'),
  heroSubmit: document.querySelector('.hero__submit'),
};

export default class MovieSearchService {
  constructor() {
    this.searchQuery = '';
  }

  fetchMovieSearch(page) {
    const searchParams = new URLSearchParams({
      api_key: API_KEY,
      language: 'en-US',
      page: 1,
      include_adult: false,
      query: this.searchQuery,
      page: page,
    });

    const fetch = axios.get(`${BASE_URL}?${searchParams}`);
    return fetch;
  }

  emptyArray() {
    Notiflix.Notify.failure(
      'Search result not successful. Enter the correct movie name.'
    );
    container.append(document.querySelector('#NotiflixNotifyWrap'));
  }

  enableLoader() {
    refs.heroSubmit.style.display = 'none';
    refs.loader.style.display = 'flex';
  }

  disableLoader() {
    refs.loader.style.display = 'none';
    refs.heroSubmit.style.display = 'block';
  }

  get query() {
    return this.searchQuery;
  }

  set query(newQuery) {
    this.searchQuery = newQuery;
  }
}

Notiflix.Notify.init({
  width: ' ',
  position: 'left-top', // 'right-top' - 'right-bottom' - 'left-top' - 'left-bottom' - 'center-top' - 'center-bottom' - 'center-center'
  distance: '',
  opacity: 1,
  borderRadius: '5px',
  rtl: false,
  timeout: 4000,
  messageMaxLength: 110,
  backOverlay: false,
  backOverlayColor: 'rgba(0,0,0,0.5)',
  plainText: true,
  showOnlyTheLastOne: true,
  clickToClose: false,
  pauseOnHover: true,

  ID: 'NotiflixNotify',
  className: 'notiflix-notify',
  zindex: 4001,
  fontFamily: 'Roboto',
  fontSize: '10px',
  lineHeight: '12px',
  cssAnimation: true,
  cssAnimationDuration: 400,
  cssAnimationStyle: 'zoom', // 'fade' - 'zoom' - 'from-right' - 'from-top' - 'from-bottom' - 'from-left'
  closeButton: false,
  useIcon: false,
  useFontAwesome: false,
  fontAwesomeIconStyle: 'basic', // 'basic' - 'shadow'
  fontAwesomeIconSize: '34px',

  failure: {
    background: 'none',
    textColor: '#FFFFFF;',
    childClassName: 'notiflix-notify-failure',
    notiflixIconColor: 'rgba(0,0,0,0.2)',
    fontAwesomeClassName: 'fas fa-times-circle',
    fontAwesomeIconColor: 'rgba(0,0,0,0.2)',
    backOverlayColor: 'rgba(255,85,73,0.2)',
  },
});
