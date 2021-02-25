import React from 'react'
import '../styles/App.css';
import { Switch, Route } from 'react-router-dom';
import Welcome from "./Welcome";
import SignIn from './SignIn'

class App extends React.Component {


  render() {
    return (
      <div className="App">

        <Switch>
          <Route exact path='/' component={Welcome} />
          <Route path='/Login' component={SignIn} />
        </Switch>
      </div>
    );
  }
}

export default App;
