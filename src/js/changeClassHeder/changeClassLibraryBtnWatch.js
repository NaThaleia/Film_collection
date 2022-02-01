import { refs } from '../base/refs';

export default function onLibraryChangeClassBtnWatch(evt) {
    if (!refs.watchedBtnHeader.classList.contains('orange')) {
    refs.watchedBtnHeader.classList.add('orange');
    refs. queueBtnHeader.classList.remove('orange');
    console.log(`add class`);
    }
    
    
}

