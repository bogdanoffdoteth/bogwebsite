import logo from './logo.svg';
import './App.css';
import LandingPage from "./LandingPage.js";
import Crowdsale from "./Crowdsale.js";
import WeeklyBounty from "./WeeklyBounty.js";
import Navbar from "./Navbar.js";
import Footer from "./Footer.js";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

function App() {
  return (
    <Router>
    <div className="App">
      <Navbar/>
      <Switch>
        <Route exact path="/" component={LandingPage}/>
        <Route path="/crowdsale" component={Crowdsale}/>
        <Route path="/weekly-bounty" component={WeeklyBounty}/>
      </Switch>
      <Footer/>
    </div>
    </Router>

  );
}

export default App;
