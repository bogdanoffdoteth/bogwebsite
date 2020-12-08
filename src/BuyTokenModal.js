import React, {Component} from "react";
import WalletBalance from "./WalletBalance.js";
import BuyTokenForm from "./BuyTokenForm.js";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCopy } from '@fortawesome/free-solid-svg-icons';
import Web3 from "web3";
import {BOGTOKENABI,BOGTOKENADDRESS} from "./BogTokenContract.js";
import {BOGCROWDSALEABI,BOGCROWDSALEADDRESS} from "./BogCrowdsaleContract.js";

class BuyTokenModal extends Component{
  constructor(){
    super();
    this.state={network:"",userAddress:'',weiRaised:0,rate:0, userEth:0, userBog:0};
    this.buyToken = this.buyToken.bind(this);
  }
  async componentDidMount(){
    await this.loadWeb3();
    await this.updateInfo();
    this.intervalId = setInterval(()=>this.detectChange(), 100);
    document.getElementById("finalBuyButton").disabled = true;
  }

  componentWillUnmount(){
    clearInterval(this.intervalId);
  }

  async detectChange(){
    let web3 = window.web3
    let firstAcc= await web3.eth.getAccounts().then(e=>e[0]);
    let networkType=await web3.eth.net.getNetworkType();
    if(firstAcc !== this.state.userAddress || networkType !== this.state.network){

      window.location.reload();
    }
  }

  async loadWeb3(){
    if(window.ethereum){
      window.web3 = new Web3(window.ethereum)
      await window.ethereum.enable();
    }
    else if (window.web3){
      window.web3 = new Web3(window.web3.currentProvider)
    }
    else{
      window.alert('Non-Ethereum browser detected. You should consider trying MetaMask!')
    }
  }

  async updateInfo(){
    let web3 = window.web3;
    let firstAcc= await web3.eth.getAccounts().then(e=>e[0]);
    let networkType=await web3.eth.net.getNetworkType();
    this.setState({userAddress:firstAcc,network:networkType});
    web3.eth.getBalance(firstAcc,function(error,result){

      if(error){
         console.log(error)
      }
      else{
        this.setState({userEth:result})
      }
    }.bind(this))
    let BogTokenContract = new web3.eth.Contract(BOGTOKENABI,BOGTOKENADDRESS);
    BogTokenContract.methods.balanceOf(firstAcc).call().then(
      (result) => {this.setState({userBog:result});console.log(this.state.userBog)}
    )

    let BogCrowdsaleContract = new web3.eth.Contract(BOGCROWDSALEABI,BOGCROWDSALEADDRESS);
    BogCrowdsaleContract.methods.currentRate().call().then(
      (result) => {this.setState({rate:result});console.log(this.state.rate)}
    )
    BogCrowdsaleContract.methods.weiRaised().call().then(
      (result) => {this.setState({weiRaised:result});console.log(this.state.weiRaised)}
    )


  }

  buyToken(){
    let ethVal = document.getElementById("buyTokenTextInput").value
    window.web3.eth.sendTransaction({
    from: this.state.userAddress,
    to: BOGCROWDSALEADDRESS,
    value: window.web3.utils.toWei(ethVal, "ether"),
    gas:210000
}, function(err, transactionHash) {
    if (err) {
        console.log(err);
    } else {
        console.log(transactionHash);
    }
});
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

  decimal(amt){
    return amt/(1e18)
  }

  remaining(wei){
    return 490 - this.decimal(wei);
  }

  render(){
    let maxEther = Math.min(10,this.remaining(this.state.weiRaised))
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
              <WalletBalance longEth={this.state.userEth} longBog={this.state.userBog} rate={this.state.rate}/>

              <br/>
              <BuyTokenForm minETH={0.1} maxETH={maxEther} balanceETH={this.decimal(this.state.userEth)} balanceBOG={this.decimal(this.state.userBog)} rate={this.state.rate}/>

            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-outline-danger btn-round" data-dismiss="modal">Close</button>
              <button id="finalBuyButton"type="button" onClick={this.buyToken} className="btn btn-outline-success btn-round">Buy</button>
            </div>
          </div>
        </div>
      </div>
    );
  };
};

export default BuyTokenModal;
