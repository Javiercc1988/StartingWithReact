export const getImagen = async () => {
  try {
    const apiKey = "AQlF1mcnM1pBnaszKQlvEWNAZhjm6yBw";
    const resp = await fetch(
      `http://api.giphy.com/v1/gifs/random?api_key=${apiKey}`
    );
    const { data } = await resp.json();

    const { url } = data.images.original;

    return url;
  } catch (error) {
    console.error(`No se ha encontrado la imagen`);
  }
};
