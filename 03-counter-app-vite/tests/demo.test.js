// describe sirve para agrupar las pruebas y tener un mejor feedback en la consola
describe("Pruebas en <DemoComponent />", () => {
  test("Esta prueba no debe de fallar", () => {
    //1. Inicialización
    const msg1 = "Hola mundo";
    //2. Estímulo
    const msg2 = msg1.trim();

    //3. Observar el comportamiento
    expect(msg1).toBe(msg2); // espera que el parametro 1 sea igual que el parametro 2
  });
});
