import { render, screen } from "@testing-library/react";
import { GifGrid } from "../../src/components/GifGrid";
import { useFetchGifs } from "../../src/hooks/useFetchGifs";

// Mockear un hook completo personalizado
jest.mock("../../src/hooks/useFetchGifs");

describe("Pruebas en <GifGrid />", () => {
  const category = "Dragon ball";

  test("Debe mostrar el loading al inicio ", () => {
    // Mockeamos la respuesta que se esperaría de este hook
    useFetchGifs.mockReturnValue({
      images: [],
      isLoading: true,
    });

    render(<GifGrid category={category} />);
    expect(screen.getByText("Cargando..."));
    expect(screen.getByText(category));
  });

  test("Debe mostrar los items cuando cargan las imagenes de useFetchGifs", () => {
    const gifs = [
      {
        id: "asdad",
        title: "Prueba",
        url: "La urllllllllll",
      },
      {
        id: "asdadsss",
        title: "Pruebsssssa",
        url: "URL",
      },
    ];

    // Mockeamos la respuesta que se esperaría de este hook
    useFetchGifs.mockReturnValue({
      images: gifs,
      isLoading: true,
    });

    render(<GifGrid category={category} />);

    // Vamos a comprobar que todas las imagenes del componente son más de 2 ya que mandamos 2 gifs
    expect( screen.getAllByRole('img').length ).toBe(2);
  });
});
