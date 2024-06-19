import { retornaArreglo } from "../../src/base-pruebas/07-deses-arr";

describe("Pruebas de 07-deses-arr", () => {
  test("Debe devolver un string y un número", () => {
    // Llamada a la función retornaArreglo
    const [letters, numbers] = retornaArreglo();

    // Forma 1: Comprobación de tipos utilizando typeof
    expect(typeof letters).toBe("string");
    expect(typeof numbers).toBe("number");

    // Forma 2: Comprobación de tipos utilizando expect.any()
    expect(letters).toEqual(expect.any(String));
    expect(numbers).toEqual(expect.any(Number));
  });
});
