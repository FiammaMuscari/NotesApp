import { AddOutlined } from '@mui/icons-material';
import { IconButton } from '@mui/material';
import React from 'react'
import { useDispatch } from 'react-redux';
import { startNewNote } from '../../store/notes/thunks';
import { NotesLayout } from '../layout/NotesLayout';
import { NoteView, NothingSelectedView } from '../views';


export const NotesPage = () => {

  const dispatch = useDispatch()

  const onClickNewNote = () =>{
    dispatch(startNewNote());//importar start del noteslice que falta hacer
  }


  return (
    <NotesLayout>      
      <NothingSelectedView />
      <NoteView />

      <IconButton
        size='large'
        sx={{
          color: '#fff',
          backgroundColor: 'error.main',
          ':hover': { backgroundColor: 'error.main', opacity: 0.9 },
          position: 'fixed',
          right: 50,
          bottom: 50
        }}
        onClick={onClickNewNote}
      >
        <AddOutlined sx={{ fontSize: 30 }} />    
      </IconButton>
    </NotesLayout>
  )
}
