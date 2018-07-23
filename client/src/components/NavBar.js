import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { handleLogout } from "../actions/auth";
import styled from "styled-components";
import {
  Menu,
} from "semantic-ui-react";


class NavBar extends Component {
  rightNavs = () => {
    const { user, dispatch, history } = this.props;
    if (user.id) {
      return (
        <Menu.Menu position="right">
          <Menu.Item
            name="Logout"
            onClick={() => dispatch(handleLogout(history))}
          />
        </Menu.Menu>
      );
    }
    return (
      <Menu.Menu position="right">
        <Link to="/register">
          <Menu.Item name="Register" />
        </Link>
        <Link to="/login">
          <Menu.Item name="Login" />
        </Link>
      </Menu.Menu>
    );
  };

  render() {
    const { user } = this.props;
    return (
      <Spacer>
        <StyledMenu fixed="top" pointing secondary>
          { user.role === 'admin' && 
            <Link to="/admin_dashboard">
              <Menu.Item name="Dashboard" />
            </Link>
          }
          <Link to="/home">
            <Menu.Item name="home" />
          </Link>
          <Link to="/about">
            <Menu.Item name="about us" />
          </Link>
          <Link to="/cabins">
            <Menu.Item name="Rooms" />
          </Link>
          <Link to="/reservation">
            <Menu.Item name="Reservation" />
          </Link>
          <Link to="/ammenities">
            <Menu.Item name="Ammenities" />
          </Link>
          <Link to="/contact">
            <Menu.Item name="Contact Us" />
          </Link>
          {this.rightNavs()}
        </StyledMenu>
      </Spacer>
    );
  }
}

const Spacer = styled.div`
  padding-top: 35px;
`;

const StyledMenu = styled(Menu)`
  background-color: #fff !important;
  height: 50px;
`;

const mapStateToProps = state => {
  return { user: state.user };
};

export default withRouter(connect(mapStateToProps)(NavBar));
