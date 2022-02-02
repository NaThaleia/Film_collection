import { refs, xx } from '../base/refs';
import pageLoading from '../base/pageLoading';
import onHomeChangeClass from '../changeClassHeder/cnangeClassToHome';

export default function onHome(evt) {
xx.place = "home";
  refs.searchHeaderInput.value = '';
  refs.hero.innerHTML = '';

  pageLoading();
  onHomeChangeClass();

  // console.log('я дома');
}
