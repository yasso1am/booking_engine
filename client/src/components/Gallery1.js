import React, { Component } from 'react';
import Gallery from 'react-grid-gallery';
import {
    Container,
    Header
} from 'semantic-ui-react';
import styled from 'styled-components';

class Gallery1 extends Component {
render() {
  const IMAGES =
  [{
          src: "http://mountaintopcabinrentals.com/CabinRentals/Amazing_Grace_Cabin3_of_26_1.jpg",
          alt: "Yellowstone",
          thumbnail: "http://mountaintopcabinrentals.com/CabinRentals/Amazing_Grace_Cabin3_of_26_1.jpg",
          thumbnailWidth: 320,
          thumbnailHeight: 174,
          caption: "YellowStone"
  },
  {
          src: "http://mountaintopcabinrentals.com/CabinRentals/Mountain_Dream_Lodge_-9_1.jpg",
          alt: "Yellowstone",
          thumbnail: "http://mountaintopcabinrentals.com/CabinRentals/Mountain_Dream_Lodge_-9_1.jpg",
          thumbnailWidth: 320,
          thumbnailHeight: 212,
          caption: "YellowStone"
  },
  
  {
          src: "http://mountaintopcabinrentals.com/CabinRentals/Mountain_Dream_Lodge_-15_1.jpg",
          alt: "Yellowstone",
          thumbnail: "http://mountaintopcabinrentals.com/CabinRentals/Mountain_Dream_Lodge_-15_1.jpg",
          thumbnailWidth: 320,
          thumbnailHeight: 212
  },
  {
        src: "http://mountaintopcabinrentals.com/CabinRentals/Amazing_Grace_Cabin1_of_26_1.jpg",
        alt: "Yellowstone",
        thumbnail: "http://mountaintopcabinrentals.com/CabinRentals/Amazing_Grace_Cabin1_of_26_1.jpg",
        thumbnailWidth: 320,
        thumbnailHeight: 212,
        caption: "YellowStone"
},
{
        src: "http://mountaintopcabinrentals.com/CabinRentals/Amazing_Grace_Cabin7_of_26_1.jpg",
        alt: "Yellowstone",
        thumbnail: "http://mountaintopcabinrentals.com/CabinRentals/Amazing_Grace_Cabin7_of_26_1.jpg",
        thumbnailWidth: 320,
        thumbnailHeight: 212,
        caption: "YellowStone"
},

{
        src: "http://mountaintopcabinrentals.com/CabinRentals/Amazing_Grace_Cabin13_of_26_1.jpg",
        alt: "Yellowstone",
        thumbnail: "http://mountaintopcabinrentals.com/CabinRentals/Amazing_Grace_Cabin13_of_26_1.jpg",
        thumbnailWidth: 320,
        thumbnailHeight: 212,
        caption: "Cabin"
},

{
        src: "http://mountaintopcabinrentals.com/CabinRentals/Amazing_Grace_Cabin19_of_26_1.jpg",
        alt: "Yellowstone",
        thumbnail: "http://mountaintopcabinrentals.com/CabinRentals/Amazing_Grace_Cabin19_of_26_1.jpg",
        thumbnailWidth: 320,
        thumbnailHeight: 212,
        caption: "YellowStone"
},
{
        src: "http://mountaintopcabinrentals.com/CabinRentals/Amazing_Grace_Cabin26_of_26_1.jpg",
        alt: "Yellowstone",
        thumbnail: "http://mountaintopcabinrentals.com/CabinRentals/Amazing_Grace_Cabin26_of_26_1.jpg",
        thumbnailWidth: 320,
        thumbnailHeight: 212,
        caption: "Cabin"
},

]

  return(

        <Container>
        <MainHeader>
            <Header as="h1" color="inverted" textAlign="center">Gallery</Header> 
            </MainHeader>                    
            <Gallery images={IMAGES} />
       </Container>
    );
  }
}

const MainHeader = styled.div`
background-image: linear-gradient( rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4) ), url('http://2.bp.blogspot.com/-oqEq6p9sKEA/T9-vt4YiM2I/AAAAAAAAO_A/NGSQf8DvCxs/s1600/Lamar+Valley+Panorama+01E.jpg');
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  height: 50vh;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 30px;
  color: black;
`

export default Gallery1;