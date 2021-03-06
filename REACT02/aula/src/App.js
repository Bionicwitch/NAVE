import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Home from "./Home";
import Sobre from "./Sobre";
import Posts from "./Posts";

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
  </Router>

}

export default App;
