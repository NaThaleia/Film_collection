import { refs } from './refs';

export default function renderPagination(maxPage, currentPage) {
  // console.log(maxPage);
  // console.log(currentPage);

  /* очиска классов */
  refs.pagination.classList.remove('is-hidden');
  refs.paginationPrevious.classList.remove('is-disabled');
  refs.paginationNext.classList.remove('is-disabled');
  refs.paginationFirst.classList.remove('active');
  refs.paginationLast.classList.remove('active');
  /* олварпв */

  refs.paginationLast.textContent = maxPage;
  refs.paginationLast.dataset.page = maxPage;
  refs.paginationAll.innerHTML = '';
  const arrPage = [];

  const center = maxPage - 4;

  if (currentPage === 1) {
    refs.paginationPrevious.classList.add('is-disabled');
    refs.paginationFirst.classList.add('active');
  }

  if (currentPage === maxPage) {
    refs.paginationNext.classList.add('is-disabled');
    refs.paginationLast.classList.add('active');
  }

  if (currentPage < 6) {
    for (let i = 2; i < 7; i += 1) {
      if (i === currentPage) {
        arrPage.push(`<div class="page active" data-page="${i}">${i}</div>`);
        continue;
      }
      arrPage.push(`<div class="page" data-page="${i}">${i}</div>`);
    }

    arrPage.push(`<div class="threeDots" >...</div>`);
  } else if (5 < currentPage && currentPage < center) {
    arrPage.push(`<div class="threeDots" >...</div>`);

    for (let i = currentPage - 2; i < currentPage + 3; i += 1) {
      if (i === currentPage) {
        arrPage.push(`<div class="page active" data-page="${i}">${i}</div>`);
        continue;
      }
      arrPage.push(`<div class="page" data-page="${i}">${i}</div>`);
    }

    arrPage.push(`<div class="threeDots" >...</div>`);
  } else if (center <= currentPage) {
    arrPage.push(`<div class="threeDots" >...</div>`);

    for (let i = maxPage - 6; i < maxPage; i += 1) {
      if (i === currentPage) {
        arrPage.push(`<div class="page active" data-page="${i}">${i}</div>`);
        continue;
      }
      arrPage.push(`<div class="page" data-page="${i}">${i}</div>`);
    }
  }

  refs.paginationAll.insertAdjacentHTML('beforeend', arrPage.join(''));
}
