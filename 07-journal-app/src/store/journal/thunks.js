import { collection, doc, setDoc } from "firebase/firestore/lite"
import { FirebaseDB } from "../../firebase/config"
import { addNewEmptyNote, setActiveNote, savingNewNote, setNotes } from "./"
import { loadNotes } from "../../helpers"


export const startNewNote = () => {
    return async(dispatch, getState) => {

        // dispatch tarea
        dispatch(savingNewNote())
        
        //uidd
        const { uid } = getState().auth

        const newNote = {
            title: '',
            body: '',
            date: new Date().getTime(),
        }

        const newDoc = doc( collection( FirebaseDB, `${uid}/journal/notes` ) );
        await setDoc( newDoc, newNote )

        newNote.id = newDoc.id

        // dispatch
        dispatch( addNewEmptyNote( newNote ) )
        //dispatch newNote
        dispatch( setActiveNote( newNote ) )
        // dispatch 
    }
}

export const startLoadingNotes = () => {
    return async(dispatch, getState) => {
        const { uid } = getState().auth;
        if( !uid ) throw new Error('El UID del usuario no existe')

        const resp = await loadNotes(uid);

        dispatch( setNotes(resp) )
    }
}