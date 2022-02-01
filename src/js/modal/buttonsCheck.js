export function watchedCheck(myCardId, modalRefs) {

    const libWatched = JSON.parse(localStorage.getItem('library-watched'));
    if (!libWatched) return; // Если в ЛС пусто
    const isHere = libWatched.find(el => (el.id == myCardId));
  if (!isHere) return; // Если в ЛС нет такого кино
  modalRefs.modalWatched.textContent = "remove from watched";
  modalRefs.modalWatched.classList.add("selected"); 
    return;
}
export function queueCheck(myCardId, modalRefs) {
    const libQueue = JSON.parse(localStorage.getItem('library-queue'));
    if (!libQueue) return; // Если в ЛС пусто
    const isHere = libQueue.find(el => (el.id == myCardId));
    if (!isHere) return; // Если в ЛС нет такого кино
  modalRefs.modalQueue.textContent = "remove from queue";
  modalRefs.modalQueue.classList.add("selected");
    return;
}
