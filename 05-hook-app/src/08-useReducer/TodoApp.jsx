import { useReducer, useEffect } from "react";
import { todoReducer } from "./TodoReduce";
import { TodoList, TodoAdd } from "./components";
import { useTodo } from "../hooks";


export const TodoApp = () => {

    const { todos, pedingTodos, handleNewTodo, handleToggleTodo, handleDeleteTodo } = useTodo()

    return (
        <>
            <h1>TodoApp ({todos.length}), <small>Pendientes: {pedingTodos}</small></h1>

            <hr />

            <div className="row">
                <div className="col-7">
                    <TodoList todos={todos} onDeleteTodo={handleDeleteTodo} onToggleTodo={handleToggleTodo} />
                </div>

                <div className="col-5">
                    <h4>Agregar TODO</h4>

                    <hr />
                    <TodoAdd onNewTodo={(e) => handleNewTodo(e)} />
                </div>
            </div>


        </>
    );
}