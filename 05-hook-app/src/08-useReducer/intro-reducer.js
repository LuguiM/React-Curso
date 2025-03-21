
const initialState = [
    {
        id:1,
        todo: 'Recolectar la piedra del Alma',
        done: false
    }
];

const todoReducer = (state = initialState, action = {}) => {

    if( action.type === '[TODO] add todo') {
        return [...state, action.payload] // siempre hacer de esta manera
    }

    return state
}

let todos = todoReducer()

const newTodo = {
    id: 2,
    todo: 'Relectar la piedra del poder',
    donde: false
}

const addTodoAction = {
    type: '[TODO] add todo',
    payload: newTodo,
}

todos = todoReducer(todos, addTodoAction)

console.log(todos);
