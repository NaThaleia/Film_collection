export default function putSettings(page, fetch) {
    const settings = {
    page: page,
    fetch: fetch,
  };
    localStorage.setItem('page', JSON.stringify(settings));
    return;
}