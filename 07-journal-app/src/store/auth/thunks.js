import { checkingCredentials, login, logout } from "./"
import { registerUserWhitEmailPassword, signInWithGoogle, loginWithEmailPassword, logoutFirebase } from "../../firebase/providers"
import { clearNotesLogout } from "../journal/journalSlice"

export const checkingAuthentication = (email, password) => {
    return async (dispatch) => {
        dispatch(checkingCredentials())
    }
}

export const startGoogleSignIn = () => {
    return async (dispatch) => {
        dispatch(checkingCredentials())

        const result = await signInWithGoogle()

        if (!result.ok) return dispatch(logout(result.errorMessage))


        dispatch(login(result))
    }
}

export const startCreatingUserWhithEmailPassword = ({ email, password, displayName }) => {
    return async (dispatch) => {
        dispatch(checkingCredentials());

        const { ok, uid, photoURL, errorMessage } = await registerUserWhitEmailPassword({ email, password, displayName })

        if (!ok) return dispatch(logout({ errorMessage }))

        dispatch(login({ uid, displayName, email, photoURL }))

    }
}

export const startLoginWithEmailPassword = ({ email, password }) => {
    return async (dispatch) => {
        dispatch(checkingCredentials());

        const { ok, uid, photoURL, displayName, errorMessage } = await loginWithEmailPassword({email, password});

        if (!ok) return dispatch(logout({ errorMessage }))
            // console.log(uid, displayName, email, photoURL);

        dispatch(login({ uid, displayName, email, photoURL }))

    }
}

export const stratLogout = () => {
    return async( dispatch ) => {
        await logoutFirebase();
        dispatch( clearNotesLogout() )
        dispatch(logout({ }))
    }
}