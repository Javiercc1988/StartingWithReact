import { renderHook, waitFor } from "@testing-library/react";
import { useFetchGifs } from "../../src/hooks/useFetchGifs";

describe("Pruebas en el hook useFetchGifs", () => {
  test("Debe regresar el estado inicial", () => {
    // Los hooks necesitan parte del ciclo de vida de los functional components
    //  Para llamar al custom hook necesitaremos usar el método renderHook

    const { result } = renderHook(() => useFetchGifs("Dragon ball"));
    const { images, isLoading } = result.current;

    expect(images.length).toBe(0);
    expect(isLoading).toBeTruthy();
  });

  test("Debe de retornar un arreglo de imagenes y isLoading en false", async () => {
    // Ahora necesitamos que el hook se ejecute y haga la llamada a la api que tiene dentro para obtener las imagenes
    // Para ello usamos el método waitFor
    const { result } = renderHook(() => useFetchGifs("Dragon ball"));

    // Esperamos que el resultado de las imagenes cambie
    await waitFor(() =>
      expect(result.current.images.length).toBeGreaterThan(0)
    );

    // Una vez tenemos la data hacemos las comprobaciones
    const { images, isLoading } = result.current;

    expect(images.length).toBeGreaterThan(0);
    expect(isLoading).toBeFalsy();
  });
});
