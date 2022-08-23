
import React, { Component } from 'react'
import fleur from './fleur.jpg'


export default class PersonnelProfil extends Component {

  state={time:0}

  componentDidMount() {
    console.log("cdm")
    setInterval(() => {this.setState({ time: this.state.time + 1 });
  } , 1000);}
  

  render() {
    const  {fullName,  bio, profession} = this.props;

    return (
      <div>
      <div style={{fontSize:"25px" , border:"3px solid hsl(350, 71%, 80%)",borderRadius:"10px" }}>
      {fullName} <br/>
      {bio} <br/>
      {profession} <br/>
      



      
       <br/>
      
      
      <img src={fleur} width="100px"  alt="" style={{borderRadius:"10px" ,paddingLeft:"110px"}} />


      </div>
      <button style={{height: '"50px",borderRadius:"15px"' ,fontsize:"25px", backgroundcolor:'yellow', border: "2px solid pink "}}>time : {this.state.time} sec</button>

      
      
      </div>

    )
  }
}


