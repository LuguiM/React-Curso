import { useReducer, useEffect } from "react";
import { todoReducer } from "../08-useReducer/TodoReduce";

export const useTodo = () => {

    const init = () => {
        return JSON.parse(localStorage.getItem('todos')) || [];
    }

    const [todos = [], dispatch] = useReducer(todoReducer, [], init)

    const pedingTodos = todos.filter(todo => !todo.done).length;



    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos))
    }, [todos]);

    const handleNewTodo = (todo) => {
        const action = {
            type: '[TODO] Add Todo',
            payload: todo
        }

        dispatch(action)
    }

    const handleDeleteTodo = (id) => {
        dispatch({
            type: '[TODO] Revome todo',
            payload: id
        })
    }

    const handleToggleTodo = (id) => {
        dispatch({
            type: '[TODO] Toggle Todo',
            payload: id
        })
    }

    return {
        todos,
        pedingTodos,
        handleNewTodo,
        handleToggleTodo,
        handleDeleteTodo
    }
}