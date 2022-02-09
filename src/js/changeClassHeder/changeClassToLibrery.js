import { refs } from '../base/refs';

export default function onLibraryChangeClass() {
  if (!refs.libraryBtnHeader.classList.contains('current')) {
    refs.libraryBtnHeader.classList.add('current');
    refs.homeBtnHeader.classList.remove('current');
  }

  if (!refs.header.classList.contains('header_imageLibrery')) {
    refs.header.classList.add('header_imageLibrery');
    refs.header.classList.remove('header_imageHome');
  }

  if (refs.libraryNavigation.classList.contains('is-hidden')) {
    refs.searchMovie.classList.add('is-hidden');
    refs.libraryNavigation.classList.remove('is-hidden');
  }

  refs.searchErrors.classList.add('is-hidden'); //временная затычка, убирает плохо найденное кино
}
