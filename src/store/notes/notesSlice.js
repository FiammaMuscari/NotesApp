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
    setNotes: (state) => {},
    startSaving: (state) => {
        state.isSaving = true;
    },
    updateNote: (state) => {},
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