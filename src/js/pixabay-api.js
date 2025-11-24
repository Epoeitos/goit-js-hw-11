
import axios from 'axios';

export function getImagesByQuery(query) {
 return axios
    .get('https://pixabay.com/api/', {
      params: {
        key: '53391226-a2ec73fe425479568eec525bb',
        q: query,
        image_type: 'photo',
        orientation: 'horizontal',
        safesearch: 'true',
      },
    })
    .then(response => {
      return response.data;
    })
    .catch(error => console.log(error));
  return [];
}