import "./App.css";
import { useEffect } from "react";
import AuthorizeRoute from "./Components/AuthorizeRoute";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  withRouter,
  Redirect,
} from "react-router-dom";
import SignIn from "./Pages/SignIn";
import SignUp from "./Pages/SignUp";
import MainPage from "./Pages/MainPage";
import SensorData from "./Pages/SensorData";
import AuthReducer from "./Utility/AuthReducer";
import { Provider, useDispatch, useSelector } from "react-redux";
import { createStore } from "redux";
import { getStorageData } from "./Utility/StorageSession";
import { StateInterface } from "./Utility/Interface";
const store = createStore(AuthReducer);

const RouteComponent = () => {
  const isSignout = useSelector((state: StateInterface) => state.isSignout);
  const dispatch = useDispatch();
  useEffect(() => {
    // Fetch the token from storage then navigate to our appropriate place
    const bootstrapAsync = async () => {
      try {
        const accessToken = await getStorageData("accessToken");
        if (accessToken !== null) {
          dispatch({
            type: "RESTORE_TOKEN",
            accessToken: accessToken,
          });
        }
      } catch (e) {
        // Restoring token failed
        console.log(e);
      }
    };
    bootstrapAsync();
  }, [isSignout]);
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/" component={SignIn} />
          <Route exact path="/signup" component={SignUp} />
          <Redirect exact from="/" to="/home" />
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
