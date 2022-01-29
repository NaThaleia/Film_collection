import { refs } from './refs';
import fetchApiWeek from '../fetch/fetchApiWeek';
import renderCardsHero from './renderCardsHero';
import renderPagination from './renderPagination';

export default function firstPageLoading() {
  fetchApiWeek().then(data => {
    renderCardsHero(data.results);
    return data;
  }).then(data => {
    renderPagination(data.total_pages, data.page);
    return data;
  });
}
