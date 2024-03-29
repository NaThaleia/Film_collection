import { fetchApiWeek } from '../fetch/fetchApi';
import renderCardsHero from './renderCardsHero';
import renderPagination from './renderPagination';
import { spinner } from './spinner';

/* Функция pageLoading на входе принимает значение страници которое запрашивает на сервере и рендерит в блоке Hero карточки фильмов ТОП за Week и пагинацию */
export default function pageLoading(page = 1) {
  spinner('start');
  fetchApiWeek(page)
    .then(data => {
      const settings = {
        page: data.page,
        fetch: 'Week',
      };
      localStorage.setItem('page', JSON.stringify(settings));
      localStorage.setItem('cards', JSON.stringify(data.results)); // записывает пришедший массив объектов с бэкенда
      return data;
    })
    .then(data => {
      spinner('stop');
      renderCardsHero(data.results);
      renderPagination(data.total_pages, data.page);
      return data;
    })
    .catch(data => {
      return data;
    });
}
