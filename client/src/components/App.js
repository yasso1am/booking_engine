import React, { Component } from 'react';
import NoMatch from './NoMatch';
import AboutUs from './AboutUs';
import NavBar from './NavBar';
import Login from './Login';
import Register from './Register';
import Flash from './Flash';
import Home from './Home';
import ProtectedRoute from './ProtectedRoute';
import AuthRoute from './AuthRoute';
import FetchUser from './FetchUser';
import { Switch, Route } from 'react-router-dom';
import FetchCabins from './FetchCabins';
import Landing from './Landing';

class App extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <Flash />
        <FetchUser>
          <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/cabins' component={FetchCabins} />
            <Route exact path='/' component={Landing} />
            <Route exact path='/landing' component={Home} />
            <Route exact path='/' component={Home} />
            <Route exact path='/about' component={AboutUs} />
            <AuthRoute exact path='/login' component={Login} />
            <AuthRoute exact path='/register' component={Register} />

            <Route component={NoMatch} />
          </Switch>
        </FetchUser>
      </div>
    );
  }
}

export default App;
