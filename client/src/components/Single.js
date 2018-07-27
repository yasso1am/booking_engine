import React, { Component } from 'react';
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import {
  Header,
  Button,
  Grid,
} from 'semantic-ui-react';
import styled from 'styled-components';
import DateSelector from './DateSelector'
import moment from 'moment';
import { makeReservation } from "../reducers/reservations";
import Footer from './Footer';

class Family extends Component {
  state = {
    startDate: moment(),
    endDate: moment(),
  }

  handleStart = date => {
    this.setState({ startDate: date });
  };

  handleEnd = date => {
    this.setState({ endDate: date });
  };

  handleSubmit = event => {
    event.preventDefault();
    const { dispatch } = this.props;
    const {
      startDate,
      endDate,
    } = this.state;
    const reservation = {
      start_date: startDate,
      end_date: endDate,
    };
    dispatch(makeReservation(reservation));
  }

  foo = () => {
    console.log('Foo...');
  };

  render() {
    const {
      startDate,
      endDate,
    } = this.state;

    return (
      <div>
        <Grid stackable>
          <Grid.Row>
            <Grid.Column mobile={4} tablet={8} computer={16}>
              <HeadImage>
                <Header as='h1' textAlign='center' inverted> Single Room Cabin </Header>
              </HeadImage>
            </Grid.Column>
          </Grid.Row>
          <Grid.Row style={{ display: 'flex', justifyContent: 'center', margin: '0 25px' }}>
              <div style={{ flex: 1}}>
                  <h2> Single Cabin</h2>
                    <h4 style={{display: 'flex', justifyContent: 'center'}}>This dwelling constructed of logs, especially a less finished or architecturally sophisticated structure. Log cabins have an ancient history in Europe, and in America are often associated with first generation home building by settlers.</h4>
                </div>
            <div style={{display: 'flex', flex: 1}}>
              <Calendar
                handleStart={this.handleStart}
                handleEnd={this.handleEnd}
                startDate={startDate}
                endDate={endDate}
                />
            </div>
            <div style={{display: 'flex', alignItems: 'center'}}>
              <Link to={{
                pathname: '/reservation',
                state: {
                  startDate: this.state.startDate._d,
                  endDate: this.state.endDate._d,
                }
              }}>
                <SButton>Submit</SButton>
              </Link>
            </div>
          </Grid.Row>
          <Grid.Row>
            <Grid.Column>
              <Photo>
                <RoomImage
                  imageUrl='https://4.bp.blogspot.com/-F5-_-3XTdYg/WsWfN9A0uRI/AAAAAAAADuQ/AXy4wgLHfB0dVGNKCUQOr3ofuNG6pTcyQCEwYBhgL/s1600/Log_Cabin_Living_Room_Renovation_Pine_Floors.jpg'
                  hoverUrl='https://2.bp.blogspot.com/-889jhVI_Lwc/WsWfObteJcI/AAAAAAAADuY/45rbRFpQbLggEp9UFL10kTRE5avn94IyQCEwYBhgL/s1600/Log_Cabin_Living_Room_Renovation_before.jpg'
                />
                <RoomImage
                  imageUrl='https://78.media.tumblr.com/1f3b6ecb4647ee7d13def7ab3c25805d/tumblr_o5lsktk8ur1szdyreo1_500.jpg'
                  hoverUrl='https://tedxumkc.com/wp-content/uploads/2017/08/Classic-Outside-Light-Fixtures.jpg'
                />

                <RoomImage
                  imageUrl='http://countryheatautumn.com/wp-content/uploads/2018/05/interior-design-job-description-rustic-walls-wood-log-cabin-bedroom-pine-beautiful-9.jpg'
                  hoverUrl='https://cdn.allwallpaper.in/wallpapers/706x400/6573/log-cabin-bedroom-suite-706x400-wallpaper.jpg'
                />
              </Photo>
            </Grid.Column>
          </Grid.Row>
        </Grid >
        <Footer />
      </div >
    )
  }
}


const HeadImage = styled.div`
  background-image:  linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)),
                      url('https://odis.homeaway.com/odis/listing/db76cdcc-d341-4dd2-ac64-4d83dfee816a.c10.jpg');
  display: flex;
  background-repeat: no-repeat;
  background-position: center; 
  background-size: cover;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 500px;
`

const Photo = styled.div`
  display: flex;
  justify-content: space-around;
`;

const RoomImage = styled.div`
  background: ${ props => `url(${props.imageUrl})`};
  background-size: cover;
  background-size: contain;
  background-position: center;
  height: 300px;
  width: 33%;

  &:hover {
    background: ${ props => `url(${props.hoverUrl})`};
    background-size: cover;
    // background-size: contain;
    background-position: center;
    transition: ;
    height: 300px;
    width: 33%;
  }
`;

const Calendar = styled(DateSelector)`
  display: flex;
  justify-content: flex-end;
`

const SButton = styled(Button)`
  width: 125px;
  background-color: #00bcd4;
  border: 2px solid;
  font-size: 8pt;
  justity-content: center;
  color: white;
  border-radius: 3px;
  `

export default connect()(Family);

