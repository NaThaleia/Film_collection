import { refs } from './refs';
import CardsHero from '../templates/heroCards.hbs';

export default function renderCardsHero(arr) {
  const cards = CardsHero(arr);

  /* ДОДЕЛАТЬ ШАБЛОНИЗАТОР НА КОРОТКУЮ ДАТУ */
  /* СДЕЛАТЬ ФУНКЦИЮ НА ПЕРЕКОДИРОВУ ЖАНРОВ */

  refs.hero.insertAdjacentHTML('beforeend', cards);
}
