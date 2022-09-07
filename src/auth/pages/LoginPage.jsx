import { Link as RouterLink } from "react-router-dom";

import { AuthLayout } from "../layout/AuthLayout";

import { Button, Grid, Link, TextField, Typography } from "@mui/material";

import { Google } from "@mui/icons-material";
import { useForm } from "../../hooks";
import { useDispatch, useSelector } from "react-redux";
import { checkingAuthentication, startGoogleSignIn, startLoginWithEmailPassword } from "../../store/auth/thunks";
import { useMemo } from "react";


// Tarea: En el componente LoginPage.jsx, utilizar el estado del store de redux y hacer la siguiente validación:

// Si el valor del state.status es igual a "checking" deshabilitar los botones de login y google.

// Para esto previamente guardar el resultado booleano de esa condición, en una constante llamada isChecking, utilizando useMemo.


export const LoginPage = () => {

  const dispatch = useDispatch();

  const { status } = useSelector((state)=> state.auth);

  const isChecking = useMemo(() => status === 'checking', [status])

  const { email, password, onInputChange } = useForm({
    email: '',
    password: ''
  })

  const onSubmit = (event) => {
    event.preventDefault();
    console.log({email, password});
    dispatch(startLoginWithEmailPassword({email, password}));
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
          <Grid container spacing={1} sx={{ mb: 2, mt: 1 }}>
            <Grid item xs={12} sx={{ mt: 2 }}>
              <Button 
                variant="contained" 
                fullWidth
                type='submit'
                disabled={isChecking}
                >
                <Typography sx={{ ml: 1 }}>Login</Typography>
              </Button>
            </Grid>
            <Grid item xs={12} sx={{ mt: 2 }}>
              <Button
                variant="contained" 
                fullWidth
                onClick={onGoogleSignIn}
                disabled={isChecking}
              >
                <Google />
                <Typography sx={{ ml: 1 }}>Google</Typography>
              </Button>
            </Grid>
          </Grid>
          <Grid container direction="row" justifyContent="end">
            <Link component={RouterLink} color="inherit" to="/auth/register">
              Crear una cuenta
            </Link>
          </Grid>
        </form>
      </AuthLayout>
  );
};
