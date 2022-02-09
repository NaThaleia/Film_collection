import { refs } from '../base/refs';
import onLibraryChangeClass from '../changeClassHeder/changeClassToLibrery';
import onWatched from './onWatched';

export default function onLibrary() {
  refs.hero.innerHTML = '';
  refs.invalidList.innerHTML = '';
  refs.invalid.classList.add('hidden');
  refs.empty.classList.add('hidden');
  refs.filterBtnHeader.classList.add('is-hidden');
  refs.filterBtnHeaderText.textContent = 'Filter';
  refs.filterBtnHeaderText.classList.remove('filter-btn__text--accent');
  refs.filterContainer.classList.add('hidden');
  refs.filterContainer.classList.remove('filter-container_out-in');

  onLibraryChangeClass();
  onWatched();
}
