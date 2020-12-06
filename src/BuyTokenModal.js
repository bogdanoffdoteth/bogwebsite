import React, {Component} from "react";
import WalletBalance from "./WalletBalance.js";
import BuyTokenForm from "./BuyTokenForm.js";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCopy } from '@fortawesome/free-solid-svg-icons';

class BuyTokenModal extends Component{
  constructor(){
    super();
    this.state={remaining:0,rate:0, eth:0, bog:0};
  }
  componentDidMount(){
    let stateObj = this.updateState();
    this.setState({remaining:stateObj["remaining"],rate:stateObj["rate"], eth:stateObj["eth"], bog:stateObj["bog"]});
  };

  updateState(){
    let state = {"remaining":1,"rate":3000,"eth":50,"bog":10};
    return state;
  }

  copyCCA(){
    /* Get the text field */
    var copyText = document.getElementById("crowdsaleContractAddress");

    /* Select the text field */
    copyText.select();
    copyText.setSelectionRange(0, 99999); /*For mobile devices*/

    /* Copy the text inside the text field */
    document.execCommand("copy");

    /* Alert the copied text */
    alert("Copied the text: " + copyText.value);
  }
  render(){
    return(
      <div className="modal fade flex-h" id="buyTokenModal" tabindex="-1" role="dialog" aria-labelledby="buyTokenModalLabel" aria-hidden="true">
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title rm-text-shadow" id="buyTokenModalLabel">Buy Token</h5>
              <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>

            <div className="modal-body">

              <p className="left-align rm-text-shadow" style={{marginBottom:"0.2rem"}}>Crowdsale Contract Address:</p>
              <div className="container">
                <div className="row">
                  <div className="col-md-11" style={{paddingLeft:0,paddingRight:0}}>
                    <input disabled  style={{paddingLeft:"10px",borderRadius:"1000rem"}}className="full-w" id="crowdsaleContractAddress" type="text" value={this.props.contractAddress}/>
                  </div>
                  <div style={{paddingLeft:"5px"}}className="col-md-1 left-align">
                    <span onClick={this.copyCCA}><FontAwesomeIcon style={{fontSize:"25px", cursor:"pointer"}} icon={faCopy}/></span>
                  </div>
                </div>
              </div>
              <br/>
              <br/>
              <WalletBalance eth={this.state.eth} bog={this.state.bog} rate={this.state.rate}/>

              <br/>
              <BuyTokenForm minETH={0.1} maxETH={10} balanceETH={200} balanceBOG={9000} rate={3000}/>

            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-outline-danger btn-round" data-dismiss="modal">Close</button>
              <button type="button" className="btn btn-outline-success btn-round">Buy</button>
            </div>
          </div>
        </div>
      </div>
    );
  };
};

export default BuyTokenModal;
