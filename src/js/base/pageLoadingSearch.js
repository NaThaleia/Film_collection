import { refs } from './refs';
import { fetchApiSearch } from '../fetch/fetchApi';
import pageLoadingInvalid from './pageLoadingInvalid';
import renderCardsHero from './renderCardsHero';
import renderPagination from './renderPagination';
import { spinner } from './spinner';

/* Функция pageLoadingSearch принимает значение запроса и номер страницы, и если запрос удачный то рендерит карточки и пагинацию по запрошенному слову,
   в случае не корректного запроса рендерит ошибку */
export default function pageLoadingSearch(query, page = 1) {
  spinner('start');

  fetchApiSearch(query, page)
    .then(data => {
      if (!data.total_results) {
        spinner('stop');
        refs.searchErrors.classList.remove('is-hidden');
        refs.pagination.classList.add('hidden');
        refs.invalid.classList.remove('hidden');
        pageLoadingInvalid();
        setTimeout(() => {
          refs.searchErrors.classList.add('is-hidden');
        }, 5000);
        throw new Error(response.status);
      }
      const settings = {
        page: data.page,
        fetch: 'Search',
        query: query,
      };
      localStorage.setItem('page', JSON.stringify(settings));
      localStorage.setItem('cards', JSON.stringify(data.results));
      return data;
    })
    .then(data => {
      spinner('stop');
      renderCardsHero(data.results);
      renderPagination(data.total_pages, data.page);
      return data;
    })
    .catch(data => {
      return data;
    });
}
