import { refs } from '../base/refs';

export default function onLibraryChangeClass(evt) {
  if (!refs.libraryBtnHeader.classList.contains('current')) {
    refs.libraryBtnHeader.classList.add('current');
    refs.homeBtnHeader.classList.remove('current');
    console.log(`add class`);
    }
    

  if (!refs.header.classList.contains('header_imageLibrery')) {
    refs.header.classList.add('header_imageLibrery');
    refs.header.classList.remove('header_imageHome');
    console.log(`add class`);
  }

  if (refs.libraryNavigation.classList.contains('is-hidden')) {
    refs.searchMovie.classList.add('is-hidden');
    refs.libraryNavigation.classList.remove('is-hidden');
    console.log(`add class`);
  }

  refs.searchErrors.classList.add('is-hidden'); //временная затычка, убирает плохо найденное кино
}
