import { refs } from './refs';
import CardsHero from '../templates/heroCards.hbs';

export default function renderCardsHero(arr) {
  const arrNewYear = NewYear(arr);

  const cards = CardsHero(arrNewYear);

  /* ДОДЕЛАТЬ ШАБЛОНИЗАТОР НА КОРОТКУЮ ДАТУ */
  /* СДЕЛАТЬ ФУНКЦИЮ НА ПЕРЕКОДИРОВУ ЖАНРОВ */

  refs.hero.insertAdjacentHTML('beforeend', cards);
}

function NewYear(arr) {
  return arr.map(e => {
    if (!e.release_date) return e;
    const release_date = e.release_date.slice(0, 4);
    return { ...e, release_date: release_date };
  });
}
