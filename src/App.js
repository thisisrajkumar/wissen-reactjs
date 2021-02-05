import logo from './logo.svg';
import './App.css';
import ClassCom from './comTypes/ClassCom';
import FunCom from './comTypes/FunCom';
import HeaderCom from './header';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <HeaderCom />
        <Switch>
          <Route path="/class">
            <ClassCom />
          </Route>
          <Route path="/fun">
            < FunCom />
          </Route>
          <Route path="/">
            <h1>React Learning</h1>
          </Route>
        </Switch>
      </div>
    </Router>

  );
}

export default App;
