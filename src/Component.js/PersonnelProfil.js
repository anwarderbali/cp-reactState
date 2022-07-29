
import React, { Component } from 'react'
import fleur from './fleur.jpg'



export default class PersonnelProfil extends Component {
  render() {
    return (
      <div style={{fontSize:"50px" , border:"3px solid hsl(350, 71%, 80%)",borderRadius:"10px"}}>PersonnelProfil <br/>
      <img src={fleur} width="100px"  alt="" style={{borderRadius:"10px" ,paddingLeft:"110px"}} />
      
      </div>
    )
  }
}


