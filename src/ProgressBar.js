import React, {Component} from "react";

class ProgressBar extends Component{
  constructor(props){
    super(props);
    this.state = {amtRaised:0};
  };

  componentDidMount(){
    this.setState({amtRaised:100});
  }

  componentWillUnmount(){
    this.setState({amtRaised:0});
  }

  render(){
    let percentage = (this.state.amtRaised * 100)/(this.props.max);
    return(
      <div className="progress-bar-container text-white">
        <div className="progress" style={{marginBottom:"5px"}}>
          <div className="progress-bar bg-warning progress-bar-striped active" role="progressbar" aria-valuenow={this.state.amtRaised} aria-valuemin="0" aria-valuemax={this.props.max} style={{width:`${percentage}%`}}></div>
        </div>
        <div style={{float:"left"}}><h5 style={{fontWeight:600}}>0 ETH</h5></div>
        <div style={{float:"right",textAlign:"right"}}><h5 style={{fontWeight:600}}>{this.props.max} ETH</h5></div>
      </div>
    );
  };
};

export default ProgressBar;
