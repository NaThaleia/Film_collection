import { modalRefs, myCard } from "../base/refs";
export default function onModalWatched(evt) {
  console.log('onModalWatched in process');
  let btn = "";
  let source = "";

  if (evt.currentTarget.classList.contains("modal-watched")) {
    btn = "modalWatched";
    source = "library-watched";
  }
  if (evt.currentTarget.classList.contains("modal-queue")) {
    btn = "modalQueue";
    source = "library-queue";
  }
  // Проверка, есть ли этот фильм в Watched
  if (modalRefs[btn].textContent === 'add to queue' || modalRefs[btn].textContent === 'add to watched') {
    addCardToLS(source);
    modalRefs[btn].textContent = 'remove from watched';
    modalRefs[btn].classList.add('selected');
    return;
  }

  removeCardFromLS(source);
  modalRefs[btn].textContent = 'add to watched';
  modalRefs[btn].classList.remove('selected');
  return;

}

function addCardToLS(source) {
  let watchedCards = [];

  if (JSON.parse(localStorage.getItem(source)) === null) {
    watchedCards.unshift(myCard.data);
    localStorage.setItem(source, JSON.stringify(watchedCards));
    return;
  }
  watchedCards = JSON.parse(localStorage.getItem(source));
  watchedCards.unshift(myCard.data);

  localStorage.setItem(source, JSON.stringify(watchedCards));
}

function removeCardFromLS(source) {
  const watchedCards = JSON.parse(localStorage.getItem(source));
  const indexInWatchedCards = watchedCards.findIndex(el => el.id === myCard.data.id);
  watchedCards.splice(indexInWatchedCards, 1);

  localStorage.setItem(source, JSON.stringify(watchedCards));
}
