import React, {Component} from "react";
import "./fontawesome.scss"

class TokenomicsDiv extends Component{
  render(){
    return(

      <div className="tokenomics-div">
        <i className={"fas "+this.props.icon+" fa-3x"}></i>
        <h3>{this.props.amt} BOG</h3>
        <p>{this.props.desc}</p>
      </div>
    );
  };
};

class TokenomicsTable extends Component{
  render(){
    return(
      <div className="left-align">
        <TokenomicsDiv icon="fa-coins" desc="Total Supply" amt={18000000}/>
        <TokenomicsDiv icon="fa-piggy-bank" desc="BogdaVault (Initial)" amt={3000000}/>
        <TokenomicsDiv icon="fa-funnel-dollar" desc="Presale" amt={1200000}/>
        <TokenomicsDiv icon="fa-sync-alt" desc="Uniswap Liquidity" amt={1200000}/>
        <TokenomicsDiv icon="fa-gopuram" desc="Community Fund (locked for 1 month)" amt={300000}/>
        <TokenomicsDiv icon="fa-ad" desc="Marketing and Listing (locked for 2 months)" amt={900000}/>
        <TokenomicsDiv icon="fa-user-plus" desc="Team (locked for 3 months)" amt={600000}/>



      </div>
    );
  };
};

export default TokenomicsTable;
