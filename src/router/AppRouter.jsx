import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { AuthRoutes } from '../auth/routes/AuthRoutes'
import { NotesRoutes } from '../notes/routes/NotesRoutes'

export const AppRouter = () => {
  return (
    <Routes>
        {/*Login y Registro*/}
        <Route path='/auth/*' element={<AuthRoutes/>}/>
        {/*Noteapp*/}
        <Route path='/*' element={<NotesRoutes/>}/>
    </Routes>
  )
}
