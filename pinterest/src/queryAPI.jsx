
const clientId = '652Zjwy-Bk7QxiJyZwuWpJxKEw7axxT4Aa0k4ybxO1M';
const endpoint = 'https://api.unsplash.com/search/photos/?';
//  export const randomLoad = "https://api.unsplash.com/randomPhotos/?"

const QueryAPI = (pageLoad, valueSearch) => fetch(`${endpoint}&per_page=20&page=${pageLoad}&query=${valueSearch}&client_id=${clientId}`)
  .then((response) => response.json());
export default QueryAPI;
