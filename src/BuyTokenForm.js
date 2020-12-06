import React, {Component} from "react";
import "./fontawesome.scss";

class BuyTokenForm extends Component{

  convertBOGToETH(val,rate){
    if(isNaN(val)){
      return val;
    };
    return Number(val)/rate;
  };

  convertETHToBOG(val,rate){
    if(isNaN(val)){
      return val;
    };
    return Number(val)*rate;
  };

  maxContribution(){
    return Math.min(this.props.maxETH, this.props.balanceETH, 10 - this.convertBOGToETH(this.props.balanceBOG,this.props.rate));
  };

  updateTextInputInner(e){
      document.getElementById("amtInETH").innerHTML = e.target.value * this.props.rate;
  }
  updateTextInput(e){
    document.getElementById("buyTokenTextInput").value = e.target.value;
  };

  render(){

    return(
      <div id="buyTokenForm">
        <div class="md-form md-outline input-with-post-icon" style={{marginBottom:"0.5rem"}}>
          <i className="input-prefix fa-2x fab fa-ethereum rm-text-shadow"></i>
          <input placeholder="Amt to purchase" type="number" id="buyTokenTextInput" className="form-control form-control-lg" aria-describedby="helpMsg" onChange={e=> {this.updateTextInputInner(e)}}/>
        </div>
        <h5 className="bold left-align rm-text-shadow">= <span id="amtInETH">0</span> BOG</h5>

        <small id="helpMsg" className="form-text text-muted"></small>
        <input className="slider" type="range" id="buyTokenRangeInput" step="0.001" min={this.props.minETH} max={this.maxContribution()} onChange={e=> {this.updateTextInput(e);this.updateTextInputInner(e)}}/>
      </div>
    );
  };
};

export default BuyTokenForm;
