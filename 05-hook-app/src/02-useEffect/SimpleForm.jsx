import { useState, useEffect } from "react";
import { Message } from "./index";

export const SimpleForm = () => {

    const [formState, setFormState] = useState({
        username: 'strider',
        email: 'fernando@google.com'
    });

    const {username, email} = formState;

    const onInputChange = ({target}) => {
        const {name, value} = target;
        setFormState({
            ...formState,
            [name]: value
        })
    }


    useEffect(() => {

    }, [formState]);
    
    useEffect(() => {

    }, [email]);


    return (
        <>
            <h1>Formulario Simple</h1>
            <hr />

            <input
                type="text"
                className="form-control"
                placeholder="Username"
                name="username"
                value={username}
                onChange={onInputChange}
            />

            <input
                type="email"
                className="form-control mt-2"
                placeholder="correo@correo.com"
                name="email"
                value={email}
                onChange={onInputChange}
            />

            {username === 'strider2' && <Message /> }
        </>
    );
}