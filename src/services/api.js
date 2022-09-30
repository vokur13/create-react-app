import axios from 'axios';

export const fetchArticlesWithQuery = async searchQuery => {
  console.log('searchQuery', searchQuery);
  const response = axios.get(`/search?query=${searchQuery}`);
  console.log(response.data);
  //   return response.data.hits;
};
