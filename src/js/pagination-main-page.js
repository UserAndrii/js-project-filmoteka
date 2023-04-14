import Pagination from 'tui-pagination';
import 'tui-pagination/dist/tui-pagination.css';

// Додати HTML-розмітку контейнера для розміщення посилань на сторінки:
// <div id="pagination" class="tui-pagination"></div>;

const container = document.querySelector('#pagination');
const options = {
  totalItems: 1000, //response.results.length
  itemsPerPage: 20,
  visiblePages: 5,
  page: 1,
  centerAlign: true,
  firstItemClassName: 'tui-first-child',
  lastItemClassName: 'tui-last-child',
};
const pagination = new Pagination(container, options);

// // API methods
// // gets the current page
// pagination.getCurrentPage();
// // goes to page x
// pagination.movePageTo(targetPage);
// // resets the pagination
// pagination.reset(totalItems);
// // sets the number of items per page
// pagination.setItemsPerPage(itemCount);
// // sets the total number of items
// pagination.setTotalItems(itemCount);
