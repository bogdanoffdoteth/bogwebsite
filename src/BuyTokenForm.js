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

  validation(e){
    let inputVal = e.target.value;
    var cond; var warning;
    if(inputVal < this.props.minETH){
      console.log("Minimum contribution: 0.1 ETH");
      warning = "Minimum contribution: 0.1 ETH!"
      cond=false;
    }else if(inputVal>this.maxContribution()){
      console.log("Maximum contribution exceeded!");
      warning="Maximum contribution exceeded!"
      cond=false;
    }else{
      warning="Good to go!"
      cond=true;
    }
    this.toggleFinalBuyButton(cond);
    this.toggleWarningMessage(!cond, warning);

  }

  toggleFinalBuyButton(cond){
    if(cond){
      if(document.getElementById("finalBuyButton").disabled){
        document.getElementById("finalBuyButton").disabled = false;
      }
    }else{
      if(!document.getElementById("finalBuyButton").disabled){
        document.getElementById("finalBuyButton").disabled = true;
      }
    }
  }

  toggleWarningMessage(cond,message){
    //cond = true: warning message
    let msg = document.getElementById("warningMsg")
    if(cond){
      msg.classList.remove("text-success","text-info")
      msg.classList.add("text-danger");
    }else{
      msg.classList.remove("text-danger","text-info")
      msg.classList.add("text-success");
    }

    document.getElementById("warningMsg").innerHTML = message;
  }

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
          <input placeholder="Amt to purchase" type="number" id="buyTokenTextInput" className="form-control form-control-lg" aria-describedby="helpMsg" onChange={e=> {this.updateTextInputInner(e);this.validation(e)}}/>
        </div>
        <h5 className="bold left-align rm-text-shadow">= <span id="amtInETH">0</span> BOG</h5>
        <p id="warningMsg" className="bold left-align rm-text-shadow text-info">Min/Max: 0.1 ETH/10 ETH</p>

        <input className="slider" type="range" id="buyTokenRangeInput" step="0.001" min={this.props.minETH} max={this.maxContribution()} onChange={e=> {this.updateTextInput(e);this.updateTextInputInner(e);this.validation(e)}}/>
      </div>
    );
  };
};

export default BuyTokenForm;
