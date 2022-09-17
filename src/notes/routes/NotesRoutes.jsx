import { Navigate, Route, Routes } from "react-router-dom"
import { NotesPage } from "../pages/NotesPage"

export const NotesRoutes = () => {
  return (
        <Routes>
            <Route path='/' element={ <NotesPage /> } />

            <Route path='/*' element={<Navigate to='/' /> } />
        </Routes>
  )
}
