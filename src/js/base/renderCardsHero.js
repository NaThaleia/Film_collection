import { refs } from './refs';
import CardsHero from '../templates/heroCards.hbs';

export default function renderCardsHero(obj) {
  const cards = CardsHero(obj.results);

  /* ДОДЕЛАТЬ ШАБЛОНИЗАТОР НА КОРОТКУЮ ДАТУ */
  /* СДЕЛАТЬ ФУНКЦИЮ НА ПЕРЕКОДИРОВУ ЖАНРОВ */

  refs.hero.insertAdjacentHTML('beforeend', cards);
}
