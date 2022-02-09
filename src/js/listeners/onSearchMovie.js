import { refs } from '../base/refs';
import pageLoadingSearch from '../base/pageLoadingSearch';

export default function onSearchMovie(e) {
  e.preventDefault();

  const query = e.target[0].value.trim();

  if (!query) return;

  refs.hero.innerHTML = '';
  refs.invalidList.innerHTML = '';
  refs.pagination.classList.add('hidden');
  refs.searchErrors.classList.add('is-hidden');
  refs.invalid.classList.add('hidden');
  refs.filterContainer.classList.remove('filter-container_out-in');

  pageLoadingSearch(query);
}
