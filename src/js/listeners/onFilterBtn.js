import { refs } from '../base/refs';
import listLanguage from '../templates/list_language.hbs';
import listVoteAverage from '../templates/list_vote_average.hbs';
import onHome from './onHome';

export default function onFilterBtn(evt) {
  if (!refs.filterContainer.classList.contains('filter-container_out-in')) {
    refs.filterContainer.classList.add('filter-container_out-in');
    localStorage.setItem('filter', JSON.stringify({}));
  } else {
    refs.filterContainer.classList.remove('filter-container_out-in');
  }

  // localStorage.setItem('filter', JSON.stringify({}));
  /* Добавляем список жанров в фильтер */
  const genres = JSON.parse(localStorage.getItem('genres'));
  const genresList = genres.map(e => `<option value='${e.id}'>${e.name}</option>`);
  genresList.unshift(`<option value='' selected>All Genres</option>`);

  refs.filterListGenres.innerHTML = genresList.join('');

  /* Добавляем список годов в фильтер */
  let startYear = 1907;
  let endYear = new Date().getFullYear();

  const yearsList = () => {
    let str = `<option value="" selected>All Year</option>`;
    for (let i = endYear; i >= startYear; i -= 1) {
      str += `<option value="${i}">${i}</option>`;
    }
    return str;
  };

  /* Добавляем ещё списки */
  refs.filterListYears.innerHTML = yearsList();
  refs.filterListLanguages.innerHTML = listLanguage();
  refs.filterListVoteAverage.innerHTML = listVoteAverage();
}
