import { refs } from '../base/refs';
import onLibraryChangeClass from '../changeClassHeder/changeClassToLibrery';
import onWatched from './onWatched';

export default function onLibrary() {
  refs.hero.innerHTML = '';
  refs.invalidList.innerHTML = '';
  refs.invalid.classList.add('hidden');
  refs.empty.classList.add('hidden');

  onLibraryChangeClass();
  onWatched();
}
