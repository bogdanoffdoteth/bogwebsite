import React, {Component} from "react";
import QuickRundown from "./QuickRundown.js";
import QuickRundownModal from "./QuickRundownModal";
import "./GlitchEffect.scss";
class Home extends Component{
  render(){
    return(
      <div id="landingPageHome" className="section">
        <QuickRundown/>
        <QuickRundownModal/>
        <div className="full-w flex-h v-center text-white">
          <h1 id= "projectText" className="bold glitch" data-text="BOG Token">BOG Token</h1>
          <p id="projectSubText">an experimental game token based on The Bog Effect</p>
          <div id="contact-icon-div">
            <div className="contact-icon-l">

              <a href="https://discord.gg/6nTkyR5" target="_blank" rel="noreferrer"><span id="btn-discord" className="inline-block-display contact-icon"></span></a>
              <a href="https://t.me/bogtoken" target="_blank" rel="noreferrer"><span id="btn-telegram" className="inline-block-display contact-icon"></span></a>
              <a href="https://bogdanoffeth.medium.com/" target="_blank" rel="noreferrer"><span id="btn-medium" className="inline-block-display contact-icon"></span></a>
              <a href="https://twitter.com/BogdanoffEth" target="_blank" rel="noreferrer"><span id="btn-twitter" className=" inline-block-display contact-icon"></span></a>
              <span style={{width:"5px", height:"45px", borderRight:"white solid 1px"}} className=" inline-block-display"></span>
              <span style={{width:"5px", height:"45px", borderLeft:"white solid 1px"}} className=" inline-block-display"></span>
              <a disabled target="_blank" rel="noreferrer"><span id="btn-uniswap" className=" inline-block-display contact-icon"></span></a>

            </div>

          </div>
        </div>
      </div>
    )
  };
};
export default Home;
