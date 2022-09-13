import { Title, TurnedInNot } from "@mui/icons-material";
import { Grid, ListItem, ListItemButton, ListItemIcon, ListItemText } from "@mui/material";
import { useDispatch } from "react-redux";
import { setActiveNote } from "../../store/notes/notesSlice";


export const SideBarItem = ({note}) => {

    const dispatch = useDispatch();

  return (
    <ListItem disablePadding>
      <ListItemButton
        onClick={() => dispatch(setActiveNote(note))}
      >
        <ListItemIcon>
          <TurnedInNot />
        </ListItemIcon>
        <Grid container direction='column'>
          <ListItemText primary={
                note.title.length > 15
                    ? note.title.substring(0, 15) + '...'
                    : note.title
            } />
          <ListItemText
            secondary={
                note.body.length > 50
                    ? note.body.substring(0, 50) + '...'
                    : note.body       
            }
          />
        </Grid>
      </ListItemButton>
    </ListItem>
  );
};