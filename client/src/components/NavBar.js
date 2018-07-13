import React, { Component } from "react";
import { Menu } from "semantic-ui-react";
import { Link, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { handleLogout } from "../actions/auth";
import styled from "styled-components";

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
          <Link to="/feature">
            <Menu.Item name="Features" />
          </Link>
          <Link to="/blog">
            <Menu.Item name="Blog" />
          </Link>
          <Link to="/contact">
            <Menu.Item name="Contact" />
          </Link>
          {this.rightNavs()}
        </StyledMenu>
      </Spacer>
    );
  }
}

const Spacer = styled.div`
  padding-top: 40px;
`;

const StyledMenu = styled(Menu)`
  background-color: #fff !important;
`;

const mapStateToProps = state => {
  return { user: state.user };
};

export default withRouter(connect(mapStateToProps)(NavBar));
