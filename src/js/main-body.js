import PopularMoviesApiServise from './fetch-popular-films';
import genres from './genres';

const moviesGallery = document.querySelector('.gallery');
export const API_URL_IMG = `https://image.tmdb.org/t/p/original`;

const popularMoviesApiServise = new PopularMoviesApiServise();

// функція видображ-я найпопулярніших фільмів
async function getTopMovies(page) {
  const response = await popularMoviesApiServise.fetchPopularFilms();
  //сформувати галерею популярних фільмів
  console.log(response);

  //   const markup = response
  //     .map(
  //       ({ id, poster_path, title, genre_ids, release_date, vote_average }) => {
  //         let genre = getGenre(genre_ids);
  //         let year = release_date.subctring(0, 4);

  //         if (title) {
  //           return `  <li class="movie-card"  ID=${id}>
  //                         <img class="movie-card__image" src="${API_URL_IMG}${poster_path}"
  //                         alt="${title}"
  //                         width="300" ID=${id}>
  //                         <h2 class="movie-card__name" ID=${id}>${title}</h2>
  //                         <p class="movie-card__text" ID=${id}>${genre} | ${year}
  //                           <span class="movie-card__box">
  //                             <span class="movie-card__average">${vote_average.toFixed(
  //                               [1]
  //                             )}</span>
  //                           </span>
  //                         </p>
  //                     </li>`;
  //         }
  //       }
  //     )
  //     .join('');

  // додає фільми у галерею
  moviesGallery.innerHTML = markup;
}
