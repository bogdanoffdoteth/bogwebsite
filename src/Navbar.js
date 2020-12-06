import {NavLink} from 'react-router-dom';
import React, {Component} from "react";
class Navbar extends Component{
  componentDidMount(){
    var prevScrollpos = window.pageYOffset;
    window.onscroll = function() {
      var currentScrollPos = window.pageYOffset;
      if (prevScrollpos > currentScrollPos) {
        document.getElementById("navbar").style.top = "0";
      } else {
        document.getElementById("navbar").style.top = "-100px";
      };
      prevScrollpos = currentScrollPos;
    };
  };


  render(){
    return(
      <nav id="navbar" className="navBar rm-text-shadow">
        <ul>
          <li><NavLink exact to="/">Home</NavLink></li>
          <li><NavLink to="/crowdsale">Crowdsale</NavLink></li>
          <li><NavLink to="/weekly-bounty">Weekly Bounty</NavLink></li>
        </ul>
      </nav>
    );
  };
};

export default Navbar;
