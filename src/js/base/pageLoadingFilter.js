import { refs } from './refs';
import { fetchApiFilter } from '../fetch/fetchApi';
import renderCardsHero from './renderCardsHero';
import renderPagination from './renderPagination';
import { spinner } from './spinner';

/* ОПИСАНИЕ */
export default function pageLoadingFilter(page, obj) {
  refs.searchHeaderInput.value = '';
  refs.hero.innerHTML = '';
  refs.invalidList.innerHTML = '';
  refs.invalid.classList.add('hidden');
  refs.empty.classList.add('hidden');

  spinner('start');

  fetchApiFilter(page, obj)
    .then(data => {
      spinner('stop');
      renderCardsHero(data.results);
      localStorage.setItem('cards', JSON.stringify(data.results)); // записывает пришедший массив объектов с бэкенда
      return data;
    })
    .then(data => {
      if (data.total_pages > 500) data.total_pages = 500;
      renderPagination(data.total_pages, data.page);
      const settings = {
        page: data.page,
        fetch: 'Filter',
      };
      localStorage.setItem('page', JSON.stringify(settings));
      return data;
    });
}
