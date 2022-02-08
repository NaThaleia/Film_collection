import { refs } from '../base/refs';

export default function onFilter(evt) {
   if (!refs.filterContainer.classList.contains('filter-container_out-in')) {
      refs.filterContainer.classList.add('filter-container_out-in');
   } else {
      refs.filterContainer.classList.remove('filter-container_out-in');
   }
}
