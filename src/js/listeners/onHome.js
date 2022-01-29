import { refs } from '../base/refs';
import firstPageLoading from '../base/firstPageLoading';
import onHomeChangeClass from '../changeClassHeder/cnangeClassToHome';

export default function onHome(evt) {
  refs.hero.innerHTML = '';

  refs.searchErrors.classList.add('is-hidden'); //временная затычка, убирает плохо найденное кино

  firstPageLoading();
  onHomeChangeClass();
  console.log('я дома');
}
