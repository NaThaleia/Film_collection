import { modalRefs, myCard } from "../base/refs";
export default function onModalBtn(evt) {
  console.log('onModalWatched in process');

  let btn = "";
  let btnName = "";
// Какая кнопка нажата: "Watched" или "Queue" ?
  if (evt.currentTarget.classList.contains("modal-watched")) {
    btn = "modalWatched";
    btnName = "watched";
  }
  if (evt.currentTarget.classList.contains("modal-queue")) {
    btn = "modalQueue";
    btnName = "queue";
  }
  // Проверка, есть ли этот фильм в Watched или Queue
  if (modalRefs[btn].textContent === `add to ${btnName}`) {
    // если да - добавляем в нужную библиотеку
    addCardToLS(`library-${btnName}`);
    modalRefs[btn].textContent = `remove from ${btnName}`;
    modalRefs[btn].classList.add('selected');
    return;
  }
  // иначе - удаляем из нужной библиотеки
  removeCardFromLS(`library-${btnName}`);
  modalRefs[btn].textContent = `add to ${btnName}`;
  modalRefs[btn].classList.remove('selected');
  return;
}

function addCardToLS(lib) {
  let cards = [];
// проверка - если фильм уже был добавлен, берём данные
  if (JSON.parse(localStorage.getItem(lib)) !== null) {
    cards = JSON.parse(localStorage.getItem(lib));
  }
  cards.unshift(myCard.data); 
  localStorage.setItem(lib, JSON.stringify(cards));
}

function removeCardFromLS(lib) {
  const cards = JSON.parse(localStorage.getItem(lib));
  const indexOfCards = cards.findIndex(el => el.id === myCard.data.id);
  cards.splice(indexOfCards, 1);
  localStorage.setItem(lib, JSON.stringify(cards));
}
