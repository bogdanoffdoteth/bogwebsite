import React, {Component} from "react";

class WalletBalance extends Component{
  BOGToETH(amt,rate){
    return (amt/rate);
  };

  decimal(amt){
    return amt/(1e18)
  }


  render(){
    let rate = this.props.rate;
    let bog = this.decimal(this.props.longBog);
    let eth = this.decimal(this.props.longEth);
    return(
      <div id="walletBalanceDiv" className="text-white">
        <h3 style={{marginBottom:0}}>My Balance</h3>
        <hr style={{marginTop:"0.5rem"}}/>
        <div className="left-align">
          <h1 className="bold">{eth}</h1>
          <h5>ETH</h5>
          <br/>
          <h1 className="bold">{bog}</h1>
          <h5>BOG ({this.BOGToETH(bog,rate)} ETH)</h5>
          <br/>
          <h5><span className="bold" style={{fontSize:"150%"}}>1</span> ETH <span className="bold" style={{fontSize:"150%"}}>= {rate}</span> BOG</h5>
        </div>
      </div>
    );
  };
};
export default WalletBalance;
