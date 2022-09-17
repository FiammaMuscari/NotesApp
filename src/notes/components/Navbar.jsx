import { LogoutOutlined, MenuOutlined } from '@mui/icons-material'
import { AppBar, Grid, IconButton, Toolbar, Typography } from '@mui/material'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { startLogout } from '../../store/auth/thunks'
import { onOpenDrawer } from '../../store/ui/uiSlice'

export const NavBar = () => {

    const dispatch = useDispatch();

    const { drawer } = useSelector( state => state.ui )

    const onLogout = ()=>{
        dispatch(startLogout());
    }

  return (
    <AppBar
        position='fixed'
        sx={{
            width: { sm: `calc(100% - ${drawer.width}px)` },
            ml: { sm: `${drawer.width}px` }
        }}
    >
        <Toolbar>
            <IconButton
                color='inherit' 
                edge='start'
                sx={{mr: 2, display: {sm: drawer.isOpen ? 'none' : 'block'}}}
                onClick={()=> dispatch(onOpenDrawer())}
            >
                <MenuOutlined />
            </IconButton>  

            <Grid
                container
                direction='row'
                justifyContent='space-between'
                alignItems='center'
            >
                <Typography
                    variant='h6'
                    noWrap
                    component='div'
                >
                    NoteApp     
                </Typography>
                <IconButton
                    color='error'
                    onClick={onLogout}
                    
                >
                    <LogoutOutlined />
                </IconButton>     
            </Grid>

        </Toolbar>

    </AppBar>
  )
}
