import { refs } from '../base/refs';
import pageLoading from '../base/pageLoading';
import pageLoadingSearch from '../base/pageLoadingSearch';

export default function onLoadingNextPage(e) {
  let nextPage = e.target.dataset.page;
  let currentPage = JSON.parse(localStorage.getItem('page'));

  if (!nextPage) {
    console.log('error');
    return;
  }

  refs.hero.innerHTML = '';
  if (nextPage === 'Previos') {
    nextPage = parseInt(currentPage.page) - 1;
  }
  if (nextPage === 'Next') {
    nextPage = parseInt(currentPage.page) + 1;
  }

  if (currentPage.fetch === 'Week') {
    pageLoading(parseInt(nextPage));
  }

  if (currentPage.fetch === 'Search') {
    pageLoadingSearch(currentPage.query, parseInt(nextPage));
  }
}
