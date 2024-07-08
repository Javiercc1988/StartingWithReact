export const getGifs = async (category) => {
  const URL = `https://api.giphy.com/v1/gifs/search?api_key=AQlF1mcnM1pBnaszKQlvEWNAZhjm6yBw&q=${category}&limit=10`;
  const resp = await fetch(URL);
  const { data } = await resp.json();

  const gifs = data.map((gif) => ({
    id: gif.id,
    title: gif.title,
    url: gif.images.downsized_medium.url,
  }));

  return gifs;
};
