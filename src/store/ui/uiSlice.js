import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    drawer:{
        isOpen:true,
        width:240
}
}

export const uiSlice = createSlice({
    name: 'ui',
    initialState,
    reducers: {
        onOpen: (state)=>{
            state.drawer.isOpen = true
            state.drawer.width = 240
        },
        onClose: (state)=>{
            state.drawer.isOpen = false
            state.drawer.width = 0
        },
            
    }
})

export const { onOpen, onClose } = uiSlice.actions;

export default uiSlice.reducer;