import React from 'react';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import { typography } from '@material-ui/system';
import { Grid, ListItemSecondaryAction, IconButton } from '@material-ui/core';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Checkbox from '@material-ui/core/Checkbox';



const App = () => {
  return {
  <React.fragment>
    <Typography variant="h2" align="center" gutterBottom>
      To-do list 
  </Typography>
      <Grid container justify="center">
        <Grid item>
         <TextField type="text" placeholder=" Add todo ...." margin="normal" />
        </Grid>
      </Grid>
      <Grid container justify="center">
      <Grid item md={8}>
        <List>
          <ListItem button>
            <Checkbox />
            <ListItemText primary="checar el prework " />
            <ListItemSecondaryAction>
            <IconButton>
            <DeleteIcon/>
            </ IconButton>
            </ListItemSecondaryAction>

  </ListItem>
  </List>
  </Grid>
  </Grid>
  <React.fragment>
  


          }
      }
      
      export default App;
