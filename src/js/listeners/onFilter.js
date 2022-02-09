import pageLoadingFilter from '../base/pageLoadingFilter';

export default function onFilter(e) {
  const filter = {
    ...JSON.parse(localStorage.getItem('filter')),
    [`${e.target.id}`]: e.target.value,
  };

  localStorage.setItem('filter', JSON.stringify(filter));

  pageLoadingFilter(1, filter);
}
