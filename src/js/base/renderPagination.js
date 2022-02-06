import { refs } from './refs';

/* Функция renderPagination принимает два значения, общее кол-во страниц, отображает все строницы и выделяет страницу на которой находимся */
export default function renderPagination(maxPage, currentPage) {
  // не должно быть пустых или нулевых значений
  if (!maxPage || !currentPage) {
    refs.pagination.classList.add('hidden');
    return;
  }

  refs.pagination.classList.remove('hidden');

  /* очиска классов */
  refs.pagination.classList.remove('is-hidden');
  refs.paginationPrevious.classList.remove('is-disabled');
  refs.paginationNext.classList.remove('is-disabled');
  refs.paginationFirst.classList.remove('active');
  refs.paginationLast.classList.remove('active');
  refs.paginationLast.classList.remove('hidden');

  /* данные для последней страници */
  refs.paginationLast.textContent = maxPage;
  refs.paginationLast.dataset.page = maxPage;

  /* очистка промежуточных страниц, перед рендером */
  refs.paginationAll.innerHTML = '';

  const arrPage = []; // массив для промежуточных страниц

  // значение относительно которого позицианируются точки
  const center = maxPage - 4;

  if (maxPage === 1) {
    openFirstPage();

    refs.paginationNext.classList.add('is-disabled');
    refs.paginationLast.classList.add('hidden');
  } else if (maxPage === 2) {
    openFirstPage();

    if (currentPage === maxPage) {
      refs.paginationPrevious.classList.remove('is-disabled');
      refs.paginationFirst.classList.remove('active');

      openLastPage();
    }
  } else if (maxPage < 9) {
    if (currentPage === 1) {
      openFirstPage();
    }

    for (let i = 2; i < maxPage; i += 1) {
      if (i === currentPage) {
        arrPage.push(`<div class="page active" data-page="${i}">${i}</div>`);
        continue;
      }
      arrPage.push(`<div class="page" data-page="${i}">${i}</div>`);
    }

    if (currentPage === maxPage) {
      openLastPage();
    }
  } else {
    if (currentPage === 1) {
      openFirstPage();
    }

    if (currentPage < 6) {
      for (let i = 2; i < 7; i += 1) {
        if (i === currentPage) {
          arrPage.push(`<div class="page active" data-page="${i}">${i}</div>`);
          continue;
        }
        arrPage.push(`<div class="page" data-page="${i}">${i}</div>`);
      }

      arrPage.push(`<div class="threeDots" data-page='right-end'>...</div>`);
    } else if (5 < currentPage && currentPage < center) {
      arrPage.push(`<div class="threeDots" data-page='left'>...</div>`);

      for (let i = currentPage - 2; i < currentPage + 3; i += 1) {
        if (i === currentPage) {
          arrPage.push(`<div class="page active" data-page="${i}">${i}</div>`);
          continue;
        }
        arrPage.push(`<div class="page" data-page="${i}">${i}</div>`);
      }

      arrPage.push(`<div class="threeDots" data-page='right'>...</div>`);
    } else if (center <= currentPage) {
      arrPage.push(`<div class="threeDots" data-page='left-end'>...</div>`);

      for (let i = maxPage - 6; i < maxPage; i += 1) {
        if (i === currentPage) {
          arrPage.push(`<div class="page active" data-page="${i}">${i}</div>`);
          continue;
        }
        arrPage.push(`<div class="page" data-page="${i}">${i}</div>`);
      }
    }

    if (currentPage === maxPage) {
      openLastPage();
    }
  }

  refs.paginationAll.insertAdjacentHTML('beforeend', arrPage.join(''));
}

function openFirstPage() {
  refs.paginationPrevious.classList.add('is-disabled');
  refs.paginationFirst.classList.add('active');
}

function openLastPage() {
  refs.paginationNext.classList.add('is-disabled');
  refs.paginationLast.classList.add('active');
}
