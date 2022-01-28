import { refs } from '../base/refs';
import fetchApiSearch from '../fetch/fetchApiSearch';
import renderCardsHero from '../base/renderCardsHero';

export default function onSearchMovie(e) {
  e.preventDefault();

  const query = e.target[0].value.trim();
  if (!query) {
    alert('вы ввели пустую строку!');
    return;
  }
  refs.hero.innerHTML = '';

  fetchApiSearch(query)
    .then(data => {
      renderCardsHero(data.results);
      return data;
    })
    .then(data => {
      e.target.reset();
      return data;
    });
}
