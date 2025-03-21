import { useState } from "react"
import { useGetTodoByIdQuery, useGetTodosQuery } from "./store/apis"

export const TodoApp = () => {

    const [todoId, setTodoId] = useState(1);
    // const {data: todos= [], isLoading} = useGetTodosQuery()
    const {data: todo = [], isLoading} = useGetTodoByIdQuery(todoId)

    const nextTodo = () => {
        setTodoId( todoId + 1 );
    }

    const prevTodo = () => {
        if ( todoId === 1 ) return;
        setTodoId( todoId - 1 );
    }

    return (
        <>
            <div>Todos - RTK Query</div>
            <hr />

            <h4>isLoading: { isLoading ? 'True': 'False' } </h4>

            <pre>{ JSON.stringify(todo) }</pre>
{/* 
            <ul>
                {
                    todos.map(todo => (
                        <li key={todo.id}>
                            <strong> {todo.completed ? 'DONE' : 'Pending'} </strong>
                            {todo.title}
                        </li>
                    ))
                }
            </ul> */}
            <button onClick={prevTodo}>Prev todo</button>

            <button onClick={nextTodo}> next todo</button>
        </>

    )
}
