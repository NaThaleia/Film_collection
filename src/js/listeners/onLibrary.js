import { refs } from '../base/refs';
import onLibraryChangeClass from '../changeClassHeder/changeClassToLibrery';

export default function onLibrary(evt) {
  refs.hero.innerHTML = '';

  refs.searchErrors.classList.add('is-hidden'); //временная затычка, убирает плохо найденное кино

  onLibraryChangeClass();
  console.log(`click on Library ${evt.target}`);
  return;
}
