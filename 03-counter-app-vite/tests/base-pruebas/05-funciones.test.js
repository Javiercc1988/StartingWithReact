import { getUser, getUsuarioActivo } from "../../src/base-pruebas/05-funciones";

describe("Pruebas de 05-funciones", () => {
  // Prueba para la función getUser
  test("getUser debe retornar un objeto", () => {
    // Objeto esperado
    const testUser = {
      uid: "ABC123",
      username: "El_Papi1502",
    };

    // Llamada a la función getUser
    const user = getUser();

    // Comparación del resultado con el objeto esperado
    expect(testUser).toStrictEqual(user); // toStrictEqual se usa para comparar objetos profundamente
  });

  // Prueba para la función getUsuarioActivo
  test("getUsuarioActivo debe retornar un objeto", () => {
    // Nombre de prueba
    const name = "Javi";

    // Llamada a la función getUsuarioActivo con el nombre de prueba
    const activeUser = getUsuarioActivo(name);

    // Comparación del resultado con el objeto esperado
    expect(activeUser).toStrictEqual({
      uid: "ABC567",
      username: name,
    });
  });
});
