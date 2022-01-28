import { refs } from '../base/refs';
import fetchApiWeek from '../fetch/fetchApiWeek';

export default function firstPageLoading() {
  fetchApiWeek().then(data => {
    const arrMovie = data.results

      .map(({ poster_path, title, release_date, genre_ids }) => {
        /* ТУТ ДОЛЖНА БЫТЬ ФУНКЦИЯ КОТОРАЯ ОБРЕЗАЕТ ДАТУ */

        /* ТУТ ДОЛЖНА БЫТЬ ФУНКЦИЯ КОТОРАЯ ПРЕВРАЩАЕТ ЦИФРЫ В ЖАНРЫ */

        /* ТУТ В МЕСТО РЕТЮРНА ДОЛЖЕН БЫТЬ ШАБЛОНИЗАТОР */
        return `<div>
            <img src="https://image.tmdb.org/t/p/w500/${poster_path}" alt="${title}" width=250; />
            <h2>${title}</h2>
            <p>${genre_ids} <span>${release_date}</span></p>
             </div>`;
      })
      .join('');
    refs.hero.insertAdjacentHTML('beforeend', arrMovie);
    return data;
  });
}
