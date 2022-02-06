import { refs } from '../base/refs';
import renderCardsHero from '../base/renderCardsHero';
import renderPagination from '../base/renderPagination';
import onLibraryChangeClassBtnQueue from '../changeClassHeder/changeClassLibraryBtnQueue';
import isArrEmpty from '../base/isArrEmpty';
import putSettings from '../base/putSettings';
import paginationDataCalc from '../base/paginationDataCalc';

// Кнопка Queue в хедері
export default function onQueue(e, page = 1) {
  onLibraryChangeClassBtnQueue();
  refs.hero.innerHTML = '';
  refs.empty.classList.add('hidden');
  const PAGE_SIZE = 20;
  let arr = JSON.parse(localStorage.getItem('library-queue'));

  if (isArrEmpty(arr, refs)) return; // если нет карточек

  putSettings(page, "Queue");

  const [newArr, totalPage] = paginationDataCalc(arr, page, PAGE_SIZE);

  renderCardsHero(newArr);
  renderPagination(totalPage, page);
}
