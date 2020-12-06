import React, {Component} from "react";
import Home from "./Home.js";
import About from "./About.js";
import Tokenomics from "./Tokenomics.js";
import Team from "./Team.js";
import Roadmap from "./Roadmap.js";
import Faq from "./Faq.js";



class LandingPage extends Component{
  render(){
    return(
      <div>
        <Home/>
        <div id="attrf-wrapper" className="text-white bold">
          <About/>
          <Tokenomics/>
          <Team/>
          <Roadmap/>
          <Faq/>
        </div>
      </div>
    );
  };
};

export default LandingPage;
