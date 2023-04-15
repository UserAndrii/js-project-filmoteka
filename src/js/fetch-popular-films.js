import axios from 'axios';
import { getTopMovies } from './main-gallery';

const searchPopularFilms = axios.create({
  baseURL: 'https://api.themoviedb.org/3/trending/movie/day',
});

fetchPopularFilms();

export async function fetchPopularFilms() {
  const params = {
    api_key: '58645e23389326a2e8ed75695b9e1b79',
  };

  try {
    const response = await searchPopularFilms.get('', { params });
    // Викликає функцію рендера сторінки
    getTopMovies(response.data.results);
  } catch (error) {
    console.log(error);
  }
}
