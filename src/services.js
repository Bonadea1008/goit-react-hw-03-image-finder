const BASE_URL = 'https://pixabay.com/api/';
const API_KEY = '33388903-e4d75ee587d4fa8faa2060a30';

export const fetchImages = searchQuery => {
  return fetch(
    `${BASE_URL}?key=${API_KEY}&q=${searchQuery}&page=1&image_type=photo&orientation=horizontal&per_page=12`
  );
};
