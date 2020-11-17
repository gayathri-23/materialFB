import React from 'react';

import {makeStyles} from '@material-ui/core/styles';
import Header from './Component/Header';

import Middle from './Component/Middle';
import Left from './Component/Left';


  export default function Master(){
   
   return(
    <div style={{width:'100%'}}>
     <Header/>
     <div style={{display:'flex',}} >
      <div style={{width:'15%'}}>
  
     <Left/>
     </div>
     <div style={{width:'70%',}}>
     <Middle/>
    </div>
    </div>
    </div>
   )
  }