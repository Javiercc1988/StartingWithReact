import { render, screen } from "@testing-library/react";
import { GifItem } from "../../src/components/GifItem";

describe("Prueba componente GifItem", () => {
  const url = "http://localhost/url_de_pruebas";
  const title = "Titulo de pruebas";

  test("Debe hacer match con el snapshot ", () => {
    const { container } = render(<GifItem url={url} title={title} />);
    expect(container).toMatchSnapshot();
  });

  test("Debe mostrar la imagen con el URL y el ALT indicado", () => {
    render(<GifItem url={url} title={title} />);
    // screen.debug() Nos permite imprimir por pantalla el código del componente

    // Forma larga de hacerlo
    // expect(screen.getByRole("img").src).toBe(url);
    // expect(screen.getByRole("img").alt).toBe(title);

    const { src, alt } = screen.getByRole("img");
    expect(src).toBe(url);
    expect(alt).toBe(title);
    expect(alt).toBe(title);
  });

  test("Debe de mostrar el titulo en el componente", () => {
    render(<GifItem url={url} title={title} />);
    expect(screen.getByText(title)).toBeTruthy();
  });

  test("El article debe tener la clase 'card' ", () => {
    render(<GifItem url={url} title={title} />);
    expect(screen.getByRole("article").className).toBe("card");
  });
});
