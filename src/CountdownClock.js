import React, {Component} from "react";

class CountdownClock extends Component{
  constructor(props){
    super(props);
    this.state = {date: new Date(),status:this.props.status};
    this.updateClock  = this.updateClock.bind(this);
  }

  componentDidMount(){
    this.updateClock();
    console.log(this.props.deadline);
  }

  componentDidUpdate(prevProps) {
    if(this.props.status !== prevProps.status) // Check if it's a new user, you can also use some unique property, like the ID  (this.props.user.id !== prevProps.user.id)
    {
      //this.setState({date:new Date(), status:this.props.status});
      this.setState({date:new Date(),status: this.props.status}, function(){this.updateClock()});


    }
  }


  componentWillUnmount(){
    clearInterval(this.timerID);
  }

  updateClock(){
    if(this.state.status===true){
      if(this.state.date < this.props.deadline){
        this.revertClockStyle();
        this.timerID = setInterval(
          () => this.tick(),
          1000)
      }else{
        this.setState({date:this.props.deadline});
        this.changeClockStyle();
      }
    }else{
      clearInterval(this.timerID)
      this.setState({date:this.props.deadline});
      this.changeClockStyle();

    }

  }

  tick(){
    this.setState({
      date: new Date()
    });
  }

  changeClockStyle(){
    document.getElementById("countdownClockPanel").style.setProperty("color", "IndianRed", "important")
  }

  revertClockStyle(){
    document.getElementById("countdownClockPanel").style.setProperty("color", "white", "important")
  }

  secondsToTime(secs){
    let days = Math.floor(secs/(60*60*24));
    let divisor_for_hours = secs % (60*60*24);
    let hours = Math.floor(divisor_for_hours/(60*60));
    let divisor_for_minutes =divisor_for_hours % (60*60);
    let minutes = Math.floor(divisor_for_minutes/(60));
    let divisor_for_seconds = divisor_for_minutes % 60;
    let seconds = Math.ceil(divisor_for_seconds);

    let obj = {
      "d": days,
      "h": hours,
      "m": minutes,
      "s": seconds
    }

    return obj;
  }


  render(){
    let countdownObj = this.secondsToTime((this.props.deadline.getTime() - this.state.date.getTime()) / 1000);

    return(
      <div className="container">
        <div id="countdownClockPanel" className="row text-white justify-content-md-center">

          <div className="col-md-2 countdown-component-div">
            <div className="countdown-component-val"><h1>{countdownObj["d"]}</h1></div>
            <h5>days</h5>
          </div>
          <h1>:</h1>


          <div className="col-md-2 countdown-component-div">
            <div className="countdown-component-val"><h1>{countdownObj["h"]}</h1></div>
            <h5>hours</h5>
          </div>
          <h1>:</h1>

          <div className="col-md-2 countdown-component-div">
            <div className="countdown-component-val"><h1>{countdownObj["m"]}</h1></div>
            <h5>minutes</h5>
          </div>
          <h1>:</h1>


          <div className="col-md-2 countdown-component-div">
            <div className="countdown-component-val"><h1>{countdownObj["s"]}</h1></div>
            <h5>seconds</h5>
          </div>

        </div>
      </div>
    );
  }
}

export default CountdownClock;
