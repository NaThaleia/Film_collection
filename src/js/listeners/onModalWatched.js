import { modalRefs, myCard } from "../base/refs";

export default function onModalWatched() {
  console.log('onModalWatched in process');

  // Проверка, есть ли этот фильм в Watched
  if (modalRefs.modalWatched.textContent === 'add to watched') {
    addCardToLS();
    modalRefs.modalWatched.textContent = 'remove from watched';
    modalRefs.modalWatched.classList.add('selected');
    return;
  }

  if (modalRefs.modalWatched.textContent === 'remove from watched') {
    removeCardFromLS();
    modalRefs.modalWatched.textContent = 'add to watched';
    modalRefs.modalWatched.classList.remove('selected');
    return;
  }
}

function addCardToLS() {
  let watchedCards = [];

  if (JSON.parse(localStorage.getItem('library-watched')) === null) {
    watchedCards.unshift(myCard.data);
    localStorage.setItem('library-watched', JSON.stringify(watchedCards));
    return;
  }
  watchedCards = JSON.parse(localStorage.getItem('library-watched'));
  watchedCards.unshift(myCard.data);

  localStorage.setItem('library-watched', JSON.stringify(watchedCards));
}

function removeCardFromLS() {
  const watchedCards = JSON.parse(localStorage.getItem('library-watched'));
  const indexInWatchedCards = watchedCards.findIndex(el => el.id === myCard.data.id);
  console.log(indexInWatchedCards);
  watchedCards.splice(indexInWatchedCards, 1);

  localStorage.setItem('library-watched', JSON.stringify(watchedCards));
}
