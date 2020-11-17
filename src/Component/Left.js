
import { Avatar } from '@material-ui/core';
import React, { Component} from 'react';
import Typography from '@material-ui/core/Typography';

const data =[
  {name:"kalpana chawla group", imageurl:"../images/kalpana.jpg"},
  {name:"Anushka group", imageurl:"../images/anu.jpg"},
  {name:"Dharshan group",imageurl:"../images/dharshan.jpg"},
  {name:"vijay group",imageurl:"../images/vijay.jpg"},
  {name:"Alluarjun group",imageurl:"../images/allu.jpg"},

]
export default class Left extends Component {
render(){
  return(
    <div style={{width:"15%",position:'fixed'}}>
      {data.map((user)=>(
        <p styles={{display:"flex",}}>
          <Typography styles={{display:'inline-flex' }}/>
          <Avatar alt="sunset" src={user.imageurl} style={{marginLeft:"30px"}}/>
          <Typography variant="h1"  style={{marginLeft:"10px",display:"flex",}}/>
          <div className="user">{user.name}</div>
          
          </p>
      )
      )}
    </div>
  )
}
}
        
    

