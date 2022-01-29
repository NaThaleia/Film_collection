import { refs } from '../base/refs';
import onLibraryChangeClass from '../changeClassHeder/changeClassToLibrery';

export default function onLibrary(evt) {
  refs.hero.innerHTML = '';
  onLibraryChangeClass();
  console.log(`click on Library ${evt.target}`);
  return;
}
