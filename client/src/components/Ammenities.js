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

  showActiveItem = () => {
    const { activeItem } = this.state;
    switch (activeItem) {
      case 'Gallery':
        return <Gallery1 />
      case 'AboutUs':
        return <AboutUs />
      // case "Pool & Spa":
      //   return <Pool />
      // case 'Breakfast':
      //   return <Breakfast />
      // case 'GYM':
      //   return <GYM/>
      default:
        return null
    }
  };

  render() {
    const { activeItem } = this.state;
    return (
      <div>
        <Grid stackable>
          <Grid.Column mobile={4} tablet={8} computer={16}>
            <MainImage />
            <HeaderText as='h1' >Ammenities </HeaderText>
          </Grid.Column>
            <Grid.Column width={3}>
              <Menu fluid vertical tabular>
                <Menu.Item name='PoolSpa' active={activeItem === 'Pool Spa'} onClick={this.handleItemClick} />
                <Menu.Item name='Gallery' active={activeItem === 'Gallery1'} onClick={this.handleItemClick} />
                <Menu.Item name='Breakfast' active={activeItem === 'Breakfast'} onClick={this.handleItemClick} />
                <Menu.Item name='AboutUs' active={activeItem === 'AboutUs'} onClick={this.handleItemClick} />
                <Menu.Item name='GYM' active={activeItem === 'GYM'} onClick={this.handleItemClick} />
              </Menu>
            </Grid.Column>
            <Grid.Column stretched width={12}>
              <Segment>
                {this.showActiveItem()}
              </Segment>
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
