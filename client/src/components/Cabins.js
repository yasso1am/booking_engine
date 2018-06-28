import React from 'react';
import { connect } from 'react-redux';
import { 
  Container,
  Header,
  Card,
  Image,
  Icon,
} from 'semantic-ui-react';
import styled from 'styled-components';

class Cabins extends React.Component {
  
  displayRooms = () => {
    const { cabins } = this.props;
    return cabins.map( (cabin, i) =>
    <Card key={i}>
      <Image centered bordered src={defaultImage} />  
      <Card.Content textAlign="center">
        <Card.Header> {cabin.size} </Card.Header>
        <Card.Meta>
          ${ cabin.base_price }/night
        </Card.Meta>
        <Card.Description> A beautiful cabin - awaiting your stay </Card.Description>
      </Card.Content>
      <Card.Content extra>
        <Card.Meta>
          { cabin.ada_accessible && <Icon name="handicap" size="big" />} 
        </Card.Meta>
      </Card.Content>
    </Card>
    )
  }
  
  render () {
    return (
      <React.Fragment>
      <HeaderImage>
        <Header as="h1" inverted> All Cabins </Header>
      </HeaderImage>
        <Container>
          <Card.Group itemsPerRow={3}>
            { this.displayRooms() }
          </Card.Group>
        </Container>
      </React.Fragment>
    )
  }
}

const mapStateToProps = (state) => {
  const { cabins } = state;
  return {
    cabins,
  }
}

const HeaderImage = styled.div`
  background-image: linear-gradient( rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7) ), url('https://upload.wikimedia.org/wikipedia/commons/5/53/Post_and_Beam_Barn_Kitchen.jpg');
  background-position: center;
  background-attachment: fixed;
  background-repeat: no-repeat;
  background-size: cover;
  height: 50vh;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 30px;
  color: white;
`
const defaultImage = 'https://upload.wikimedia.org/wikipedia/commons/b/be/Sydnor_Log_Cabin.png';

export default connect(mapStateToProps)(Cabins);