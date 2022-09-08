import { Routes, Route, Navigate } from 'react-router-dom';
import { ChekingAuth } from '../auth/components/ChekingAuth';
import { AuthRoutes } from '../auth/routes/AuthRoutes';
import { useCheckAuth } from '../hooks/useCheckAuth';
import { NotesRoutes } from '../notes/routes/NotesRoutes';

export const AppRouter = () => {

  const { status } = useCheckAuth();
  if(status==='checking') return <ChekingAuth/>

  return (
    <Routes>
        {
          status === 'authenticated'
          ? <Route path='/*' element={<NotesRoutes />} />
          : <Route path='/auth/*' element={<AuthRoutes />} />
        } 

        <Route path='/*' element={<Navigate to='/auth/login' />} />      

    </Routes>        
  )
}