import {
  getHeroeById,
  getHeroesByOwner,
} from "../../src/base-pruebas/08-imp-exp";
import heroes from "../../src/data/heroes";

describe("Pruebas de 08-imp-exp", () => {
  test("Devuelve héroe por ID", () => {
    const ID = 1;
    const hero = getHeroeById(ID);

    // Comprobación de que se obtiene el héroe correcto
    expect(hero).toEqual({ id: 1, name: "Batman", owner: "DC" });
  });

  test("Devuelve undefined si no existe el héroe", () => {
    const ID = 100;
    const hero = getHeroeById(ID);

    // Comprobación de que se devuelve un valor falsy (null, undefined, false)
    expect(hero).toBeFalsy();
  });

  test("Devuelve héroes de DC", () => {
    const owner = "DC";
    const heroes = getHeroesByOwner(owner);

    // Comprobación de que se obtienen los héroes correctos y en la cantidad correcta
    expect(heroes.length).toBe(3);
    expect(heroes).toEqual([
      { id: 1, name: "Batman", owner: "DC" },
      { id: 3, name: "Superman", owner: "DC" },
      { id: 4, name: "Flash", owner: "DC" },
    ]);
  });

  test("Devuelve héroes de Marvel", () => {
    const owner = "Marvel";
    const heroesArr = getHeroesByOwner(owner);

    // Comprobación de que se obtienen los héroes correctos y en la cantidad correcta
    expect(heroesArr.length).toBe(2);
    expect(heroesArr).toEqual(heroes.filter((heroe) => heroe.owner === owner));
  });
});
