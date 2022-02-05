import { refs } from '../base/refs';
import onLibraryChangeClass from '../changeClassHeder/changeClassToLibrery';
import onWatched from './onWatched';

export default function onLibrary(e) {
  refs.hero.innerHTML = '';
  refs.invalidList.innerHTML = '';
  refs.invalid.classList.add('hidden');

  onLibraryChangeClass();
  onWatched();

  // console.log('я в библиотеке');

  return;
}
