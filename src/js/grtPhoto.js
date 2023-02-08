import axios from 'axios';

const serchParams = {
  KEY: '30404662-cb888472014add4e417cbeee2',
};

export async function getPhoto(search, perPage, page) {
  const url = `https://pixabay.com/api/?key=${serchParams.KEY}&q=${search}&image_type=photo&pretty=true&per_page=${perPage}&page=${page}&safesearch=true`;
  try {
    const { data } = await axios.get(url);

    return data;
  } catch (error) {}
}
