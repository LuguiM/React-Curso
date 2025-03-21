import { fireEvent, render, screen } from "@testing-library/react";
import { AddCategory } from "../../src/components";


describe('Pruebas en AddCategory', () => {

    test('debe de cambiar el valor de la caja de texto', () => {
        render(<AddCategory onNewCategory={() => {  }} />)

        const input = screen.getByRole('textbox');

        fireEvent.input(input, { target: { value: 'Saitama' }});

        expect(input.value).toBe('Saitama');
    })

    test('Debe de llamar on NewCategory si el input tiene un valor', () => {
      
        const inputValue = 'Saitama';
        const onNewCategory = jest.fn();

        //TODO: ???
        render(<AddCategory onNewCategory={onNewCategory} />)

        const input = screen.getByRole('textbox');
        const form = screen.getByRole('form');

        fireEvent.input(input, { target: { value: inputValue}});
        fireEvent.submit(form);

        expect(input.value).toBe('');
        
        expect(onNewCategory).toHaveBeenCalled();
        expect(onNewCategory).toHaveBeenLastCalledWith(inputValue);

    })

    test('No debe de llamar on NewCategory si el input esta vacio', () => {
        const onNewCategory = jest.fn();
        render(<AddCategory onNewCategory={onNewCategory} />)

        const form = screen.getByRole('form');
        fireEvent.submit(form);

        expect(onNewCategory).not.toHaveBeenCalled();
    })
    

});
