import genres from './genres';
import MovieSearchService from './movie-search-service';

export const API_URL_IMG = `https://image.tmdb.org/t/p/original`;

const moviesGallery = document.querySelector('.gallery');
export const alternativePoster =
  'https://image.tmdb.org/t/p/original/fFRRlpqnYKtch1z72Yd45say5Rg.jpg';

const movieSearchService = new MovieSearchService();

// функція видображення фільмів
export async function getTopMovies(data) {
  // очищує контейнер
  moviesGallery.innerHTML = '';
  //рендер галереї фільмів
  const markup = data
    .map(
      ({ id, poster_path, title, genre_ids, release_date, vote_average }) => {
        let genre = getGenre(genre_ids);
        let year = release_date.substring(0, 4);

        if (title) {
          return `
          <li class="movie-card" id="${id}">
            <img
              class="movie-card__image"
              src="${
                poster_path ? API_URL_IMG + poster_path : alternativePoster
              }"
              alt="${title}"
              width="300"
              height="574"
              id="${id}"
            />
            <h2 class="movie-card__name" id="${id}">${title}</h2>
            <p class="movie-card__text" id="${id}">
              ${genre} | ${year}
              <span class="movie-card__box">
                <span class="movie-card__average">${vote_average.toFixed(
                  1
                )}</span>
              </span>
            </p>
          </li>
          `;
        }
      }
    )
    .join('');

  // додає фільми у галерею
  moviesGallery.innerHTML = markup;
  // відключає loader
  setTimeout(movieSearchService.disableLoader, 300);
}

export function getGenre(genre_ids) {
  let genresListArray = [];
  genre_ids.forEach(id => {
    genres.forEach(genre => {
      if (genre.id === id) {
        genresListArray.push(genre.name);
      }
    });
  });
  return genresListArray.slice(0, 3).join(', ');
}
