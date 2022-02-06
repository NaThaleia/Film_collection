export default function isArrEmpty(arr, refs) {
    if (!arr || !arr.length) {
      refs.pagination.classList.add('hidden');
      refs.hero.classList.add('library-foto');
      refs.empty.classList.remove('hidden');
      console.log('no data');
      return true;
    }
  }