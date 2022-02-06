import { refs } from './refs';
import fetchApiDay from '../fetch/fetchApiDay';
import invalid__cards from '../templates/invalid__cards.hbs';

/* Функция pageLoadingInvalid при ошибочном запросе рендерит первые 20 фильмов ТОП Day */
export default function pageLoadingInvalid() {
  fetchApiDay().then(data => {
    localStorage.setItem('cards', JSON.stringify(data.results));
    refs.invalidList.innerHTML = invalid__cards(data.results);
  });
}
