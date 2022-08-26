import { Button, Grid, TextField, Typography } from '@mui/material'
import {Link as RouterLink} from 'react-router-dom'
import React from 'react'
import { Link } from 'react-router-dom'
import { AuthLayout } from '../layout/AuthLayout'

export const RegisterPage = () => {
  return (
    <AuthLayout title='Crear Cuenta'>
        <form action="">
        <Grid item xs={12} sx={{ mt: 2 }}>
            <TextField
              label="Nombre completo"
              type="text"
              placeholder="Nombre completo"
              fullWidth
            />
          </Grid>
          <Grid item xs={12} sx={{ mt: 2 }}>
            <TextField
              label="Correo"
              type="email"
              placeholder="correo@gmail.com"
              fullWidth
            />
          </Grid>
          <Grid item xs={12} sx={{ mt: 2 }}>
            <TextField
              label="Contraseña"
              type="password"
              placeholder="Contraseña"
              fullWidth
            />
          </Grid>
          

          <Grid
          container
          spacing={1}
          sx={{mb:2, mt:1}}
          >
            <Button
            variant='contained'
            fullWidth
            >

              <Typography sx={{ml:1}}>Crear Cuenta</Typography>
            </Button>

          </Grid>
            <Grid container direction='row' justifyContent='end'>
                <Link
                component={RouterLink}
                color='inherit'
                to='/auth/login'
                >
                Ya tengo una cuenta
                </Link>
              </Grid>

        </form>
</AuthLayout>
  )
}
