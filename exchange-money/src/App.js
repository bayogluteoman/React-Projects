import './App.css';
import Login from './pages/Login';
import Register from './pages/Register';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from './pages/Home';

function App() {
  return (
    <Router>
      <div className="App">
      <div className="auth-wrapper">
        <div className="auth-inner">
          <Switch>
            <Route exact path='/' component={Login} />
            <Route path="/sign-in" component={Login} />
            <Route path="/sign-up" component={Register} />
            <Route path="/home" component={Home} />
          </Switch>
        </div>
      </div>
      </div>
    </Router>
      
  );
}

export default App;
