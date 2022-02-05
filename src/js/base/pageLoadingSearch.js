import { refs } from './refs';
import fetchApiSearch from '../fetch/fetchApiSearch';
import pageLoadingInvalid from './pageLoadingInvalid';
import renderCardsHero from './renderCardsHero';
import renderPagination from './renderPagination';
import { spinner } from './spinner';

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
        // return data;
      }
      spinner('stop');
      renderCardsHero(data.results);
      localStorage.setItem('cards', JSON.stringify(data.results)); // перенесено в renderCardsHero, потому что там исходный массиф форматирует даты и жанры
      return data;
    })
    .then(data => {
      renderPagination(data.total_pages, data.page);
      const settings = {
        page: data.page,
        fetch: 'Search',
        query: query,
      };
      localStorage.setItem('page', JSON.stringify(settings));
      return data;
    })
    .catch(data => {
      return data;
    });
}
