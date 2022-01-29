import { refs } from '../base/refs';

export default function onHomeChangeClass(evt) {
    if (!refs.home.classList.contains("current")) {
        refs.home.classList.add("current")
        refs.library.classList.remove("current")
        console.log(`add class`);
    }

    if (!refs.header.classList.contains("header_imageHome")) {
        refs.header.classList.add("header_imageHome")
        refs.header.classList.remove("header_imageLibrery")
        console.log(`add class`);
    }

    if (refs.searchMovie.classList.contains("is-hidden")) {
        refs.libraryNavigation.classList.add("is-hidden")
        refs.searchMovie.classList.remove("is-hidden")
        console.log(`add class`);
    }

    refs.searchErrors.classList.add('is-hidden'); //временная затычка, убирает плохо найденное кино
}

