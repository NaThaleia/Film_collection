import { refs } from '../base/refs';

export default function onHomeChangeClass() {
  if (!refs.homeBtnHeader.classList.contains('current')) {
    refs.homeBtnHeader.classList.add('current');
    refs.libraryBtnHeader.classList.remove('current');
  }

  if (!refs.header.classList.contains('header_imageHome')) {
    refs.header.classList.add('header_imageHome');
    refs.header.classList.remove('header_imageLibrery');
  }

  if (refs.searchMovie.classList.contains('is-hidden')) {
    refs.libraryNavigation.classList.add('is-hidden');
    refs.searchMovie.classList.remove('is-hidden');
  }

  refs.searchErrors.classList.add('is-hidden'); //временная затычка, убирает плохо найденное кино
}
