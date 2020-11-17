import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

import Status from './Status';
import News from './News';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    width: '100%',
    marginLeft: 0,
  marginTop: '30px',
 
  
  },
  updates: {
    width: '100%',
  display: 'flex',
 
  },
  updatesc: {
    width: '5px',
  
  },
  updatesb: {
    height: '250px',
    width: '250px',
    padding:'0 10px',
    position: 'relative',
    borderRadius: '8px',
    overflow: 'hidden',
  },
  updatesbo: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    top: '0',
    left: '0',
  
  },
  updatesboimg: {
    width: '35px',
    height: '35px',
    borderRadius: '50%',
    marginTop:'10px', 
    marginLeft:'20px ',
    border: '3px solid blue',
  
  },
  updatesboname: {
    position: 'absolute',
    bottom: '10px',
    left: '20px',
    color: 'white',
    fontSize: '10px',
    fontWeight: 'bold',
    },
 
  image: {
    marginTop: "20px",
    width: 18,
    height: 28,
    marginLeft: "20px",
    display:"flex",
  
  },
  img: {
    margin: 'auto',
    display: 'block',
    maxWidth: '100%',
    maxHeight: '100%',
  },
}));

  const data=[
      {id:1, img:"../images/kalpana.jpg", name:"kalpana group"},
      {id:2, img:"../images/dharshan.jpg", name:"dharshan group"},
      {id:3, img:"../images/allu.jpg", name:"Allu arjun group"},
      {id:4, img:"../images/vijay.jpg", name:"vijay group"},
      ]



export default function Middle() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
     
        <Grid container spacing={2} style={{display:'flex',flexDirection:'column'}}>
          <Grid item>
            
            <div className={classes.updates}>
            {data.map((up)=>(
                        <div className={classes.updates} key={up.id}>
                            <div className={classes.updatesb}>
                                <img src={up.img}  />
                                <div className={classes.updatesbo}>
                                <div className={classes.updatesboimg}>
                                <img src={up.img} style={{width: '100%', height: '100%',objectFit: 'cover',borderRadius: '40px',}} />
                            </div>
                            <div className={classes.updatesboname}>{up.name}</div>
                            </div>
                            </div>
                          </div> 
                    )
                    )}
                </div> 
          </Grid>
          <Grid item>
          <Status/>
          </Grid>
          <Grid item>
          <News/>
          </Grid>
         
          </Grid>
        
     
    </div>
  );
}