const BASE_URL = 'https://api.themoviedb.org';
const API_KEY = 'e2b1fd67e69bae9f083d3c611e2b6f41';

export default function fetchApiGenresList() {
  return fetch(`${BASE_URL}/3/genre/movie/list?api_key=${API_KEY}`)
    .then(r => r.json())
    .then(data => {
      localStorage.setItem('genres', JSON.stringify(data.genres));
      return data;
    })
    .catch(data => data);
}
