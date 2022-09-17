import { Alert, Snackbar } from "@mui/material";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

export const AuthErrorAlert = () => {
  
    const { errorMessage } = useSelector(state => state.auth);   
    const [open, setOpen] = useState(!!errorMessage);
 
    useEffect(() => {    
      setOpen(!!errorMessage)
    }, [errorMessage])   
   
    const handleClose = (event, reason) => {
      if (reason === 'clickaway') {
        return;
      }
      setOpen(false);
    };
 
  return (
    <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="error" sx={{ width: '100%' }}>
          {errorMessage}
        </Alert>
    </Snackbar>
  )

}
