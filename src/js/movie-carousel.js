import Swiper, { Navigation, Autoplay } from 'swiper';
import 'swiper/swiper.scss';
import axios from 'axios';

const sliderEl = document.querySelector('.swiper-wrapper');
const API_URL_IMG = `https://image.tmdb.org/t/p/original`;
const alternativePoster =
  'https://image.tmdb.org/t/p/original/fFRRlpqnYKtch1z72Yd45say5Rg.jpg';

export const swiper = new Swiper('.swiper', {
  modules: [Navigation, Autoplay],
  slidesPerView: 8,
  spaceBetween: 8,
  autoplay: {
    enabled: true,
    delay: 5000,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  breakpoints: {
    320: {
      slidesPerView: 3,
      spaceBetween: 2,
    },
    768: {
      slidesPerView: 6,
      spaceBetween: 4,
    },
    1278: {
      slidesPerView: 8,
      spaceBetween: 8,
    },
  },
});

const searchPopularFilms = axios.create({
  baseURL: 'https://api.themoviedb.org/3/trending/movie/week',
});

fetchPopularFilms();

export async function fetchPopularFilms() {
  const params = {
    api_key: '58645e23389326a2e8ed75695b9e1b79',
  };

  try {
    const response = await searchPopularFilms.get('', { params });
    // Викликає функцію рендера слайдера
    renderMarkupSlider(response.data.results);
  } catch (error) {
    console.log(error);
  }
}

//функція рендера слайдера
const renderMarkupSlider = movies => {
  const markup = movies
    .map(({ id, title, poster_path }) => {
      return `<li class="swiper-slide">
<img src="${
        poster_path ? API_URL_IMG + poster_path : alternativePoster
      }" alt="${title}"  />

      </li>`;
    })
    .join('');
  sliderEl.insertAdjacentHTML('beforeend', markup);
};
