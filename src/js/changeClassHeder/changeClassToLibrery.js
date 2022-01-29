import { refs } from '../base/refs';

export default function onLibraryChangeClass(evt) {
    if (!refs.library.classList.contains("current")) {
        refs.library.classList.add("current")
        refs.home.classList.remove("current")
        console.log(`add class`);
    }

    if (!refs.header.classList.contains("header_imageLibrery")) {
        refs.header.classList.add("header_imageLibrery")
        refs.header.classList.remove("header_imageHome")
        console.log(`add class`);
    }
}

