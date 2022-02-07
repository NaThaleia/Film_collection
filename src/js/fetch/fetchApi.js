import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org';
const API_KEY = 'e2b1fd67e69bae9f083d3c611e2b6f41';

export async function fetchApiGenresList() {
  const options = {
    params: {
      api_key: API_KEY,
    },
  };

  try {
    const response = await axios(`/3/genre/movie/list`, options);
    localStorage.setItem('genres', JSON.stringify(response.data.genres));
    return response.data;
  } catch (error) {
    return error;
  }
}

export async function fetchApiWeek(page = 1) {
  const options = {
    params: {
      api_key: API_KEY,
      page: `${page}`,
    },
  };

  try {
    const response = await axios(`/3/trending/movie/week`, options);
    return response.data;
  } catch (error) {
    return error;
  }
}

export async function fetchApiDay(page = 1) {
  const options = {
    params: {
      api_key: API_KEY,
      page: `${page}`,
    },
  };

  try {
    const response = await axios(`/3/trending/movie/day`, options);
    return response.data;
  } catch (error) {
    return error;
  }
}

export async function fetchApiSearch(query, page) {
  const options = {
    params: {
      api_key: API_KEY,
      page: `${page}`,
      query: `${query}`,
    },
  };

  try {
    const response = await axios(`/3/search/movie`, options);
    return response.data;
  } catch (error) {
    return error;
  }
}
