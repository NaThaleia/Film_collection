const BASE_URL = 'https://api.themoviedb.org';
const API_KEY = 'e2b1fd67e69bae9f083d3c611e2b6f41';

export default function fetchApiSearch(query, page) {
  return fetch(`${BASE_URL}/3/search/movie?api_key=${API_KEY}&query=${query}&page=${page}`)
    .then(r => r.json())
    .catch(data => data);
}
