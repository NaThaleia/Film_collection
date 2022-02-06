export function buttonsCheck(myCardId, modalRef, library, textToChange) {

  const libData = JSON.parse(localStorage.getItem(library));
  
  if (!libData) return; // Если в ЛС пусто
  const isHere = libData.find(el => (el.id == myCardId));
  if (!isHere) return; // Если в ЛС нет такого кино

 // проверяем соответств. кнопку
  modalRef.textContent = `remove from ${textToChange}`;
  modalRef.classList.add("selected");
}
  
// export function queueCheck(myCardId, modalRefs) {
//     const libQueue = JSON.parse(localStorage.getItem('library-queue'));
//     if (!libQueue) return; // Если в ЛС пусто
//     const isHere = libQueue.find(el => (el.id == myCardId));
//     if (!isHere) return; // Если в ЛС нет такого кино
//   modalRefs.modalQueue.textContent = "remove from queue";
//   modalRefs.modalQueue.classList.add("selected");
//     return;
// }
