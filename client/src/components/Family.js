import React, { Component } from 'react';
import {
  Header,
  Image,
  Segment,
  Container,
} from 'semantic-ui-react';
import styled from 'styled-components';

class Family extends Component {
  render() {
    return (
      <div>
        <Padding>
          <Header as='h1' textAlign='center'> Family Room View </Header>
          <Segment>
            <Image src='https://s.abcnews.com/images/Lifestyle/ht_treehouse_2_kab_150603_12x5_992.jpg' width='900px' heigth='300px' centered />
          </Segment>
          <Container>
            <Segment centered>
              <Calender>
                <Info> Some info about the room
                <Paragraph>what a cool cabin!!</Paragraph>
                </Info>
                <Image src='http://www.free-printable-calendar.com/calendars-images/may-2018-calendar.gif'/>
              </Calender>
            </Segment>
          </Container>
          <Photo>
            <RoomImage
              imageUrl='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9MBszm1raKGzL-b438iDauM9e9sDGF3NPpkFYzgDqLgaoKXlj'
              hoverUrl='https://78.media.tumblr.com/ba23f2e30379e624443e81caa459d39e/tumblr_inline_mk2lyjUvAM1qz4rgp.png'
            />
            <RoomImage
              imageUrl='https://vignette.wikia.nocookie.net/tolas/images/f/f1/Witcher_3_Concept_Art_12.jpg/revision/latest?cb=20160821125410'
              hoverUrl='https://pre00.deviantart.net/89cc/th/pre/f/2015/024/3/3/cabin_inside_by_vityar83-d8f9vys.jpg'
            />
            <RoomImage
              imageUrl='https://img00.deviantart.net/226b/i/2011/336/7/c/zoom_park_alaska_cabin_inside_by_ingeline_art-d4hx1sq.jpg'
              hoverUrl='https://i.pinimg.com/736x/91/d7/e5/91d7e565c6887e07fcf531aac64a111b--small-cabins-log-cabins.jpg'
            />
          </Photo>
        </Padding>
      </div>
    )
  }
}

const Photo = styled.div`
  display: flex;
  justify-content: space-around;
`;

const RoomImage = styled.div`
  background: ${ props => `url(${props.imageUrl})`};
  background-size: cover;
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
  height: 300px;
  width: 33%;

  &:hover {
    background: ${ props => `url(${props.hoverUrl})`};
    background-size: cover;
    background-size: contain;
    background-position: center;
    transition: ;
    height: 300px;
    width: 33%;
  }
`;

const Padding = styled.div`
  padding: 5% 0%;
`;

const Info = styled.h2`
  display: flex;
  flex-direction: column;
  color: red;
`;

const Paragraph = styled.h4`
  display: flex;
  flex-direction: column;
  align-content: center;
  color: blue;
`;

const Calender = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

export default Family;
