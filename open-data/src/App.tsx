import "./App.css";
import AuthorizeRoute from "./Components/AuthorizeRoute";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  withRouter,
} from "react-router-dom";
import SignIn from "./Pages/signin";
import SignUp from "./Pages/signup";
import MainPage from "./Pages/mainPage";
import SensorData from "./Pages/sensorData";
import AuthReducer from "./utility/AuthReducer";
import { Provider,  useSelector } from "react-redux";
import { createStore } from "redux";
import { StateInterface } from "./utility/interface";

const store = createStore(AuthReducer);

const RouteComponent = () => {
  const isSignout = useSelector((state: StateInterface) => state.isSignout);
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/" component={SignIn} />
          <Route exact path="/signup" component={SignUp} />
          <AuthorizeRoute
            exact
            path="/home"
            isSignout={isSignout}
            Component={withRouter(MainPage)}
            lbl="MainPage"
          />
          <AuthorizeRoute
            exact
            path="/data"
            isSignout={isSignout}
            Component={withRouter(SensorData)}
            lbl="SensorData"
          />
        </Switch>
      </div>
    </Router>
  );
};

function App() {
  return (
    <Provider store={store}>
      <RouteComponent />
    </Provider>
  );
}

export default App;
