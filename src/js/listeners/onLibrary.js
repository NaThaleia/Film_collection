import { refs } from '../base/refs';
import onLibraryChangeClass from '../changeClassHeder/changeClassToLibrery';
import onWatched from './onWatched';


export default function onLibrary(e) {
  refs.hero.innerHTML = '';

  onLibraryChangeClass();
  onWatched();
 

  // console.log('я в библиотеке');

  return;
}
