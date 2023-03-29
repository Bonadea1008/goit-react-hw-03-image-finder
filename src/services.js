const BASE_URL = 'https://pixabay.com/api/';
const API_KEY = '33388903-e4d75ee587d4fa8faa2060a30';

export const fetchImages = (searchQuery, page) => {
  return fetch(
    `${BASE_URL}?key=${API_KEY}&q=${searchQuery}&page=${page}&image_type=photo&orientation=horizontal&per_page=12`
  ).then(response => {
    if (response.ok) {
      return response.json();
    }
    return Promise.reject(new Error('There is no images'));
  });
};
