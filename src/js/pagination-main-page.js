import Pagination from 'tui-pagination';
// import { fetchPopularFilms } from './fetch-popular-films';
import { getTopMovies } from './main-gallery';
import axios from 'axios';

const searchPopularFilms = axios.create({
  baseURL: 'https://api.themoviedb.org/3/trending/movie/day',
});

let currentPage = 1;

paginationPopularFilms(currentPage);

export async function paginationPopularFilms(page) {
  const params = {
    api_key: '58645e23389326a2e8ed75695b9e1b79',
    page: page,
  };

  try {
    const response = await searchPopularFilms.get('', { params });
    renderPagination(response.data.total_results, page);
    getTopMovies(response.data.results);
  } catch (error) {
    console.log(error);
  }
}

const paginationGalleryMarkup = document.querySelector('.gallery-wrap');
const paginationMarkup = `<div id="pagination" class="tui-pagination"></div>`;
const paginationContainer = paginationGalleryMarkup.insertAdjacentHTML(
  'beforeend',
  paginationMarkup
);

function renderPagination(totalPages, currentPage) {
  const container = document.querySelector('#pagination');

  // Опції для пагінації
  const options = {
    totalItems: totalPages,
    itemsPerPage: 20,
    visiblePages: 5,
    page: currentPage,
    centerAlign: true,
    firstItemClassName: 'tui-first-child',
    lastItemClassName: 'tui-last-child',
    template: {
      page: '<a href="#" class="tui-page-btn">{{page}}</a>',
      currentPage:
        '<strong class="tui-page-btn tui-is-selected">{{page}}</strong>',
      moveButton:
        '<a href="#" class="tui-page-btn tui-{{type}}">' +
        '<span class="tui-ico-{{type}}">{{type}}</span>' +
        '</a>',
      disabledMoveButton:
        '<span class="tui-page-btn tui-is-disabled tui-{{type}}">' +
        '<span class="tui-ico-{{type}}">{{type}}</span>' +
        '</span>',
      moreButton:
        '<a href="#" class="tui-page-btn tui-{{type}}-is-ellip">' +
        '<span class="tui-ico-ellip">...</span>' +
        '</a>',
    },
  };

  // Ініціалізація пагінації
  const pagination = new Pagination(container, options);

  // // Обробник події при зміні сторінки
  pagination.on('afterMove', event => {
    const currentPage = event.page;
    paginationPopularFilms(currentPage);
  });
}
