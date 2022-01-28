import { refs } from './refs';
import fetchApiWeek from '../fetch/fetchApiWeek';
import renderCardsHero from './renderCardsHero';

export default function firstPageLoading() {
  fetchApiWeek().then(renderCardsHero);
}
