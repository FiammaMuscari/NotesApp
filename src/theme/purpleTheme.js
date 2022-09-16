import { createTheme } from "@mui/material"
import { purple, red } from "@mui/material/colors"


export const purpleTheme = createTheme({
    palette: {
        primary: {
            main: purple[900]
        },
        secondary: {
            main: purple[50]
        },
        terceary:{
            main: '#9575cd'
        },
        error: {
            main: red.A400
        },
        white: {
            main: '#fffff'
        },
    }
})