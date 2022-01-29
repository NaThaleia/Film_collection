import { refs } from '../base/refs';
import pageLoading from '../base/pageLoading';
import onHomeChangeClass from '../changeClassHeder/cnangeClassToHome';

export default function onHome(evt) {
  refs.hero.innerHTML = '';

  pageLoading(2);
  onHomeChangeClass();
  console.log('я дома');
}
