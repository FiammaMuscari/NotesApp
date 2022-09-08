import { SaveOutlined } from '@mui/icons-material'
import { Button, Grid, TextField, Typography } from '@mui/material'
import React from 'react'
import { ImageGalery } from '../components'

export const NoteView = () => {
  return (
    <Grid
        container
        direction='row'
        justifyContent='space-between'
        alignItems='center'
        sx={{ mb: 1 }}
        className='animate__animated animate__fadeIn animate__faster'
    >
       <Grid item>
            <Typography fontSize={39} fontWeight='light'>
                26 de Septiembre, 2023
            </Typography>            
        </Grid> 
        <Grid item> 
            <Button sx={{padding: 2}}>
                <SaveOutlined sx={{fontSize: 30, mr: 1}} />
                Guardar
            </Button>     
        </Grid>
        <Grid container>
            <TextField 
                type='text'
                variant='filled'
                fullWidth
                placeholder='Ingrese un titulo'
                label='Titulo'
                sx={{ border: 'none', mb: 1 }}
            />
            <TextField 
                type='text'
                variant='filled'
                fullWidth                
                placeholder='Descripcion'
                multiline                
                minRows={5}
            />  
            
        </Grid>
        <ImageGalery />
    </Grid>
  )
}
