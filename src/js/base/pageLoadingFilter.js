import { refs } from './refs';
import { fetchApiFilter } from '../fetch/fetchApi';
import renderCardsHero from './renderCardsHero';
import renderPagination from './renderPagination';
import pageLoadingInvalid from './pageLoadingInvalid';
import { spinner } from './spinner';

/* Функция pageLoadingFilter принимает два значения: номер страницы и объект с параметрами фильтра */
export default function pageLoadingFilter(page, obj) {
  refs.searchHeaderInput.value = '';
  refs.hero.innerHTML = '';
  refs.invalidList.innerHTML = '';
  refs.invalid.classList.add('hidden');
  refs.empty.classList.add('hidden');

  spinner('start');

  fetchApiFilter(page, obj)
    .then(data => {
      if (!data.total_results) {
        spinner('stop');
        refs.pagination.classList.add('hidden');
        refs.invalid.classList.remove('hidden');
        pageLoadingInvalid();
        throw new Error(response.status);
      }
      const settings = {
        page: data.page,
        fetch: 'Filter',
      };
      localStorage.setItem('page', JSON.stringify(settings));
      localStorage.setItem('cards', JSON.stringify(data.results)); // записывает пришедший массив объектов с бэкенда
      return data;
    })
    .then(data => {
      spinner('stop');
      renderCardsHero(data.results);
      if (data.total_pages > 500) data.total_pages = 500;
      renderPagination(data.total_pages, data.page);
      return data;
    })
    .catch(data => {
      return data;
    });
}
