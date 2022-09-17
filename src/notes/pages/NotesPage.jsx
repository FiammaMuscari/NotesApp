import { AddOutlined } from '@mui/icons-material';
import { CircularProgress, IconButton } from '@mui/material';

import { useDispatch, useSelector } from 'react-redux';
import { startNewNote } from '../../store/notes/thunks';

import { NotesLayout } from '../layout/NotesLayout';
import { NoteView, NothingSelectedView } from '../views';


export const NotesPage = () => {

  const { isSaving, activeNote } = useSelector( state => state.note )

  const dispatch = useDispatch();

  const onClickNewNote = () => {
    if(isSaving) return;
    dispatch(startNewNote());
  } 

  return (
    <NotesLayout>   
      {
        activeNote
          ? <NoteView />
          : <NothingSelectedView />
      }   
      
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
        {
          isSaving  
            ? <CircularProgress size={30} color='secondary' />
            : <AddOutlined sx={{ fontSize: 30 }} /> 
        }           
      </IconButton>
    </NotesLayout>
  )
}
