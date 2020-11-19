import React from 'react'; 
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './Components/Home/Home/Home';
import Login from './Components/Login/Login/Login';


function App() {
  return (
    <Router>
        <Switch>
        <Route path='/login'>
              <Login></Login>
          </Route>
          <Route path ='/'>
             <Home></Home>
          </Route>
        
        </Switch>
    </Router>
  );
}

export default App;
