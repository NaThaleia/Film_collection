import { refs } from '../base/refs';

export default function onLibrary(evt) {
  refs.hero.innerHTML = '';
  console.log(`click on Library ${evt.target}`);
  return;
}
