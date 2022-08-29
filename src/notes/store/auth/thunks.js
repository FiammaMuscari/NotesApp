// TODO: Desde la primera función que vamos a crear dentro de nuestro thunks.js, que llamaremos checkingAuthentication, realizar un dispatch de checkingCredentials, cuando se la llame en la función que se ejecuta al hacer click en el botón login. Como resultado tendrá que cambiar el status de nuestro estado, pasando de non-authenticated a checking.

import { checkingCredentials } from "./authSlice"

export const checkingAuthentication = (email, password) =>{
    return async (dispatch)=>{
        dispatch(checkingCredentials());
        
    }
}

export const startGoogleSignIn = () => {
    return async (dispatch)=>{
        dispatch(checkingCredentials());
        
    }
}