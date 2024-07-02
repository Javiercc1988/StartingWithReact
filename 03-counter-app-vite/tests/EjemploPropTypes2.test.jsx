import { render, screen } from "@testing-library/react";
import { EjemploPropTypes } from "../src/EjemploPropTypes";

describe("Pruebas en EjemploPropTypes", () => {
  const title = "Hola, soy Goku!";
  const subtitle = "Soy un subtitulooo";

  test("Debe hacer match con el snapshot", () => {
    const { container } = render(<EjemploPropTypes title={title} />);

    expect(container).toMatchSnapshot();
  });

  test('Debe mostrar el mensaje "Hola, soy Goku!', () => {
    render(<EjemploPropTypes title={title} />);
    expect(screen.getByText(title)).toBeTruthy();
  });

  test("Debe de mostrar el titulo en un h1", () => {
    render(<EjemploPropTypes title={title} />);
    expect(screen.getByRole("heading", { level: 1 }).innerHTML).toContain(title);
  });

  test("Debe mostrar el subtitulo enviado por props", () => {
    render(<EjemploPropTypes title={title} subtitle={subtitle} />);
    expect(screen.getAllByText(subtitle).length).toBe(2);
  });
});
