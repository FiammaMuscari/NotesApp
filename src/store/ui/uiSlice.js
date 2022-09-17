import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    drawer:{
        isOpen: true,
        width: 240
    }
}

export const uiSlice = createSlice({
    name: 'ui',
    initialState,
    reducers: {
        onOpenDrawer: (state)=>{
            state.drawer.isOpen = true;
            state.drawer.width = 240;
        },
        onCloseDrawer: (state)=>{
            state.drawer.isOpen = false;
            state.drawer.width = 0;
        },            
    }
})

export const { onOpenDrawer, onCloseDrawer } = uiSlice.actions;

export default uiSlice.reducer;