import { refs } from '../base/refs';

export default function onFilterBtn(evt) {
  if (!refs.filterContainer.classList.contains('filter-container_out-in')) {
    refs.filterContainer.classList.add('filter-container_out-in');
    localStorage.setItem('filter', JSON.stringify({}));
  } else {
    refs.filterContainer.classList.remove('filter-container_out-in');
  }

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

  refs.filterListYears.innerHTML = yearsList();
}
