export default function paginationDataCalc(arr, page, PAGE_SIZE) {
  const totalPage = Math.ceil(arr.length / PAGE_SIZE);
  const position = (page - 1) * PAGE_SIZE;

  arr = arr.splice(position, PAGE_SIZE);
    localStorage.setItem('cards', JSON.stringify(arr));
    return [ arr, totalPage ];
}