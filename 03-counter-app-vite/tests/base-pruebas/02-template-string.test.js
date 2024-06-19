import { getSaludo } from "../../src/base-pruebas/02-template-string";

describe("Pruebas en 02-template-string-tests", () => {
  test('getSaludo debe retornar "Hola Javier"', () => {
    const name = "Javier";

    const msg = getSaludo(name);

    expect(msg).toBe(`Hola ${name}`);
  });
});
