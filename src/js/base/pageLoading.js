import { refs } from './refs';
import fetchApiWeek from '../fetch/fetchApiWeek';
import renderCardsHero from './renderCardsHero';
import renderPagination from './renderPagination';

export default function PageLoading(page = 1) {
  fetchApiWeek(page)
    .then(data => {
      renderCardsHero(data.results);
      return data;
    })
    .then(data => {
      renderPagination(data.total_pages, data.page);
      return data;
    });
}
