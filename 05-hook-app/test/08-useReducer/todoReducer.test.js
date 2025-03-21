import { todoReducer } from "../../src/08-useReducer/TodoReduce";

describe('Pruebas en todoReducer', () => {

    const initialState = [{
        id: 1,
        description: 'Demo Todo',
        done: false
    }]

    test('debe de regresar el estado inicial', () => {
        const newState = todoReducer(initialState, {})
        expect(newState).toBe(initialState);
    })

    test('debe de agregar un todo', () => {
        const action = {
            type: '[TODO] Add Todo',
            payload: {
                id: 2,
                description: 'Nuevo todo #2',
                done: false
            }
        }

        const newState = todoReducer(initialState, action);
        expect(newState.length).toBe(2);
        expect(newState).toContain(action.payload)
    })

    test('debe de eliminar el todo', () => {
        const action = {
            type: '[TODO] Remove todo',
            payload: 0
        }

        const newState = todoReducer(initialState, action);
        expect(newState.length).toBe(1);
    })

    test('debe de realizar el Toogle del todo', () => {
        const action = {
            type: '[TODO] Remove todo',
            payload: 1
        }

        const newState = todoReducer(initialState, action);
        // expect(newState[0].done).toBe(true);
        expect(newState[0].done).toBe(false);
    })
    
    
    

});
