import { refs } from './refs';
import cardsHero from '../templates/heroCards.hbs';

export default function renderCardsHero(arr) {
  refs.hero.classList.remove('library-foto');
  const arrNewYear = NewYear(arr); // в исходном массиве с fetch  меняем год и передаем дальше
  const arrNewGenres = NewGenres(arrNewYear); // в исходном массиве с fetch  меняем жанр и передаем дальше

  // localStorage.setItem('cards', JSON.stringify(arrNewGenres));

  const cards = cardsHero(arrNewGenres);

  refs.hero.insertAdjacentHTML('beforeend', cards);
}

function NewYear(arr) {
  return arr.map(e => {
    if (!e.release_date) return e;
    const release_date = e.release_date.slice(0, 4);
    return { ...e, release_date: release_date };
  });
}

function NewGenres(arr) {
  const arrGenresLs = JSON.parse(localStorage.getItem('genres'));

  const arrGenres = arr
    .map(e => {
      return {
        ...e,
        genre_ids: e.genre_ids
          .map(x => {
            return arrGenresLs.find(({ id }) => id === x);
          })
          .map(({ name }) => name),
      };
    })
    .map(e => {
      if (e.genre_ids.length < 4) {
        const genre_idsSmall = e.genre_ids.join(', ');
        return { ...e, genre_ids: genre_idsSmall };
      }

      const genre_idsBig = e.genre_ids.slice(0, 2);
      genre_idsBig.push('Other');
      return { ...e, genre_ids: genre_idsBig.join(', ') };
    });

  return arrGenres;
}
