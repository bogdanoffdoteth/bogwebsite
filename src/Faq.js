import React, {Component} from "react";

class FaqDiv extends Component{
  render(){
    return(
      <div className="faq-card card left-align">
        <div className="card-header" id={`heading-${this.props.id}`}>
          <h3 className="mb-0">
            <button className="faq-btn btn btn-link collapsed text-white" data-toggle="collapse" data-target={`#collapse-${this.props.id}`} aria-expanded="false" aria-controls={`collapse-${this.props.id}`}>
              {this.props.title}
            </button>
          </h3>
        </div>
        <div id={`collapse-${this.props.id}`} className="collapse" aria-labelledby={`heading-${this.props.id}`} data-parent="#accordion">
          <div className="faq-card-body card-body">
            {this.props.content}
          </div>
        </div>
      </div>
    )
  }
}

class Faq extends Component{
  render(){
    const FaqList=[
      {id:1,title:"Is this a scam?",content:"For obvious reasons I am unable to answer this with complete impartiality. Of course, I'll say that BOG is not a scam. Then again, 90% of crypto are scams. Why do you still invest? That is because you understand the risks that come with the rewards. Regardless of whether BOG is a scam, if you are a risk averse type of person, you should always cash out your initial amount and let the rest ride."},
      {id:2,title:"Will liquidity be locked?",content:"Once crowdsale ends, we'll lock liquidity for Uniswap, dev wallets and other relevant wallets."},
      {id:3,title:"What is the duration of the crowdsale?",content:"Crowdsale starts on 10th December and ends on 15th December. However, we'll end the crowdsale once it reaches the ETH hardcap."},
      {id:4,title:"How many tokens will be sold?",content:"1,200,000 $BOG will be sold in the crowdsale. The crowdsale rate is as follows: <25% (3000 BOG/ETH); 25%-75% (2500 BOG/ETH); >75% (2000 BOG/ETH)"},
      {id:5,title:"What will be the initial amount pooled to Uniswap?",content:"The exact amount is to be determined, but we'll adjust it such that presale participants can enjoy a small profit."},
      {id:6,title:"How do I play this game?",content:"Once every few days, BOG will either pump massively or dump to oblivion. The exact timing can be obtained by solving a series of puzzles. ETH accumulated in the Bogdavault from these dumps will be airdropped to hodlers periodically. Therefore, the more successful you are at timing the market, the greater your share of the Bogdavault."},
      {id:7,title:"I've no time for these games. Why should I buy this?",content:"As a hodler, you may think that this token does not benefit you. However, the token mechanism is designed in such a way that you can make money simply by hodling. Firstly, regardless of whether you participate, you will still receive airdrops by virtue of hodling. Secondly, those who buy high and sell low will see a reduction in their share of the Bogdavault, which by proxy increases your own share."},
      {id:8,title:"Will there be any future developments?",content:"Yes! We are planning to implement yield farming functionality between 2021/Q1 and 2021/Q2 if BOG becomes a success. You could potentially yield farm two different tokens based on market movement. But more on that later."},
      {id:9,title:"How will you engage the community?",content:"Insofar as our schedule permits, the team will hold weekly AMAs in our discord server."},
      {id:10,title:"How do I contact the team directly?",content:"Feel free to DM team members on discord/telegram. Alternatively, you can send us a message via Gmail: lesfreresbogdanoff123@gmail.com"}
    ];
    return(
      <div className="section">
        <div className="container">
          <div className="section-title">
            <h1>FAQ</h1>
          </div>

          <div id="accordion">
            {FaqList.map((qn)=>(<FaqDiv id={qn.id} title={qn.title} content={qn.content}/>))}
          </div>

        </div>
      </div>
    );
  };
};
export default Faq;
