import { configureStore } from '@reduxjs/toolkit';
import authSlice from './auth/authSlice';
import noteSlice from './notes/notesSlice';
import uiSlice from './ui/uiSlice';

export const store = configureStore({
    reducer:{
        auth: authSlice,
        note: noteSlice,
        ui: uiSlice,
    } 
})