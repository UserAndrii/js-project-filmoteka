import axios from 'axios';
import { getTopMovies } from './main-gallery';
import { renderPopularFilmsPagination } from './pagination-main-page';

const searchPopularFilms = axios.create({
  baseURL: 'https://api.themoviedb.org/3/trending/movie/day',
});

let currentPage = 1;
fetchPopularFilms(currentPage);

export async function fetchPopularFilms(page) {
  const params = {
    api_key: '58645e23389326a2e8ed75695b9e1b79',
    page: page,
  };

  try {
    const response = await searchPopularFilms.get('', { params });
    // Викликає функцію рендера сторінки
    getTopMovies(response.data.results);
    renderPopularFilmsPagination(response.data.total_results, page);
  } catch (error) {
    console.log(error);
  }
}
