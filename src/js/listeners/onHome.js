import { refs } from '../base/refs';
import pageLoading from '../base/pageLoading';
import onHomeChangeClass from '../changeClassHeder/cnangeClassToHome';

export default function onHome() {
  refs.searchHeaderInput.value = '';
  refs.hero.innerHTML = '';
  refs.invalidList.innerHTML = '';
  refs.invalid.classList.add('hidden');
  refs.empty.classList.add('hidden');
  refs.filterBtnHeader.classList.remove('is-hidden');
  refs.filterContainer.classList.remove('filter-container_out-in');

  pageLoading();
  onHomeChangeClass();
}
