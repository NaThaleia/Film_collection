import { refs } from './refs';
import fetchApiWeek from '../fetch/fetchApiWeek';
import renderCardsHero from './renderCardsHero';
import renderPagination from './renderPagination';

export default function pageLoading(page = 1) {
  fetchApiWeek(page)
    .then(data => {
      renderCardsHero(data.results);
      return data;
    })
    .then(data => {
      renderPagination(data.total_pages, data.page);
      const settings = {
        page: data.page,
        fetch: 'Week',
      };
      localStorage.setItem('page', JSON.stringify(settings));
      return data;
    });
}
