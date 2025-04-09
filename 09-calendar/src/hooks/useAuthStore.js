import { useDispatch, useSelector } from "react-redux"
import { calendarApi } from "../api";
import { clearErrorMessage, onChecking, onLogin, onLogout } from "../store";

const setToken = (token) => {
    localStorage.setItem('token', token);
    localStorage.setItem('token-init-date', new Date().getTime());
}

export const useAuthStore = () => {

    const { status, user, errorMessage } = useSelector(state => state.auth)
    const dispatch = useDispatch();

    const startLogin = async ({ email, password }) => {
        dispatch(onChecking())
        try {
            const { data } = await calendarApi.post('/auth', { email, password })
            setToken(data.token);
            dispatch(onLogin({ name: data.name, uid: data.uid }))


        } catch (error) {
            dispatch(onLogout('Credenciales incorrectas'));
            setTimeout(() => {
                dispatch(clearErrorMessage())
            }, 10)
        }
    }

    const startRegister = async (formData) => {
        dispatch(onChecking())

        try {
            const { data } = await calendarApi.post('/auth/new', formData);
            setToken(data.token);
            dispatch(onLogin({ name: data.name, uid: data.uid }))

        } catch (error) {
            console.log(error.response);
            const { errors, msg } = error.response.data
            dispatch(onLogout( JSON.stringify(errors) || msg ));
            setTimeout(() => {
                dispatch(clearErrorMessage())
            }, 10)
        }
    }

    return {
        // Propiedades
        status,
        user,
        errorMessage,


        //Metodos
        startLogin,
        startRegister
    }
}