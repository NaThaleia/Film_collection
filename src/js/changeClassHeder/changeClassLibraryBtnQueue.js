import { refs } from '../base/refs';

export default function onLibraryChangeClassBtnQueue(evt) {
  if (!refs.queueBtnHeader.classList.contains('orange')) {
    refs.queueBtnHeader.classList.add('orange');
    refs.watchedBtnHeader.classList.remove('orange');
    // console.log(`add class`);
  }
}
