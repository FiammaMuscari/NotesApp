import {Link as RouterLink} from 'react-router-dom'
import { Button, Grid, Link, TextField, Typography } from "@mui/material";
import React from "react";
import {Google} from "@mui/icons-material";
import { AuthLayout } from '../layout/AuthLayout';
import { useForm } from "../../hooks";
import { useDispatch } from "react-redux";
import { checkingAuthentication, startGoogleSignIn } from '../../notes/store/auth/thunks';

export const LoginPage = () => {
  const dispatch = useDispatch();

  const { email, password, onInputChange } = useForm({
    email: 'skillfactory@gmail.com',
    password: '123456'
  })

  const onSubmit = (event) => {
    event.preventDefault();
    console.log({email, password});
    dispatch(checkingAuthentication());
  }

  const onGoogleSignIn = ()=>{
    console.log('onGoogleSignIn');

    dispatch(startGoogleSignIn());
  }

  return (
    <AuthLayout title='Login'>
        <form onSubmit={onSubmit}>
          <Grid item xs={12} sx={{ mt: 2 }}>
            <TextField
              label="Correo"
              type="email"
              placeholder="correo@gmail.com"
              fullWidth
              name='email'
              value={email}
              onChange={onInputChange}
            />
          </Grid>
          <Grid item xs={12} sx={{ mt: 2 }}>
            <TextField
              label="Contraseña"
              type="password"
              placeholder="Contraseña"
              fullWidth
              name="password"
              value={password}
              onChange={onInputChange}
            />
          </Grid>
          <Grid
          container
          spacing={1}
          sx={{mb:2, mt:1}}
          >
            <Grid item xs={12} sx={{ mt: 2 }}>
            <Button
            variant='contained'
            fullWidth
            >

              <Typography sx={{ml:1}}>Login</Typography>
            </Button>
            </Grid>
          </Grid>
          <Grid
          container
          spacing={1}
          sx={{mb:2, mt:1}}
          >
            <Button
            variant='contained'
            fullWidth
            onClick={onGoogleSignIn}
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
