import React, { Component } from 'react';
import {
  Grid,
  Menu,
  Segment,
} from 'semantic-ui-react';
import styled from 'styled-components';
import Footer from './Footer';
import Gallery1 from './Gallery1';
import AboutUs from './AboutUs';

class Ammenities extends Component {
  state = { activeItem: 'Gallery' };

  handleItemClick = (e, { name }) => this.setState({ activeItem: name });


  render() {
    const { activeItem } = this.state;
    return (
      <div>
        <Grid stackable>
          <Grid.Column mobile={4} tablet={8} computer={16}>
            <Gallery1 />
          </Grid.Column>
        </Grid>
        <Footer />
      </div>
    )
  }
}


const MainImage = styled.image`
  display: flex;
  background-image:linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url('http://pereroivad.com/wp-content/uploads/2018/05/traditional-log-cabin-kitchens-country-french-house-frame-a-interior-colonial-green-designs-lake-galley-grey-classic-elements-with-modern-flooring-chic-cabinets-plans.jpg');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;  
  width: 100wv;
  height: 400px;
`

const HeaderText = styled.div`
position: absolute;
left: 40%;
top: 40%;
text-align: center;
padding-top: 20px;
font-size: 60px;
color: white;
`

export default Ammenities;
