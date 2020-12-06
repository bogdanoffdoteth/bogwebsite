import React, {Component} from "react";

class RoadmapEvent extends Component{
  render(){
    return(
        <div className={`roadmap-container roadmap-${this.props.dir}`}>

`         <div className="roadmap-content left-align">

            <h3>{this.props.title}</h3>
            <p>{this.props.time}</p>
            <p>
              {this.props.content}
            </p>
          </div>
        </div>
    )
  }
}
class Roadmap extends Component{


  render(){
    const RoadmapList = [
      {title:"Crowdsale Starts", time:"December 10th 2020",content:"Crowdsale starts on December 10th 2020. The price will gradually increase with the amount of token sold. Exact timing TBD.",dir:'left'},
      {title:"Crowdsale Ends", time:"December 15th 2020",content:"Crowdsale ends on December 15th 2020, 23:59:59.",dir:'right'},
      {title:"Uniswap Pool", time:"December 16th 2020",content:"BOG token will be added to Uniswap with 90% of the ETH raised. The remaining 10% will be used for initial marketing efforts. Of course, strict checks and balances will be enforced to prevent embezzlement of funds.",dir:'left'},
      {title:"New Year Airdrop", time:"January 1st 2021",content:"Merry Christmas! To usher in the new year, a major airdrop will take place on January 1st 2021.",dir:'right'},
      {title:"Yield Farming Implementation", time:"Q1 2021 - Q2 2021",content:"If everything goes well, yield farming will be added to the token between Q1 2021 and Q2 2021. Beyond that, we'll leave it to another time.",dir:'left'}
    ]

    return(
    <div id="roadmap-wrapper" className="section">
      <div className="container">
        <div className="section-title">
          <h1>Roadmap</h1>
        </div>
          <div className="roadmap">
            {RoadmapList.map((item)=>(
              <RoadmapEvent title={item.title} time={item.time} content={item.content} dir={item.dir}/>
            ))}
          </div>
      </div>
    </div>
    )
  };
};
export default Roadmap;
