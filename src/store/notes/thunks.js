import { collection, doc, setDoc, getDocs, deleteDoc } from "firebase/firestore/lite"
import { FirebaseDB, FirebaseStorage } from "../../firebase/config"
import { fileDelete } from "../../notes/helpers/fileDelete";
import { fileUpload } from "../../notes/helpers/fileUpload";
import { addNewEmptyNote, deleteNoteById, setActiveNote, setNotes, setPhotosToActiveNote, startSaving, updateNote } from "./notesSlice";

export const startNewNote = () => {
    return async (dispatch, getState)=>{

        dispatch(startSaving());

        const { uid } = getState().auth
        
        const newNote = {
            title: '',
            body: '',
            date: new Date().getTime(),
            imagesUrls: [],
        }

        const newDoc = doc( collection( FirebaseDB, `${uid}/notes/note` ) )

        await setDoc( newDoc, newNote )
        
        newNote.id = newDoc.id

        dispatch(addNewEmptyNote( newNote ));
        dispatch(setActiveNote( newNote ));
    }
}

export const startLoadingNotes = () => {
    return async (dispatch, getState) => {
        const {uid} = getState().auth;
       
        const collectionRef = collection( FirebaseDB, `${uid}/notes/note` );
        const { docs } = await getDocs( collectionRef )

        const notes = docs.map( doc => ({ id: doc.id, ...doc.data() }) )
        
        dispatch(setNotes(notes));
    }
}

export const startSaveNote = () => {
    return async (dispatch, getState) => {
        dispatch(startSaving());

        const {uid} = getState().auth;
        const {activeNote} = getState().note;

        const noteToFireStore = {...activeNote};
        delete noteToFireStore.id;

        const docRef = doc( FirebaseDB, `${uid}/notes/note/${activeNote.id}` );

        await setDoc( docRef, noteToFireStore, {merge: true} );

        dispatch( updateNote(activeNote) );
    }
}

export const startUploadingFiles = (files = []) => {
    return async (dispatch) => {
        
        dispatch(startSaving());
       
        const fileUploadPromises = [];

        for (const file of files) {
            fileUploadPromises.push( fileUpload( file ) )
        }
        
        const photosUrls = await Promise.all( fileUploadPromises );

        dispatch(setPhotosToActiveNote(photosUrls));
    }
}


export const startDeleteNote = () =>{
    return async (dispatch, getState)=>{
        const {uid}=getState().auth;
        const {activeNote} = getState().note;

        const docRef = doc(FirebaseDB, `${uid}/notes/note/${activeNote.id}`)
        const fileDeletePromises = []

        for (const image of activeNote.imagesUrls) {
            fileDeletePromises.push(fileDelete(image))
        }

        await deleteDoc(docRef);
        await Promise.all(fileDeletePromises)
    
        dispatch(deleteNoteById(activeNote.id))
    }
}