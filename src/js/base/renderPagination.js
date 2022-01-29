import { refs } from './refs';

export default function renderPagination(maxPage, currentPage) {
  console.log(maxPage);
  console.log(currentPage);
  refs.pagination.classList.remove('is-hidden');
  refs.paginationLast.textContent = maxPage;
  refs.paginationLast.dataset.page = maxPage;
  refs.paginationAll.innerHTML = '';
  const arrPage = [];

  for (let i = 2; i < maxPage; i += 1) {
    arrPage.push(`<li class="page" data-page="${i}">${i}</li>`);
  }
  // const text = paginationCart();

  refs.paginationAll.insertAdjacentHTML('afterend', arrPage.join(''));
}

