import { render, screen, fireEvent } from "@testing-library/react";
import {GifExpertApp} from '../src/GifExpertApp'

describe('Pruebas en GifExpertApp', () => {
    test('debe mostrar el titulo Gif Expert App ', () => {

        render(<GifExpertApp/>)
    
        const titulo = screen.getByText('GifExpertApp');
    
        expect(titulo).toBeTruthy();
    
      });
    
    
      test('debe agregar una nueva categoria', () => {
    
        render(<GifExpertApp/>);
    
        const input = screen.getByRole('textbox');
    
        const form = screen.getByRole('form');
    
        fireEvent.input(input, {target:{value: "Xd"}});
    
        fireEvent.submit(form);
    
        const titles = screen.getAllByLabelText('category-title');
    
        expect(titles.length).toBeGreaterThan(1);
    
      });
    
    
      test('no debe agregar nueva categoria si ya existe', () => {
    
        const category = "Meta";
    
        render(<GifExpertApp/>);
    
        const input = screen.getByRole('textbox');
    
        const form = screen.getByRole('form');
    
        fireEvent.input(input, {target:{value: category}});
    
        fireEvent.submit(form);
    
        fireEvent.input(input, {target:{value: category}});
    
        fireEvent.submit(form);
    
        expect(screen.getAllByText(category).length).toBe(1);
    
      });
});
