import React, {Component} from "react";

class WalletBalance extends Component{
  BOGToETH(amt,rate){
    return (amt/rate);
  };


  render(){
    return(
      <div id="walletBalanceDiv" className="text-white">
        <h3 style={{marginBottom:0}}>My Balance</h3>
        <hr style={{marginTop:"0.5rem"}}/>
        <div className="left-align">
          <h1 className="bold">{this.props.eth}</h1>
          <h5>ETH</h5>
          <br/>
          <h1 className="bold">{this.props.bog}</h1>
          <h5>BOG ({this.BOGToETH(this.props.bog,this.props.rate)} ETH)</h5>
          <br/>
          <h5><span className="bold" style={{fontSize:"150%"}}>1</span> ETH <span className="bold" style={{fontSize:"150%"}}>= {this.props.rate}</span> BOG</h5>
        </div>
      </div>
    );
  };
};
export default WalletBalance;
