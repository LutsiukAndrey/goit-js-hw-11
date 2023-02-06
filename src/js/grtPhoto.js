import axios from 'axios';
import { load } from '../index.js';

const serchParams = {
  KEY: '30404662-cb888472014add4e417cbeee2',
};

export async function getPhoto(search, perPage, page) {
  const url = `https://pixabay.com/api/?key=${serchParams.KEY}&q=${search}&image_type=photo&pretty=true&per_page=${perPage}&page=${page}&safesearch=true`;
  try {
    const response = await axios.get(url);

    load(response.data);
    console.log(response.data);
  } catch (error) {
    console.error(error);
  }
}
