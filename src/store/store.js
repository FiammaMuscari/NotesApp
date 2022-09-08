import { configureStore } from '@reduxjs/toolkit';
import authSlice from './auth/authSlice';
import noteSlice from './notes/notesSlice';

export const store = configureStore({
    reducer:{
        auth: authSlice,
        note: noteSlice,
    }
})