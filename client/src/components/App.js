import React, { Component } from 'react';
import NoMatch from './NoMatch';
import AboutUs from './AboutUs';
import NavBar from './NavBar';
import Login from './Login';
import Register from './Register';
import Flash from './Flash';
import Home from './Home';
import Single from './Single';
import ProtectedRoute from './ProtectedRoute';
import AuthRoute from './AuthRoute';
import FetchUser from './FetchUser';
import { Switch, Route } from 'react-router-dom';
import Cabins from './Cabins';
import Landing from './Landing';
import Gallery1 from './Gallery1';
import AdminPromoCodeForm from './AdminPromoCodeForm';
import AdminDashboard from './AdminDashboard';
import Family from './Family';
import Employees from './Employees';
import ReservationForm from './ReservationForm';
import Calendar from './Calendar'

class App extends Component {
  render() {
    return (
      <div>
        <NavBar/>
        <Flash />
        <FetchUser>
          <Switch>
            <Route exact path='/' component={Landing} />
            <Route exact path='/calendar' component={Calendar} />
            <Route exact path='/about' component={AboutUs} />
            <Route exact path='/cabins' component={Cabins} />
            <Route exact path='/home' component={Home} />
            <Route exact path='/landing' component={Home} />
            <Route exact path='/gallery' component={Gallery1} />
            <Route exact path='/employees' component={Employees} />
            <ProtectedRoute exact path='/reservation' component={ReservationForm} />
            <ProtectedRoute exact path='/admin_promo_code_add' component={AdminPromoCodeForm} />
            <ProtectedRoute exact path='/admin_dashboard' component={AdminDashboard} />
            <Route exact path='/single' component={Single}/>
            <Route exact path='/family' component={Family}/>
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