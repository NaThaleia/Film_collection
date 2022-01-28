import { refs } from '../base/refs';
import firstPageLoading from '../base/firstPageLoading';

export default function onHome(evt) {
  refs.hero.innerHTML = '';
  firstPageLoading();

  console.log('я дома');
}
