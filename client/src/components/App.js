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
import { Switch, Route, Link } from 'react-router-dom';
import Cabins from './Cabins';
import Landing from './Landing';
import Gallery1 from './Gallery1';
import AdminPromoCodeForm from './AdminPromoCodeForm';
import AdminDashboard from './AdminDashboard';
import Family from './Family';
import Employees from './Employees';
import Calendar from './Calendar'
import { Sidebar, Menu, Segment, Button, Responsive } from 'semantic-ui-react';
import ContactUsForm from './ContactUsForm';
import ReservationForm from './ReservationForm';
import Ammenities from './Ammenities';
import LogoMakr_TerraNova from '../components/StyledComponents/image/LogoMakr_TerraNova.png';


import styled from 'styled-components';

class App extends Component {
  state = { visible: false };

  handleButtonClick = () => this.setState({ visible: !this.state.visible })

  handleSidebarHide = () => this.setState({ visible: false })

  render() {
    return (
      <div>
        <Responsive minWidth={768}>
          <NavBar />
        </Responsive>
        <Responsive maxWidth={768}>
        <Menu.Item 
          as={Button}
          onClick={this.handleButtonClick}
          >
                <img src={LogoMakr_TerraNova} 
                      width="40"
                      name="home"
                      important
                      alt="The logo as a menu button"
                      />
        </Menu.Item>
        </Responsive>
        <Sidebar.Pushable as={Segment}>
          <Sidebar
            as={Menu}
            animation='overlay'
            icon='labeled'
            inverted
            onHide={this.handleSidebarHide}
            vertical
            onClick={this.handleSidebarHide}
            visible={this.state.visible}
            width='thin'
          >
            <Link to="/">
              <Menu.Item >
                Home
              </Menu.Item>
            </Link>
            <Link to="/about">
              <Menu.Item>
                About Us
              </Menu.Item>
            </Link>
            <Link to="/cabins">
              <Menu.Item>
                Rooms
              </Menu.Item>
            </Link>
            <Link to="/reservation">
              <Menu.Item>
                Reservations
              </Menu.Item>
            </Link>
            <Link to="/ammenities">
              <Menu.Item>
                Gallery
              </Menu.Item>
            </Link>
            <Link to="/contact">
              <Menu.Item>
                Contact Us
              </Menu.Item>
            </Link>
          </Sidebar>
          <Flash />
          <Sidebar.Pusher>
            <FetchUser>
              <FetchUser>
                <Switch>
                  <Route exact path='/' component={Landing} />
                  <Route exact path='/home' component={Home} />
                  <Route exact path='/calendar' component={Calendar} />
                  <Route exact path='/about' component={AboutUs} />
                  <Route exact path='/cabins' component={Cabins} />
                  <Route exact path='/gallery' component={Gallery1} />
                  <Route exact path='/employees' component={Employees} />
                  <Route exact path='/ammenities' component={Gallery1} />
                  <ProtectedRoute exact path='/reservation' component={ReservationForm} />
                  <ProtectedRoute exact path='/reservation/:dates' component={ReservationForm} />
                  <ProtectedRoute exact path='/admin_promo_code_add' component={AdminPromoCodeForm} />
                  <ProtectedRoute exact path='/admin_dashboard' component={AdminDashboard} />
                  <Route exact path='/single' component={Single} />
                  <Route exact path='/family' component={Family} />
                  <Route exact path='/family' component={Family} />
                  <Route exact path='/contact' component={ContactUsForm} />
                  <AuthRoute exact path='/login' component={Login} />
                  <AuthRoute exact path='/register' component={Register} />
                  <Route component={NoMatch} />
                </Switch>
              </FetchUser>
            </FetchUser>
          </Sidebar.Pusher>
        </Sidebar.Pushable>
      </div>
    );
  }
}

const PaddedDiv = styled.div`
  padding-top: 25px;
`

export default App;
