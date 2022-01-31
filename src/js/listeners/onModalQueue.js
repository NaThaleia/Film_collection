export default function onModalQueue(myCard) {
    console.log(myCard);
    console.log(myCard.id);
    console.log(`onModalQueue - myCard is:${myCard}`);
    let queueCards = [];
    
    if (JSON.parse(localStorage.getItem('library-queue')) === null) {
        queueCards.push(myCard);
        localStorage.setItem('library-queue', JSON.stringify(queueCards));
        return;
    }
    queueCards = JSON.parse(localStorage.getItem('library-queue'));
    queueCards.push(myCard);
    
    console.log(queueCards);
    localStorage.setItem('library-queue', JSON.stringify(queueCards));
    
    return;
}