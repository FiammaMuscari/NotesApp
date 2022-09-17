import { Box, Toolbar } from '@mui/material'
import React from 'react'
import NavBar from '../components/Navbar'
import SideBar from '../components/SideBar'


export const NotesLayout = ({children}) => {

  return (
    <Box sx={{display: 'flex'}} className='animate__animated animate__fadeIn animate__faster'>

        <NavBar/>

        <SideBar />

        <Box
            component='main'
            sx={{ flexGrow: 1, padding: 3 }}
        >
            <Toolbar />  
            {children}      
        </Box>
    </Box>
  )
}
