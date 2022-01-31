export default function onModalQueue(myCard) {
    console.log(`onModalQueue - myCard is:${myCard}`);
    localStorage.setItem('LibraryQueue', JSON.stringify(myCard));
    return;
}