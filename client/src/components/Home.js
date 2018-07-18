import React, { Component } from 'react';
import { Container, Divider, Grid } from 'semantic-ui-react';
import styled from 'styled-components';
import Footer from './Footer';

class Home extends Component {
  render() {
    return (
      <div>
        <Grid stackable>
          <Grid.Row>
            <Grid.Column mobile={4} computer={16}>
                <MainHeader></MainHeader>
            <Headerr>TERRA NOVA CABINS</Headerr>
            </Grid.Column>
            </Grid.Row>
            <Container>
              <Grid.Row>
                <Grid.Column mobile={4} tablet={8} computer={16}>
                  <Divider hidden/>
                  <Paragraph>
                    Yellowstone Luxury Cabins is the collection of finest independent luxury cabins in Dubrovnik, Croatia. Find out more about our offering!
                  </Paragraph>
                  <Divider hidden/>
                  <MainParagraph>
                    "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.<br/> Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?"
                  </MainParagraph>
                </Grid.Column>
              </Grid.Row>
            <Grid.Row>
              <Grid.Column mobile={4} tablet={8} computer={16}>
                  <Divider hidden/>
                  <ImageContainer>
                    <Preview picture={'https://images.unsplash.com/photo-1482275548304-a58859dc31b7?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=5314541653a64dda3a7057d24d259c73&auto=format&fit=crop&w=800&q=60'}/>
                    <Preview picture={'https://images.unsplash.com/photo-1477430428568-b07a848ad411?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=32ff06ad9c687a67ea39f6e01b3b3869&auto=format&fit=crop&w=800&q=60'}/>
                    <Preview picture={'https:images.unsplash.com/photo-1470753937643-efeb931202a9?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=605dda29d7945345968d2dfb3eeb672e&auto=format&fit=crop&w=800&q=60'}/>
                  </ImageContainer>
                  <Divider hidden/>
              </Grid.Column>
            </Grid.Row>
          </Container> 
        </Grid>
        <Footer/>
      </div>
    )
  }
}

const MainHeader = styled.div`
  background-image: url(https://images.unsplash.com/photo-1511445905762-94360cdeeae6?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=21c59e583d3cc45faaa9ec4e5b279b3a&auto=format&fit=crop&w=1650&q=80);
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat; 
  height: 500px;
  text-align: center;
  display: flex;
  overflow: scroll;
` 

const Preview = styled.div`
  background-image: url(${props => props.picture});
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat; 
  height: 350px;
  width: 350px;
  text-align: center;
  display: flex;
  overflow: scroll;
  margin: 0 5px;
  `
  const ImageContainer = styled.div`
  display: flex;
  flex-direction: row;
  padding: 10px;
`

const Headerr = styled.h1`
  position: absolute;
  left: 26%;
  top: 20%;
  text-align: center;
  padding-top: 20px;
  font-size: 60px;
  color: white;
`

const Paragraph = styled.h1`
  text-align: center;
  font-family: "Didot 24 A","Didot 24 B"", "Book Antiqua", Palatino, serif;
`

const MainParagraph = styled.p`
  text-align: center;
  font-family: "Didot 24 A","Didot 24 B"", Palatino, serif;
  padding-bottom: 80px;
  font-size: 25px;
`

export default Home;
