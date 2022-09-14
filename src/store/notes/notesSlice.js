import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isSaving: false,
  messageSaved: "",
  notes: [],
  activeNote: null,
};

export const noteSlice = createSlice({
  name: "note",
  initialState,
  reducers: {
    addNewEmptyNote: (state, {payload}) => {
        state.notes.push( payload );
        state.isSaving = false;
    },
    setActiveNote: (state, {payload}) => {
        state.activeNote = payload;
        state.messageSaved = '';
    },
    setNotes: (state, {payload}) => {
      state.notes = payload;
    },
    startSaving: (state) => {
        state.isSaving = true;
        state.messageSaved = '';
    },
    updateNote: (state, {payload}) => {
      state.notes = state.notes.map( note => {
        if(note.id === payload.id) return payload;
        return note
      })  
      state.isSaving = false;
      state.messageSaved = `${payload.title}, Actualizada correctamente`;
    },
    setPhotosToActiveNote: (state, {payload}) => {
      state.activeNote.imagesUrls = [ ...state.activeNote.imagesUrls, ...payload ];
      state.isSaving = false;
    },
    clearNotesLogout: (state)=>{
      state.isSaving = false;
      state.messageSaved = '';
      state.notes = [];
      state.activeNote = null;
    },
    deleteNoteById: (state) => {},
  },
});

export const {
  setPhotosToActiveNote,
  clearNotesLogout,
  addNewEmptyNote,
  setActiveNote,
  setNotes,
  startSaving,
  updateNote,
  deleteNoteById,
} = noteSlice.actions;

export default noteSlice.reducer;