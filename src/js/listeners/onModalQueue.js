import { modalRefs, myCard } from '../base/refs';
export default function onModalQueue() {
  if (modalRefs.modalQueue.textContent === 'add to queue') {
    addCardToLS();
    modalRefs.modalQueue.textContent = 'remove from queue';
    modalRefs.modalQueue.classList.add('selected');
    return;
  }

  if (modalRefs.modalQueue.textContent === 'remove from queue') {
    removeCardFromLS();
    modalRefs.modalQueue.textContent = 'add to queue';
    modalRefs.modalQueue.classList.remove('selected');
    return;
  }
}

function addCardToLS() {
  let queueCards = [];

  if (JSON.parse(localStorage.getItem('library-queue')) === null) {
    queueCards.unshift(myCard.data); // в начало массива
    localStorage.setItem('library-queue', JSON.stringify(queueCards));
    return;
  }
  queueCards = JSON.parse(localStorage.getItem('library-queue'));
  queueCards.unshift(myCard.data); // в начало массива

  localStorage.setItem('library-queue', JSON.stringify(queueCards));
}

function removeCardFromLS() {
  const queueCards = JSON.parse(localStorage.getItem('library-queue'));
  const indexInQueueCards = queueCards.findIndex(el => el.id === myCard.data.id);

  queueCards.splice(indexInQueueCards, 1);

  localStorage.setItem('library-queue', JSON.stringify(queueCards));
}
