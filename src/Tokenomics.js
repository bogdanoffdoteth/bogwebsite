import React, {Component} from "react";
import TokenomicsTable from "./TokenomicsTable.js";

class Tokenomics extends Component{
  render(){
    return(
      <div className="section">
        <div className="container">
          <div className="section-title">
            <h1 className="bold">Tokenomics</h1>
          </div>

          <TokenomicsTable/>
        </div>
      </div>

    )
  };
};
export default Tokenomics;
