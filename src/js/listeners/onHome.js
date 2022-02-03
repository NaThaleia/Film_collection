import { refs } from '../base/refs';
import pageLoading from '../base/pageLoading';
import onHomeChangeClass from '../changeClassHeder/cnangeClassToHome';

export default function onHome(evt) {
  refs.searchHeaderInput.value = '';
  refs.hero.innerHTML = '';
  

  pageLoading();
  onHomeChangeClass();

  // console.log('я дома');
}
