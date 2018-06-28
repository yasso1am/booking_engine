import React from 'react';
import { connect } from 'react-redux';
import { Route } from 'react-router-dom';
import { getCabins } from '../reducers/cabins';
import Cabins from './Cabins';

class FetchCabins extends React.Component { 

  componentDidMount() {
    this.props.dispatch(getCabins())
  }

  render() {
      return(
        <div>
          <Route exact path="/cabins" component={Cabins} />
        </div>
      )   
  }
}

export default connect()(FetchCabins);