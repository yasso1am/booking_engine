import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {  Grid, } from 'semantic-ui-react';
import styled from 'styled-components';
import Footer from './Footer';

  
  class NoMatch extends Component {
    render() {
      return (
        <div>
          <Grid stackable>
            <Grid.Row>
              <Grid.Column mobile={4} tablet={8} computer={16}>
                <MainPhoto/>
                  <ErrorMessage>404</ErrorMessage>
                  <ErrorMessageBottom>Page Not Found</ErrorMessageBottom>
                  <ErrorButton>
                    <Link style = {{color: 'white'}} to='/'>Back to Home</Link>
                  </ErrorButton>
                 
              </Grid.Column>
            </Grid.Row>
          </Grid>
          <Footer/>
        </div>
    );
  }
}

const MainPhoto = styled.div`
  background-image: url(https://images.unsplash.com/photo-1522828984268-8f9460f7ffb3?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=fbe5c34ef76e2b83a1fdf8ed7ecc2d9d&auto=format&fit=crop&w=800&q=60);
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat; 
  height: 700px;
  text-align: center;
  display: flex;
  overflow: scroll;
`

const ErrorMessage = styled.h1`
  position: absolute;
  left: 37%;
  top: 10%;
  text-align: center;
  padding-top: 20px;
  font-size: 200px;
  color: #F3F5F4;
`

const ErrorMessageBottom = styled.h1`
  position: absolute;
  left: 28%;
  top: 40%;
  text-align: center;
  padding-top: 20px;
  font-size: 80px;
  color: #F3F5F4;
`

const ErrorButton = styled.div`
  width: 250px;
  height: 60px;
  padding: 15px;
  background-color: black;
  border: 2px solid black;
  font-size: 18pt;
  text-align: center;
  color: white;
  opacity: 0.8;
  position: absolute;
  left: 38%;
  top: 68%;
`
export default NoMatch;
