import { Toolbar, Box } from '@mui/material'

import React from 'react'
import { Navbar, SideBar } from '../components'

const drawerWidth = 240
export const NotesLayout = ({children}) => {
  return (
    <Box sx={{display:'flex'}}>

       <Navbar drawerWidth={drawerWidth}/>
        {/*Sidebar*/}
        <SideBar drawerWidth={drawerWidth}/>
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
