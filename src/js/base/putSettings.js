export default function putSettings(page, fetch) {
    const settings = {page,fetch}; // shorthand
    localStorage.setItem('page', JSON.stringify(settings));
    return;
}