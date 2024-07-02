import { fireEvent, render, screen } from "@testing-library/react";
import { CounterAppMejorado } from "../src/CounterAppMejorado";

describe("Pruebas componente CounterAppMejorado", () => {
  const initialValue = 100;

  test("Debe hacer match con el snapshot", () => {
    const { container } = render(<CounterAppMejorado valorInicial={22} />);
    expect(container).toMatchSnapshot();
  });

  test("El valor inicial debe ser 100", () => {
    render(<CounterAppMejorado valorInicial={initialValue} />);
    expect(screen.getByText(`Valor: ${initialValue}`)).toBeTruthy();
  });

  test("Debe incrementar en 1 el contador", () => {
    render(<CounterAppMejorado valorInicial={initialValue} />);
    fireEvent.click(screen.getByText("+1"));
    expect(screen.getByText("Valor: 101")).toBeTruthy();
  });

  test("debe de decrementar con el botón -1", () => {
    render(<CounterAppMejorado valorInicial={initialValue} />);
    fireEvent.click(screen.getByText("-1"));
    expect(screen.getByText("Valor: 99")).toBeTruthy();
  });

  test("debe hacer reset", () => {
    render(<CounterAppMejorado valorInicial={initialValue} />);
    fireEvent.click(screen.getByText("+1"));
    fireEvent.click(screen.getByText("+1"));
    fireEvent.click(screen.getByText("+1"));

    fireEvent.click(screen.getByRole("button", { name: "btn-reset" }));
    expect(screen.getByText("Valor: 100")).toBeTruthy();
  });
});
