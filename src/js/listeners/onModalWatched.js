export default function onModalWatched(myCard, modalRefs) {
    console.log("onModalWatched in process");

    // Проверка, есть ли этот фильм в Watched
    if (modalRefs.modalWatched.textContent === "add to watched") {
        addCardToLS(myCard);
        modalRefs.modalWatched.textContent = "remove from watched";
        modalRefs.modalWatched.classList.add("selected");
        return;
    }
        if (modalRefs.modalWatched.textContent === "remove from watched") {
        removeCardToLS(myCard);
        modalRefs.modalWatched.textContent = "add to watched";
        modalRefs.modalWatched.classList.remove("selected");
        return;
    }
    function addCardToLS(myCard) {
        let watchedCards = [];

        if (JSON.parse(localStorage.getItem('library-watched')) === null) {
            watchedCards.push(myCard);
            localStorage.setItem('library-watched', JSON.stringify(watchedCards));
            return;
        }
        watchedCards = JSON.parse(localStorage.getItem('library-watched'));
        watchedCards.push(myCard);

        localStorage.setItem('library-watched', JSON.stringify(watchedCards));
    
        return;
    }
}
function removeCardToLS(myCard) {
    const watchedCards = JSON.parse(localStorage.getItem('library-watched'));
    const indexInWatchedCards = watchedCards.findIndex(el => (el.id === myCard.id));
    console.log(indexInWatchedCards);
    watchedCards.splice(indexInWatchedCards, 1);

    localStorage.setItem('library-watched', JSON.stringify(watchedCards));
    
        return;
}