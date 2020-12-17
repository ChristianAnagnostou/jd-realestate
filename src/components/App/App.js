// Components
import NavBar from "../NavBar/NavBar";
import Home from "../Home/Home";
import Listings from "../Listings/Listings";
import Community from "../Community/Community";
import MeetJD from "../MeetJD/MeetJD";
import GetInTouch from "../GetInTouch/GetInTouch";
// Router
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// Styles
import "./Styles/App.css";

function App() {

  return (
    <Router>
      <div className="App">
        <NavBar />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>

          <Route path="/listings">
            <Listings />
          </Route>

          <Route path="/community">
            <Community />
          </Route>

          <Route path="/meet-jd">
            <MeetJD />
          </Route>

          <Route path="/get-in-touch">
            <GetInTouch />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
