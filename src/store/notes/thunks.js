import { collection, doc, setDoc } from "firebase/firestore/lite"
import { FirebaseDB } from "../../firebase/config"
import { addNewEmptyNote, setActiveNote, startSaving } from "./notesSlice";

export const startNewNote = () => {
    return async (dispatch, getState)=>{

        dispatch(startSaving());

        const { uid } = getState().auth

        const newNote = {
            title: '',
            body: '',
            date: new Date().getTime(),
        }

        const newDoc = doc( collection( FirebaseDB, `${uid}/notes/note` ) )

        await setDoc( newDoc, newNote )
        newNote.id = newDoc.id

        dispatch(addNewEmptyNote( newNote ));
        dispatch(setActiveNote( newNote ));
    }
}