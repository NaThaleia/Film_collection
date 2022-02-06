import { refs } from '../base/refs';
import renderCardsHero from '../base/renderCardsHero';
import renderPagination from '../base/renderPagination';
import onLibraryChangeClassBtnWatch from '../changeClassHeder/changeClassLibraryBtnWatch';
import isArrEmpty from '../base/isArrEmpty';
import putSettings from '../base/putSettings';
import paginationDataCalc from '../base/paginationDataCalc';

// Кнопка Watched в хедері
export default function onWatched(e, page = 1) {
  onLibraryChangeClassBtnWatch();
  refs.hero.innerHTML = '';
  refs.empty.classList.add('hidden');
  const PAGE_SIZE = 20;
  let arr = JSON.parse(localStorage.getItem('library-watched'));

  if (isArrEmpty(arr, refs)) return; // если нет карточек

  putSettings(page, "Watched");

  const [newArr, totalPage] = paginationDataCalc(arr, page, PAGE_SIZE);

  renderCardsHero(newArr);
  renderPagination(totalPage, page);
}
