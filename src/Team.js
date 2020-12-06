import React, {Component} from "react";
import egUser from "./assets/eg-user.png";

class TeamDiv extends Component{
  render(){
    return(
      <div className="col-md-4" align="center">
        <img className="team-member-img" src={this.props.img}></img>
        <h3>{this.props.name}</h3>
        <p>{this.props.role}</p>
      </div>
    );
  };
};

class Team extends Component{

  render(){
    const TeamList = [
      {img:egUser ,name:"bogdanoff.eth", role:"founder/developer"},
      {img:egUser,name:"john doe", role:"community manager"},
      {img:egUser,name:"jane doe", role: "marketing manager"}
    ];
    return(
      <div className="section">
        <div className="container">
          <div className="section-title">
            <h1>Team</h1>
          </div>
          <div className="row">
            {TeamList.map((person)=>(
              <TeamDiv img={person.img} name={person.name} role={person.role}/>
            ))}
          </div>
        </div>
      </div>

    )
  }
}

export default Team;
