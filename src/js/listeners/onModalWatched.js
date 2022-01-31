export default function onModalWatched(myCard) {
    console.log(myCard);
    console.log(myCard.id);
    console.log(`onModalWatched - myCard is:${myCard}`);
    let watchedCards = [];

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