import logo from './logo.svg';
import './App.css';
import Navbar from "./components/Navbar"
import { Route, Switch,Redirect ,BrowserRouter } from "react-router-dom";
import { DashboardRounded } from '@material-ui/icons';
import DashBoard from "./components/DashBoard"
function App() {
  return (
    <div className="App">
      <Navbar/>
      {/* <BrowserRouter>
      <Switch>
      <Route exact path="/" component={DashBoard}/>
      <Route exact path="/dashboard" component={DashBoard}/>
      <Route exact path="/assets" component={DashBoard}/>
      <Route exact path="/tracker" component={DashBoard}/>
      <Route exact path="planning" component={DashBoard}/>
      </Switch>
      
      </BrowserRouter> */}
      
    </div>

  );
}

export default App;
