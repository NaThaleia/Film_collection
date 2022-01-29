import { refs } from '../base/refs';

export default function onLibraryChangeClass(evt) {
  refs.searchErrors.classList.add('is-hidden'); //добавил класс, приуходи со страницы с плохим поиском

  if (!refs.library.classList.contains('current')) {
    refs.library.classList.add('current');
    refs.home.classList.remove('current');
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
}
