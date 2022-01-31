export default function onModalWatched(myCard) {
    console.log(`onModalWatched - myCard is:${myCard}`);
    localStorage.setItem('LibraryWatched', JSON.stringify(myCard));
    return;
}