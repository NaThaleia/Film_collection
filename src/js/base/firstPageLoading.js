import { refs } from './refs';
import fetchApiWeek from '../fetch/fetchApiWeek';
import renderCardsHero from './renderCardsHero';

export default function firstPageLoading() {
  fetchApiWeek().then(data => {
    renderCardsHero(data.results);
    return data;
  });
}
