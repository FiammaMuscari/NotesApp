import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isSaving: false,
  messageSaved: "",
  notes: [],
  activeNote: null,
};

// {
//     id: 'ABC123',
//     title: '',
//     body: '',
//     date: 123456,
//     imageUrl: []
// }

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
    },
    setNotes: (state, {payload}) => {
      state.notes = payload;
    },
    startSaving: (state) => {
        state.isSaving = true;
    },
    updateNote: (state, {payload}) => {
      state.notes = state.notes.map( note => {
        if(note.id === payload.id) return payload;
        return note
      })  
      state.isSaving = false;
    },
    deleteNoteById: (state) => {},
  },
});

export const {
  addNewEmptyNote,
  setActiveNote,
  setNotes,
  startSaving,
  updateNote,
  deleteNoteById,
} = noteSlice.actions;

export default noteSlice.reducer;