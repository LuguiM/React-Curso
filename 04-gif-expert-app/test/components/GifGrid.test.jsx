import { render, screen } from "@testing-library/react";
import { GifGrid } from "../../src/components";
import { useFetchGifs } from "../../src/hooks/useFetchGifs";

jest.mock('../../src/hooks/useFetchGifs')

describe('Pruebas en GifGrid', () => {

    const category = 'One Punch';
    
    test('debe de mostrar el loading inicialmente', () => {

        useFetchGifs.mockReturnValue({
            images: [],
            isLoading: true
        })
        
        render(<GifGrid category={category}  />)
        expect(screen.getByText('Cargando...'));
        expect(screen.getByText(category));
        // screen.debug();
    })

    test('debe de mostrar items cuando se cargan imagenes useFetchGifs', () => {

        const gifs = [
            {
                id: 'ABC',
                title: 'Saitma',
                url: 'https:localhost/saitama.jpg'
            },
            {
                id: 'AB2',
                title: 'Zelda',
                url: 'https:localhost/zelda.jpg'
            },
        ]
    
        useFetchGifs.mockReturnValue({
            images: gifs,
            loading: false
        })

        render(<GifGrid category={category}  />)
        expect(screen.getAllByRole('img').length).toBe(2);
    })
    

});
