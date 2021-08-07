import axios from 'axios';

async function fetchData() {
  const url = 'https://api.punkapi.com/v2/beers';
  const { data } = await axios.get(url);
  return data;
}

export default fetchData;
