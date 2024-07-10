import { fireEvent, render, screen } from "@testing-library/react";
import { AddCategory } from "../../src/components/AddCategory";

describe("Pruebas en <AddCategory />", () => {
  test("Debe cambiar el valor del input ", () => {
    // Renderizar el componente
    render(<AddCategory onAddNewCategory={() => {}} />);

    // Como solo hay 1 input en el componente es sencillo lozalizarlo por el textbox
    const input = screen.getByRole("textbox");
    screen.debug();

    // Disparamos el evento. Como nuestra función original espera un evento se le puede pasar por parámetro
    fireEvent.input(input, { target: { value: "Dragon Ball" } });

    // Comprobamos el resultado
    expect(input.value).toBe("Dragon Ball");
  });



  test("Debe de llamar onNewCategory si el input tiene valor", () => {

    // Definimos las constantes
    const inputValue = 'Dragon Ball';
    
    // Esto nos permite definir una función mock para simular o comprobar la que recibe el componente original
    const onNewCategory = jest.fn();

    // Renderizar el componente
    render(<AddCategory onAddNewCategory={ onNewCategory } />);

    // Como solo hay 1 input en el componente es sencillo lozalizarlo por el textbox
    const input = screen.getByRole("textbox");
    const form = screen.getByRole("form");

    // Disparamos el evento como en la prueba anterior
    fireEvent.input(input, { target: { value: "Dragon Ball" } });
    fireEvent.submit(form);
    // screen.debug();

    expect(input.value).toBe("");

    // Comprobar que se llama
    expect( onNewCategory ).toHaveBeenCalled(); 
    // Comprobar que se llama 1 vez solo
    expect( onNewCategory ).toHaveBeenCalledTimes(1);
    // Comprobar que se llama con el valor del inputValue
    expect( onNewCategory ).toHaveBeenCalledWith( inputValue );
  });


  
  test('No debe de llamar onNewCategory si el input está vacío', () => {

    // Definimos la función mock
    const onNewCategory = jest.fn();

    // Renderizar el componente
    render(<AddCategory onAddNewCategory={ onNewCategory } />);

    // Como solo hay 1 input en el componente es sencillo lozalizarlo por el textbox
    const form = screen.getByRole("form");

    // Disparamos el evento como en la prueba anterior
    fireEvent.submit(form);

    // Comprobar que se llama
    expect( onNewCategory ).not.toHaveBeenCalled(); 
  });
});
