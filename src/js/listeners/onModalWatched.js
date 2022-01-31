export default function onModalWatched(myCard, modalRefs) {
    console.log("onModalWatched in process");
    // console.log(myCard.id);
    // console.log(`onModalWatched - myCard is:${myCard}`);

    // Проверка, есть ли этот фильм в Watched
    console.log(modalRefs.modalWatched.textContent)
    if (modalRefs.modalWatched.textContent === "add to watched") {
        console.log("добавляем карточку")
        addCardToLS(myCard);
        modalRefs.modalWatched.textContent = "remove from watched";
        return;
    }
        if (modalRefs.modalWatched.textContent === "remove from watched") {
        removeCardToLS(myCard);
        modalRefs.modalWatched.textContent = "add to watched";
        return;
    }
    function addCardToLS(myCard) {
        let watchedCards = [];
        console.log("addCardToLS in process");
        if (JSON.parse(localStorage.getItem('library-watched')) === null) {
            watchedCards.push(myCard);
            localStorage.setItem('library-watched', JSON.stringify(watchedCards));
            return;
        }
        watchedCards = JSON.parse(localStorage.getItem('library-watched'));
        watchedCards.push(myCard);

        console.log(watchedCards);
        localStorage.setItem('library-watched', JSON.stringify(watchedCards));
    
        return;
    }
}
function removeCardToLS(myCard) {
    const watchedCards = JSON.parse(localStorage.getItem('library-watched'));
    const indexInWatchedCards = watchedCards.findIndex(el => (el.id === myCard.id));
    console.log(indexInWatchedCards);
    watchedCards.shift(indexInWatchedCards);

    localStorage.setItem('library-watched', JSON.stringify(watchedCards));
    
        return;
}