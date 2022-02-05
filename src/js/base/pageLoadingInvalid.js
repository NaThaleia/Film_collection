import { refs } from './refs';
import fetchApiDay from '../fetch/fetchApiDay';
import invalid__cards from '../templates/invalid__cards.hbs';

export default function pageLoadingInvalid() {
  fetchApiDay().then(data => {
    localStorage.setItem('cards', JSON.stringify(data.results));
    refs.invalidList.innerHTML = invalid__cards(data.results);
  });
}
