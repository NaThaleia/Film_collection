export function watchedCheck(myCardId, modalRefs) {

  const libWatched = JSON.parse(localStorage.getItem('LibraryWatched'));

  if (libWatched === null) return;
  
    if (libWatched.id == myCardId) {
        console.log('Ура, такой фильм у нас уже есть в ПРОСМОТРЕННЫХ');
        modalRefs.modalWatched.textContent = "remove from Watched";
    }

}
export function queueCheck(myCardId, modalRefs) {
    const libQueue = JSON.parse(localStorage.getItem('LibraryQueue'));

    if (libQueue === null) return;
  
    if (libQueue.id == myCardId) {
        console.log('Ура, такой фильм у нас уже есть В ОЧЕРЕДИ');
        modalRefs.modalQueue.textContent = "remove from Queue";
    }
    
}
