import React, { Component } from 'react'
import Avatar from '@material-ui/core/Avatar';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
      flexWrap: 'wrap',
    },
    textField: {
      marginLeft: theme.spacing(1),
      marginRight: theme.spacing(1),
      width: '15ch',
      borderRadius :'8px',
    },
  }));

export default class Status extends Component {
    render() {
        return (
            <div>
                 <div style={{marginLeft:'20px', display:'flex',} }>
                <Avatar alt="sunshine" src="../images/kalpana.jpg" />
               
                <TextField
          style={{ margin: 5, width:'70%', }}
          placeholder="whats on your mind" 
          borderRadius="25px"  
          paddingBottom='50px'
         InputLabelProps={{
            shrink: true,
          }}
          variant="filled"
        />
                </div>
            </div>
        )
    }
}
