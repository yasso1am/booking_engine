import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import {
  Divider,
  Dropdown,
  Container,
  Header,
  Card,
  Image,
  Icon,
  Grid,
  Button,
} from "semantic-ui-react";
import styled from "styled-components";
import Footer from "./Footer";

class Cabins extends React.Component {
  state = { category: "" };

  handleChange = (e, data) => {
    this.setState({ category: data.value });
  };

  categoryOptions = () => {
    return [
      { key: 4, text: "Single", value: "single" },
      { key: 3, text: "Family", value: "family" },
      { key: 1, text: "Smoking Room", value: "smoking_room" },
      { key: 2, text: "ADA Accessible", value: "ada_accessible" }
    ];
  };

  displayRooms = () => {
    const { category } = this.state;
    const { cabins } = this.props;
    let visible = cabins;
    if (category) {
      if (category === "family" || "single")
        visible = cabins.filter(c => c.size === category);
      if (category === "smoking_room")
        visible = cabins.filter(c => c.smoking_room === true);
      if (category === "ada_accessible")
        visible = cabins.filter(c => c.ada_accessible === true);
    };
    return visible.map((cabin, i) => (
      <Card key={i}>
        <Image centered bordered src={defaultImage} />
        <Card.Content textAlign="center">
          <Link to={`/${cabin.size}`}>
            <Card.Header>
              {" "}
              {cabin.size.charAt(0).toUpperCase() + cabin.size.substr(1)}{" "}
            </Card.Header>
          </Link>
          <Card.Meta>${cabin.base_price}/night</Card.Meta>
          <Card.Description>
            {" "}
            A beautiful cabin - awaiting your stay{" "}
          </Card.Description>
        </Card.Content>
        <Card.Content extra>
          <Card.Meta>
            {cabin.ada_accessible && <Icon name="handicap" size="big" />}
            {cabin.smoking_room && <Icon name="gripfire" size="big" />}
          </Card.Meta>
        </Card.Content>
      </Card>
    ));
  };

  render() {
    const { category } = this.state;
    return (
      <Grid stackable>
        <Grid.Row>
          <Grid.Column mobile={4} tablet={8} computer={16}>
            <HeaderImage>
              <Header as="h1" inverted>
                {" "}
                All Cabins{" "}
              </Header>
            </HeaderImage>
            <Container>
              <Dropdown
                placeholder="Filter by type"
                fluid
                selection
                options={this.categoryOptions()}
                value={category}
                onChange={this.handleChange}
              />
              {category && (
                <Button
                  fluid
                  basic
                  onClick={() => this.setState({ category: "" })}
                >
                  Clear Filters
                </Button>
              )}
              <Divider hidden />
              <Card.Group itemsPerRow={3}>{this.displayRooms()}</Card.Group>
            </Container>
            <Divider hidden />
            <Footer />
          </Grid.Column>
        </Grid.Row>
      </Grid>
    );
  };
};

const mapStateToProps = state => {
  const { cabins } = state;
  return {
    cabins
  };
};

const HeaderImage = styled.div`
  background-image: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)),
    url("https://upload.wikimedia.org/wikipedia/commons/5/53/Post_and_Beam_Barn_Kitchen.jpg");
  background-position: center;
  background-attachment: fixed;
  background-repeat: no-repeat;
  background-size: cover;
  height: 35vh;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 30px;
  color: white;
`;
const defaultImage =
  "https://upload.wikimedia.org/wikipedia/commons/b/be/Sydnor_Log_Cabin.png";

export default connect(mapStateToProps)(Cabins);
