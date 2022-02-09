import { refs } from './refs';
import heroCards from '../templates/heroCards.hbs';
import heroCardsLibrary from '../templates/heroCardsLibrary.hbs';

/* Функция renderCardsHero на входе принимает масси с бэкенда и череш шаблон формирует разметку блока Hero */
export default function renderCardsHero(arr) {
  refs.hero.classList.remove('library-foto');
  const arrNewYear = newYear(arr); // в исходном массиве с fetch  меняем год и передаем дальше
  const arrNewGenres = newGenres(arrNewYear); // в исходном массиве с fetch  меняем жанр и передаем дальше

  const currentPage = JSON.parse(localStorage.getItem('page'));
  const filter = {
    ...JSON.parse(localStorage.getItem('filter')),
  };

  let cards;

  /* Отображение рейтинга на странице */
  if (currentPage.fetch === 'Watched' || currentPage.fetch === 'Queue') {
    cards = heroCardsLibrary(arrNewGenres);
  } else if (parseInt(filter.vote_average) && currentPage.fetch === 'Filter') {
    cards = heroCardsLibrary(arrNewGenres);
  } else {
    cards = heroCards(arrNewGenres);
  }

  refs.hero.insertAdjacentHTML('beforeend', cards);
}

/* Функция NewYear на входе принимает массив с бэкенда, на выходе  каждоб объекте массива сокращает дату до года */
function newYear(arr) {
  return arr.map(e => {
    if (!e.release_date) return e;
    const release_date = e.release_date.slice(0, 4);
    return { ...e, release_date: release_date };
  });
}

/* Функция NewGenres на входе принимает массив с бэкенда, на выходе в каждома объекте массива изменяет жанр и округляет его */
function newGenres(arr) {
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
