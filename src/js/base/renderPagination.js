import { refs } from './refs';

export default function renderPagination(maxPage, currentPage) {
  console.log(maxPage);
  console.log(currentPage);
  refs.pagination.classList.remove('is-hidden');
  refs.paginationPrevious.classList.remove('is-disabled');
  refs.paginationNext.classList.remove('is-disabled');
  refs.paginationLast.textContent = maxPage;
  refs.paginationLast.dataset.page = maxPage;
  refs.paginationAll.innerHTML = '';
  const arrPage = [];

  const center = maxPage - 4;

  if (currentPage === 1) {
    refs.paginationPrevious.classList.add('is-disabled');
  }

  if (currentPage === maxPage) {
    refs.paginationNext.classList.add('is-disabled');
  }

  if (currentPage < 6) {
    console.log('в начале');
    for (let i = 2; i < 7; i += 1) {
      arrPage.push(`<div class="page" data-page="${i}">${i}</div>`);
    }

    arrPage.push(`<div class="threeDots" >...</div>`);
  } else if (5 < currentPage && currentPage < center) {
    console.log('в середине');
    arrPage.push(`<div class="threeDots" >...</div>`);

    for (let i = currentPage - 2; i < currentPage + 3; i += 1) {
      arrPage.push(`<div class="page" data-page="${i}">${i}</div>`);
    }

    arrPage.push(`<div class="threeDots" >...</div>`);
  } else if (center <= currentPage) {
    console.log('в конце');
    arrPage.push(`<div class="threeDots" >...</div>`);

    for (let i = maxPage - 6; i < maxPage; i += 1) {
      arrPage.push(`<div class="page" data-page="${i}">${i}</div>`);
    }
  }

  refs.paginationAll.insertAdjacentHTML('beforeend', arrPage.join(''));
}
