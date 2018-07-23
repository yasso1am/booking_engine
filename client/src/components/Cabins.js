import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { setHeaders } from "../actions/headers"
import axios from 'axios';
import {
  Divider,
  Dropdown,
  Container,
  Header,
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
      .then(res => {
        this.setState({ cabins: res.data.cabins, total_pages: res.data.total_pages });
        this.props.dispatch(setHeaders(res.headers))
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
    return visible.map((cabin, i) => {
      return (
        <DisplayCard key={i}>
          <CabinImage src="https://upload.wikimedia.org/wikipedia/commons/b/be/Sydnor_Log_Cabin.png" />
          <CabinLink to={`/${cabin.size}`}>
            <HeaderName>
              {" "}
              {cabin.size.charAt(0).toUpperCase() + cabin.size.substr(1)}{" "}
            </HeaderName>
          </CabinLink>
          <CardIcon>
            {cabin.ada_accessible && <Icon name="handicap" size="big" />}
            {cabin.smoking_room && <Icon name="gripfire" size="big" />}
          </CardIcon>
          <CardContent>
            <CabinPrice>${cabin.base_price}/night</CabinPrice>
            <CardDescription>
              {" "}
              A beautiful cabin - awaiting your stay{" "}
            </CardDescription>
          </CardContent>
        </DisplayCard>
       ) 
    })
  };

  loadMore = () => {
    const page = this.state.page + 1
    axios.get(`/api/cabins?page=${page}`)
      .then(({ data, headers }) => {
        this.setState(state => {
          return { cabins: [...state.cabins, ...data.cabins], page: state.page + 1 }
        })
        this.props.dispatch({ type: 'HEADERS', headers })
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
              { category && 
                <Button
                  fluid
                  basic
                  onClick={() => this.setState({ category: "" })}
                >
                  Clear Filters
                </Button>
              }
              <Divider hidden />
              <InfiniteScroll
                pageStart={page}
                loadMore={this.loadMore}
                hasMore={page < total_pages}
                loader={<Loader />}
              >
                <CardGroup itemsPerRow={1}>
                  {this.displayRooms()}
                </CardGroup>
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
  background-repeat: no-repeat;
  background-size: cover;
  height: 35vh;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 30px;
  color: white;
`;

const CabinLink = styled(Link)`
  display: flex;
  justify-content: center;
  width: 20vw;
  color: slategray;
`;

const DisplayCard = styled.div`
  display: flex;
  border-radius: 6px;
  border: solid slategray 6px;
  height: 200px;  
`;

const HeaderName = styled.h2`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 3px;
  font-family: 'Josefin Slab';
`;

const CabinImage = styled(Image)`
  paddign: 10px;
  height: 190px;
  width: 30%;
`;

const CardContent = styled.h4`
  color: red;
`;

const CardIcon = styled.div`
  width: 20%;
  padding-top: 20px;
  color: blue;
`;

const CabinPrice = styled.div`
  justify-content: center;
  color: darkgreen;
  font-size: 25px;
`;

const CardDescription = styled.div`
  color: slategray;
  justify-content: center;
  font-size: 15px;
`;

const CardGroup = styled.div`
  width: 100%;
  radius: 60%;
  `;
export default connect()(Cabins);
