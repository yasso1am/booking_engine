import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import axios from 'axios';
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
  Loader,
} from "semantic-ui-react";
import styled from "styled-components";
import Footer from "./Footer";
import InfiniteScroll from 'react-infinite-scroller'

class Cabins extends React.Component {
  state = { category: "", page: 0, total_pages: 0, cabins: [] };
  
  componentDidMount() {
    axios.get('/api/cabins')
      .then( res => {
        this.setState({ cabins: res.data.cabins, total_pages: res.data.total_pages });
        this.props.dispatch({ type: 'HEADERS', headers: res.headers });
      });
  };

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
    const { category, cabins } = this.state;
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

  loadMore = () => {
    const page = this.state.page + 1
    axios.get( `/api/cabins?page=${page}`)
    .then( ({data, headers}) => {
      this.setState(state => {
        return{ cabins: [...state.cabins, ...data.cabins], page: state.page + 1}
      })
      this.props.dispatch({ type: 'HEADERS', headers})
    })
  };

  render() {
    const { category, page, total_pages } = this.state;
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
              { category && (
                <Button
                  fluid
                  basic
                  onClick={() => this.setState({ category: "" })}
                >
                  Clear Filters
                </Button>
              )}
              <Divider hidden />      
              <InfiniteScroll
                pageStart={page}
                loadMore={this.loadMore}
                hasMore={ page < total_pages }
                loader={<Loader />}
                >       
                <Card.Group itemsPerRow={2}>
                  {this.displayRooms()}
                </Card.Group> 
              </InfiniteScroll>  
            </Container>
            <Divider hidden />
            <Footer />
          </Grid.Column>
        </Grid.Row>
      </Grid>
    );
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

export default connect()(Cabins);
