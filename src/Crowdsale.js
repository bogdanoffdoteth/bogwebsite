import React, {Component} from "react";
import CountdownClock from "./CountdownClock";
import ProgressBar from "./ProgressBar";
import CrowdsaleIntro from "./CrowdsaleIntro";
import BuyTokenModal from "./BuyTokenModal";
import BogLogo from "./assets/boglogo.png";
import {BOGCROWDSALEABI, BOGCROWDSALEADDRESS} from "./BogCrowdsaleContract.js";
import web3 from "./Web3.js";


class Crowdsale extends Component{
  constructor(props){
    super(props);
    this.state = {isOpen:0,weiRaised:0,bogRaised:0};
  }

  decimal(val){
    return val/(1e18);
  }

  updateIsOpen(val){
    this.setState({isOpen:val},
        ()=>{this.toggleBuyTokenButton(this.state.isOpen);}
      );
  }

  toggleBuyTokenButton(cond){

    if(cond){
      if(document.getElementById("buyTokenButton").disabled){
        document.getElementById("buyTokenButton").disabled = false;
      }
    }else{
      if(!document.getElementById("buyTokenButton").disabled){
        document.getElementById("buyTokenButton").disabled = true;
      }
    }
  }
  updateWeiRaised(val){
    this.setState({weiRaised:val});
  }

  updateBogRaised(val){
    this.setState({bogRaised:val});
  }

  componentDidMount(){
    let BogCrowdsaleContract = new web3.eth.Contract(BOGCROWDSALEABI,BOGCROWDSALEADDRESS);


    BogCrowdsaleContract.methods.isOpen().call((error, result) => {
      this.updateIsOpen(result);
    });

    BogCrowdsaleContract.methods.weiRaised().call((error, result) => {
      this.updateWeiRaised(result);
    });

    BogCrowdsaleContract.methods.tokenRaised().call((error,result)=>{
      this.updateBogRaised(result);
    })

    this.toggleBuyTokenButton(this.state.isOpen);
  }

  render(){
    return(
      <div className="crowdsale-wrapper">
        <div className="crowdsale-main">
          <div className="container">
            <div className="row">
              <div className="col-md-6">
                <div className="v-center flex-h full-w">
                  <CrowdsaleIntro status={this.state.isOpen}/>
                  <br/>
                  <CountdownClock deadline = {new Date(Date.UTC(2020, 11, 15, 23, 59,59))} status = {this.state.isOpen}/>
                  <br/>
                  <ProgressBar max={490} ethRaised={this.decimal(this.state.weiRaised)} bogRaised={this.decimal(this.state.bogRaised)}/>
                  <br/>
                  <br/>
                  <div className="buy-token-read-whitepaper">
                    <button id="buyTokenButton" type="button" style={{marginRight:"30px"}} className="bold btn btn-outline-success btn-round waves-effect btn-lg" data-toggle="modal" data-target="#buyTokenModal">Buy Token</button>
                    <a href="/bogdanoff.finance whitepaper (Official Release V1).pdf" download="$BOG Whitepaper" className="bold btn btn-outline-info btn-round waves-effect btn-lg">Whitepaper</a>


                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="v-center flex-h full-w">
                  <img src={BogLogo} alt="BOG logo" style={{width:"80%"}}/>
                </div>
              </div>
            </div>
          </div>
        </div>
        <BuyTokenModal contractAddress={BOGCROWDSALEADDRESS} weiRaised={this.state.weiRaised}/>

      </div>

    );
  };
};

export default Crowdsale;
