import { Toolbar, Box } from '@mui/material'

import React from 'react'
import { Navbar, SideBar } from '../components'

export const NotesLayout = ({children}) => {
  return (
    <Box sx={{display:'flex'}} className='animate__animated animate__fadeIn animate__faster'>

       <Navbar />
        {/*Sidebar*/}
        <SideBar />
        <Box
        component='main'
        sx={{flexGrow:1, padding:3}}
        >
            <Toolbar/>
            {children}
        </Box>
    </Box>
  )
}
