import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { 
  Header, 
  Image, 
  } from 'semantic-ui-react';

  
  class NoMatch extends Component {
    render() {
      return (
        <div>
          <Header as='h1' textAlign='center'>
          I Got You This Time Buzz!!
          (Page Not Found)
          <br/>
          <Link to='/'>Come Home</Link>
          <hr/>
        </Header>
          <Image src='https://media.giphy.com/media/ZmagpA1sYZC3m/giphy.gif' height="50%" width="50%" aline centered />
        </div>
    );
  }

}

export default NoMatch;



