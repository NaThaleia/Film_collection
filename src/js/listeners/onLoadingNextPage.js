import { refs } from '../base/refs';
import pageLoading from '../base/pageLoading';

export default function onLoadingNextPage(e) {
  let nextPage = e.target.dataset.page;
  let currentPage = localStorage.getItem('page');

  if (!nextPage) {
    console.log('error');
    return;
  }

  refs.hero.innerHTML = '';
  if (nextPage === 'Previos') {
    nextPage = parseInt(currentPage) - 1;
  }
  if (nextPage === 'Next') {
    nextPage = parseInt(currentPage) + 1;
  }

  pageLoading(parseInt(nextPage));
}
