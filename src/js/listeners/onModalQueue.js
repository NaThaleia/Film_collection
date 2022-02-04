export default function onModalQueue(myCard, modalRefs) {

    if (modalRefs.modalQueue.textContent === "add to queue") {
        addCardToLS(myCard);
        modalRefs.modalQueue.textContent = "remove from queue";
        modalRefs.modalQueue.classList.add("selected");
        return;
    }
    if (modalRefs.modalQueue.textContent === "remove from queue") {
        removeCardToLS(myCard);
        modalRefs.modalQueue.textContent = "add to queue";
        modalRefs.modalQueue.classList.remove("selected");
        return;
    }

    function addCardToLS(myCard) {
        let queueCards = [];
    
        if (JSON.parse(localStorage.getItem('library-queue')) === null) {
            queueCards.unshift(myCard); // в начало массива
            localStorage.setItem('library-queue', JSON.stringify(queueCards));
            return;
        }
        queueCards = JSON.parse(localStorage.getItem('library-queue'));
        queueCards.unshift(myCard); // в начало массива

        localStorage.setItem('library-queue', JSON.stringify(queueCards));
    
        return;
    }
    function removeCardToLS(myCard) {
    const queueCards = JSON.parse(localStorage.getItem('library-queue'));
    const indexInQueueCards = queueCards.findIndex(el => (el.id === myCard.id));

    queueCards.splice(indexInQueueCards, 1);

    localStorage.setItem('library-queue', JSON.stringify(queueCards));
    
        return;
}
}
