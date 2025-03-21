
import { useState } from "react";
import { useForm } from "../../hooks"


export const TodoAdd = ({ onNewTodo }) => {

    const {formState, onInputChange, onResetForm} = useForm({
        description: ''
    })

    const {description} = formState

    const onSubmit = (e) => {
        e.preventDefault()

        if (description.trim().length <= 1) return;

        const newTodo = {
            id: new Date().getTime() * 2,
            description: description,
            done: false
        }

        onNewTodo(newTodo)
        onResetForm()
    }

    return (
        <form onSubmit={onSubmit} aria-label="form">

            <input
                type="text"
                placeholder="¿Que hay que hacer?"
                className="form-control"
                name="description"
                value={description}
                onChange={onInputChange}
            />
            <button type="submit" className="btn btn-outline-primary mt-2">Añadir</button>

        </form>
    );
}