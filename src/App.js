import "./App.css";
import { Component } from "react";
import PersonnelProfil from "./Component/PersonnelProfil";
import ImgProfil from "./Component/MyImg.png";
class App extends Component {
  constructor(){
    super();
    this.state = {
      show : true,
      time:0,
      Person : { 
        fullName: "ANWAR",
        bio: "financial",
        imgSrc: ImgProfil,
        profession: " web developer",
        },
    }
  }
 
  Handleshow= () => {
  this.setState( prevState=>({show: !prevState.show}))
  }


  render() {    


    return (    
      <div id="container">

        {console.log("render")}
        {console.log(this.state.Person.fullName)}
        {console.log(this.state.Person.bio)}
        {console.log(this.state.Person.profession)}
        <img src={ImgProfil} alt="#" width="100px"/> <br/>
        {console.log(this.state.show)}
        <button onClick={this.Handleshow} style={{height:"50px",borderRadius:"15px" , fontSize:"25px",  backgroundColor:'pink', border: "2px solid pink "}}>Click To Change</button> <br/>
        {console.log(this.state.show)}
        {this.state.show ? <PersonnelProfil 
        fullName={this.state.Person.fullName}
        bio={this.state.Person.bio}
        profession={this.state.Person.profession}
        /> : <h1>profil did found</h1>} <br/>


        
      </div>
    );
  }
}
export default App;
