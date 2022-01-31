export default function onModalQueue(myCard, modalRefs) {

    // console.log(myCard.id);
    // console.log(`onModalQueue - myCard is:${myCard}`);
    if (modalRefs.modalQueue.textContent === "add to queue") {
        addCardToLS(myCard);
        modalRefs.modalQueue.textContent = "remove from queue";
        return;
    }
    if (modalRefs.modalQueue.textContent === "remove from queue") {
        removeCardToLS(myCard);
        modalRefs.modalQueue.textContent = "add to queue";
        return;
    }

    function addCardToLS(myCard) {
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
    function removeCardToLS(myCard) {
    const queueCards = JSON.parse(localStorage.getItem('library-queue'));
    const indexInQueueCards = queueCards.findIndex(el => (el.id === myCard.id));
    console.log("index of Queue Card:", indexInQueueCards);
    queueCards.splice(indexInQueueCards, 1);

    localStorage.setItem('library-queue', JSON.stringify(queueCards));
    
        return;
}
}
