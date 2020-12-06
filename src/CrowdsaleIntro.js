import React, {Component} from "react";
import "./GlitchEffect.scss";
class CrowdsaleIntro extends Component{
  boolToText(active){
    if(active){
      return "Active";
    }else{
      return "Inactive";
    }
  }
  render(){
    let statusTextStyle = {color: this.props.status ? "lightgreen" : "lightred"};

    return(
      <div>
        <h1 id= "titleText" className="glitch text-white" data-text="$BOG Crowdsale">$BOG Crowdsale</h1>
        <h3 id="statusText" className="text-white">Status: <span style={statusTextStyle}>{this.boolToText(this.props.status)}</span></h3>
      </div>
    );
  };
};

export default CrowdsaleIntro;
