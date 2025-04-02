import { createUserWithEmailAndPassword, GoogleAuthProvider, signInWithEmailAndPassword, signInWithPopup, updateProfile } from "firebase/auth";
import { FirebaseAuth } from "./config";
import { Password } from "@mui/icons-material";


const googleProvider = new GoogleAuthProvider();

export const signInWithGoogle = async () => {
    try {
        const result = await signInWithPopup(FirebaseAuth, googleProvider)
        // const credentials = GoogleAuthProvider.credentialFromResult(result)

        const { displayName, email, photoURL, uid } = result.user;

        return {
            ok: true,
            // user info
            displayName, email, photoURL, uid
        }

    } catch (error) {
        const errorCode = error.code;
        const errorMessage = error.message;

        return {
            ok: false,
            errorCode, errorMessage
        }
    }
}

export const registerUserWhitEmailPassword = async ({ email, password, displayName }) => {

    try {

        const resp = await createUserWithEmailAndPassword(FirebaseAuth, email, password);
        const { uid, photoURL } = resp.user;

        await updateProfile(FirebaseAuth.currentUser, { displayName });

        return {
            ok: true,
            uid, photoURL, email, displayName
        }

    } catch (e) {
        return { ok: false, errorMessage: e.message }
    }

}

export const loginWithEmailPassword = async ({ email, password }) => {
    // SignInWithEmailAndPassword
    try {

        const resp = await signInWithEmailAndPassword(FirebaseAuth, email, password);
        const { uid, photoURL, displayName } = resp.user
        return {
            ok: true,
            uid, photoURL, email, displayName
        }

    } catch (e) {
        return { ok: false, errorMessage: e.message }
    }
}

export const logoutFirebase =  async() => {
    return await FirebaseAuth.signOut()
}