import React, {Component} from "react";
import CountdownClock from "./CountdownClock";
import ProgressBar from "./ProgressBar";
import CrowdsaleIntro from "./CrowdsaleIntro";
import BuyTokenModal from "./BuyTokenModal";
import BogLogo from "./assets/boglogo.png";

class Crowdsale extends Component{
  render(){
    return(
      <div className="crowdsale-wrapper">
        <div className="crowdsale-main">
          <div className="container">
            <div className="row">
              <div className="col-md-6">
                <div className="v-center flex-h full-w">
                  <CrowdsaleIntro status={true}/>
                  <br/>
                  <CountdownClock deadline = {new Date("Dec 10, 2020 23:59:59")}/>
                  <br/>
                  <ProgressBar max={490}/>
                  <br/>
                  <br/>
                  <div className="buy-token-read-whitepaper">
                    <button type="button" style={{marginRight:"30px"}} className="bold btn btn-outline-success btn-round waves-effect btn-lg" data-toggle="modal" data-target="#buyTokenModal">Buy Token</button>
                    <button type="button" className="bold btn btn-outline-info btn-round waves-effect btn-lg">Whitepaper</button>


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
        <BuyTokenModal contractAddress="RGTRTYHRTHTY464yt5yRGRTY56y5hRH65yRETGREi76"/>

      </div>

    );
  };
};

export default Crowdsale;
