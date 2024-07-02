import { render } from "@testing-library/react";
import { EjemploPropTypes } from "../src/EjemploPropTypes";

describe("Pruebas en EjemploPropTypes", () => {
  // test("Debe hacer match con el snapshot", () => {
  //   const titulo = "Hola soy yo!!!!";

  //   const { container } = render(<EjemploPropTypes title={titulo} />);
  //   expect(container).toMatchSnapshot();
  // });

  test("Debe de mostrar el titulo en un h1", () => {
    const titulo = "Hola soy goku";
    const { container, getByText, getByTestId } = render(
      <EjemploPropTypes title={titulo} />
    );
    expect(getByText(titulo)).toBeTruthy();

    // const h1 = container.querySelector('h1');
    // expect(h1.innerHTML).toBe('Hola soy goku');
    // expect(h1.innerHTML).toContain(titulo);

    expect(getByTestId("test-title").innerHTML).toBeTruthy();
  });

  test("Debe de mostrar el subtitulo enviado por props", () => {
    const title = "Hola soy goku";
    const subtitle = "Soy el subtitulo";

    const { getByText } = render(
      <EjemploPropTypes title={title} subtitle={subtitle} />
    );

    expect(getByText(subtitle)).toBeTruthy();
  });
});
