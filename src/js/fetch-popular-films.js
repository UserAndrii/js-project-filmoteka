import axios from 'axios';

const searchPopularFilms = axios.create({
  baseURL: 'https://api.themoviedb.org/3/trending/movie/day',
});

export default class PopularMoviesApiServise {
  constructor() {}

  async fetchPopularFilms() {
    const params = {
      api_key: '58645e23389326a2e8ed75695b9e1b79',
    };

    try {
      const response = await searchPopularFilms.get('', { params });
      return response.data.results;
      // Возвращает масив фильмов
    } catch (error) {
      console.log(error);
    }
  }
}
