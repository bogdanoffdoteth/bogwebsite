import React, {Component} from "react";

class About extends Component{
  render(){
    return(
      <div className="section">
        <div className="container">
          <div className="section-title">
            <h1 className="bold">About Us</h1>
          </div>
          <ul id="about-ul" className="left-align">
            <li>$BOG is a community-led token built on the Ethereum blockchain (ERC-20) that aims to revolutionize crypto games.</li>
            <li>It intends to simulate The Bog Effect, a popular phenomenon in crypto where the market does the exact opposite of what investors believe will happen, causing them to lose money or lose out on potential profits.</li>
            <li>Disclaimer: since it's an experimental game token, invest at your own risks and definitely think twice before putting in more than what you can afford to lose</li>
            <li>Please download our whitepaper for more information on $BOG:</li>
            <br/>
            <div className="center-align">
              <button id="download-whitepaper-button-home" className="center-align btn btn-purple btn-lg"><i class="fas fa-download mr-1" aria-hidden="true"></i>Whitepaper</button>
            </div>
          </ul>
        </div>
      </div>
    )
  };
};
export default About;
