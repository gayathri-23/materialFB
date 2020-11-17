
    import React, { useState } from 'react';
    import React, { Component} from 'react';
    
    
    
    const Mupdates = () => {
        const[s,setState]=React.useState([
         {id:1, img:"../img/kalpana.jpg", name:"alluarjun group"},
         {id:2, img:"../img/anu.jpg", name:"mahesh babu group"},
         {id:3, img:"../img/dharshan.jpg", name:"ram charan group"},
         {id:5, img:"../img/sridevi.jpg", name:"Sridevi group"},
            ]);
    
        
            return(
                <div className="updates">
                    {s.map((up)=>(
                        <div className="updatesc" key={up.id}>
                            <div className="updatesb">
                                <img src={up.img} />
                                <div className="updatesbo">
                                <div className="updatesboimg">
                                <img src={up.img} />
                            </div>
                            <div className="updatesboname">{up.name}</div>
                            </div>
                            </div>
                          </div> 
                    )
                    )}
               
                </div>
            )
        }
    export default Mupdates;