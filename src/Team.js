import React, {Component} from "react";
import bogdanoff_eth_dp from "./assets/Bogdanoff.eth_DP.png";
import tormented_squidward_dp from "./assets/Tormented_Squidward_DP.png";
import cream_eth_dp from "./assets/Cream.eth_DP.png";

class TeamDiv extends Component{
  render(){
    return(
      <div className="col-md-4" align="center">
        <img className="team-member-img" src={this.props.img} alt={`${this.props.role} Profile`}></img>
        <h3>{this.props.name}</h3>
        <p>{this.props.role}</p>
      </div>
    );
  };
};

class Team extends Component{

  render(){
    const TeamList = [
      {img:bogdanoff_eth_dp ,name:"bogdanoff.eth", role:"founder/developer"},
      {img:tormented_squidward_dp,name:"Tormented Squidward", role:"community manager"},
      {img:cream_eth_dp,name:"Cream.eth", role: "marketing manager"}
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
