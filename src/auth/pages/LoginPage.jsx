import {Link as RouterLink} from 'react-router-dom'
import { Button, Grid, Link, TextField, Typography } from "@mui/material";
import React from "react";
import {Google} from "@mui/icons-material";
import { AuthLayout } from '../layout/AuthLayout';

export const LoginPage = () => {
  return (
    <AuthLayout title='Login'>
        <form action="">
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

              <Typography sx={{ml:1}}>Login</Typography>
            </Button>

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
              <Google/>
              <Typography sx={{ml:1}}>Google</Typography>
            </Button>


              <Grid container direction='row' justifyContent='end'>
                <Link
                component={RouterLink}

                to='/auth/register'
                >
                Crear una cuenta
                </Link>
              </Grid>

          </Grid>

        </form>
    </AuthLayout>
  );
};
