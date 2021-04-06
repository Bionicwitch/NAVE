import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Home from "./routes/Home";
import Sobre from "./routes/Sobre";
import Posts from "./routes/Posts";

function App() {

  //return <Home/>;
  //return <Sobre/>;
  return <Router>
    <Switch>
    <Route exact path="/">
        <Home/>
      </Route>
      <Route path="/Sobre">
        <Sobre />
      </Route>
      <Route path="/Posts">
        <Posts />
      </Route>
    </Switch>
    <ToastContainer/>
  </Router>

}

export default App;
