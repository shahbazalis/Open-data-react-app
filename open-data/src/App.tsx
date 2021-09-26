import "./App.css";
import AuthorizeRoute from "./Components/AuthorizeRoute";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  withRouter,
  Redirect,
} from "react-router-dom";
import SignIn from "./Pages/signin";
import SignUp from "./Pages/signup";
import Dashboard from "./Pages/dashboard";
import SensorData from "./Pages/sensorData"

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/" component={SignIn} />
          <Route exact path="/signup" component={SignUp} />
          <AuthorizeRoute
            exact
            path="/dashboard"
            Component={withRouter(Dashboard)} 
            lbl="Dashboard"
          />
          <AuthorizeRoute
            exact
            path="/data"
            Component={withRouter(SensorData)} 
            lbl="SensorData"
          />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
