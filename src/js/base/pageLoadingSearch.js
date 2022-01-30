import { refs } from './refs';
import fetchApiSearch from '../fetch/fetchApiSearch';
import renderCardsHero from './renderCardsHero';
import renderPagination from './renderPagination';

export default function pageLoadingSearch(query, page = 1) {
  fetchApiSearch(query, page)
    .then(data => {
      if (!data.total_results) {
        refs.searchErrors.classList.remove('is-hidden');
        refs.pagination.classList.add('hidden');
        throw new Error(response.status);
        // return data;
      }
      renderCardsHero(data.results);
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
