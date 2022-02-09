import { refs } from '../base/refs';
import pageLoading from '../base/pageLoading';
import pageLoadingSearch from '../base/pageLoadingSearch';
import pageLoadingFilter from '../base/pageLoadingFilter';
import onWatched from '../listeners/onWatched';
import onQueue from '../listeners/onQueue';

export default function onLoadingNextPage(e) {
  let nextPage = e.target.dataset.page;
  let currentPage = JSON.parse(localStorage.getItem('page'));

  if (!nextPage) return;

  refs.hero.innerHTML = '';

  switch (nextPage) {
    case 'Previos':
      nextPage = parseInt(currentPage.page) - 1;
      break;

    case 'Next':
      nextPage = parseInt(currentPage.page) + 1;
      break;

    case 'left':
      nextPage = parseInt(currentPage.page) - 3;
      break;

    case 'right':
      nextPage = parseInt(currentPage.page) + 3;
      break;

    case 'left-end':
      nextPage = parseInt(currentPage.page) - 7; // исделано по инвалидному
      break;

    case 'right-end':
      nextPage = parseInt(currentPage.page) + 7; // исделано по инвалидному // условие i < 7  || 6
      break;

    default:
  }

  switch (currentPage.fetch) {
    case 'Week':
      pageLoading(parseInt(nextPage));
      break;

    case 'Search':
      pageLoadingSearch(currentPage.query, parseInt(nextPage));
      break;

    case 'Watched':
      onWatched(parseInt(nextPage), parseInt(nextPage));
      break;

    case 'Queue':
      onQueue(parseInt(nextPage), parseInt(nextPage));
      break;

    case 'Filter':
      const obj = JSON.parse(localStorage.getItem('filter'));
      pageLoadingFilter(parseInt(nextPage), obj);
      break;

    default:
  }
}
