import { getGifs } from "../../src/helpers/GetGifs";

describe("Pruebas en GetGifs", () => {
  test("Debe de retornar un arreglo de gifs", async () => {
    // Hacer la llamada
    const gifs = await getGifs("Dragon ball");

    // Esperar que la función tengas más de 0 datos
    expect(gifs.length).toBeGreaterThan(0);

    // Comprobar que el primer elemento del array cumple con el tipado esperado
    expect(gifs[0]).toEqual({
      id: expect.any(String),
      title: expect.any(String),
      url: expect.any(String),
    });
  });
});
