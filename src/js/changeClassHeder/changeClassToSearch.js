import { refs } from '../base/refs';

export default function onSearchChangeClass() {
    refs.SearchOnHeader.addEventListener("input", (e) => {
        console.log(e.currentTarget.value);

        if (e.currentTarget.value !== '') {
            console.log(`e info`);
            refs.SearchOnHeader.classList.add("text-left-for-js")
        }
        if (e.currentTarget.value === '') {
            console.log(`e info`);
            refs.SearchOnHeader.classList.remove("text-left-for-js")
        }
    })
    // console.log(refs.SearchOnHeader);
};
