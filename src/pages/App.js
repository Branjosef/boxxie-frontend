import React from 'react'
import '../styles/App.css';
import { Switch, Route } from 'react-router-dom';
import Welcome from "./Welcome";
import SignIn from './SignIn';
import NavBar from '../components/NavBarComponents/NavBar';
import Profile from './Profile';
import Dashboard from '../components/WelcomePageComponents/Dashboard'

class App extends React.Component {


  render() {
    return (
      <div className="App" >
        <NavBar />
        {/* <Switch>
          <Route exact path='/' component={Welcome} />
          <Route path='/login' component={SignIn} />
          <Route path='/homepage' component={Profile} />
        </Switch> */}
        <Dashboard />
      </div>
    );
  }
}

export default App;
