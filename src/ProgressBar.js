import React, {Component} from "react";

class ProgressBar extends Component{


  render(){
    let percentage = (this.props.ethRaised * 100)/(this.props.max);
    return(
      <div className="progress-bar-container text-white">
        <div><h5 style={{fontWeight:600}}>{this.props.ethRaised}/490 ETH; {Math.floor(this.props.bogRaised)}/1200000 BOG</h5></div>
        <div className="progress" style={{marginBottom:"5px"}}>
          <div className="progress-bar bg-warning progress-bar-striped active" role="progressbar" aria-valuenow={this.props.ethRaised} aria-valuemin="0" aria-valuemax={this.props.max} style={{width:`${percentage}%`}}></div>
        </div>
        <div style={{float:"left"}}><h5 style={{fontWeight:600}}>0 ETH</h5></div>
        <div style={{float:"right",textAlign:"right"}}><h5 style={{fontWeight:600}}>{this.props.max} ETH</h5></div>
      </div>
    );
  };
};

export default ProgressBar;
