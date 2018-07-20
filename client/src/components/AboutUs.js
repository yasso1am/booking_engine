import React, { Component } from 'react';
import { 
	Divider, 
	Container, 
	Grid,
 } from 'semantic-ui-react';
import styled from 'styled-components';
import Footer from './Footer';

class AboutUs extends Component {
	render() {
		return(
			<div>
				<Grid stackable>
					<Grid.Row>
						<Grid.Column mobile={4} computer={16}>
							<MainHeader />
						</Grid.Column>
					</Grid.Row>
						<Container>
							<Grid.Row>
								<Grid.Column mobile={4} tablet={8} computer={16}>
									<Divider hidden />
									<Header>Our History</Header>
									<Paragraph>
										Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla feugiat ac nulla in varius. 
										Cras in dapibus dui. Aenean sit amet posuere sapien. Integer mattis quam sed maximus venenatis. 
										Fusce vitae enim ipsum. Pellentesque at tellus ac turpis bibendum vehicula. Morbi pulvinar suscipit semper. 
										Ut vestibulum gravida enim in varius. Nulla in facilisis sapien. Phasellus at nulla sed ante vehicula facilisis. 
										Aliquam risus odio, eleifend sit amet posuere eu, blandit vel orci.
									</Paragraph>
								</Grid.Column>
							</Grid.Row>
							<Grid.Row>
								<Grid.Column mobile={4} tablet={8} computer={16}>
									<Divider segment />
									<Header>Our Mission</Header>
									<Paragraph>
										Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla feugiat ac nulla in varius. 
										Cras in dapibus dui. Aenean sit amet posuere sapien. Integer mattis quam sed maximus venenatis. 
										Fusce vitae enim ipsum. Pellentesque at tellus ac turpis bibendum vehicula. Morbi pulvinar suscipit semper. 
										Ut vestibulum gravida enim in varius. Nulla in facilisis sapien. Phasellus at nulla sed ante vehicula facilisis. 
										Aliquam risus odio, eleifend sit amet posuere eu, blandit vel orci.
									</Paragraph>
									<Divider hidden />
								</Grid.Column>
							</Grid.Row>
							<Grid.Row>
								<Divider segment />
								<Header>Features</Header>
								<Grid.Column mobile={4} tablet={8} computer={16}>
									<InfoContainer>
										<InfoBubble>50 Cabins</InfoBubble>
										<InfoBubble>5 Stars</InfoBubble>
										<InfoBubble>100 Acres</InfoBubble>
										<InfoBubble>10 Buildings</InfoBubble>
									</InfoContainer>
									<Divider hidden />
								</Grid.Column>
							</Grid.Row>
							<Grid.Row>
								<Grid.Column mobile={4} tablet={8} computer={16}>
									<Divider segment />
									<Header>What To Expect</Header>
									<Paragraph>
										Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla feugiat ac nulla in varius. 
										Cras in dapibus dui. Aenean sit amet posuere sapien. Integer mattis quam sed maximus venenatis. 
										Fusce vitae enim ipsum. Pellentesque at tellus ac turpis bibendum vehicula. Morbi pulvinar suscipit semper. 
										Ut vestibulum gravida enim in varius. Nulla in facilisis sapien. Phasellus at nulla sed ante vehicula facilisis. 
										Aliquam risus odio, eleifend sit amet posuere eu, blandit vel orci.
									</Paragraph>
									<Divider hidden />
								</Grid.Column>
							</Grid.Row>
						</Container>
				</Grid>
				<Footer />
			</div>
		)
	}
}

const MainHeader = styled.div`
	display: flex;
	background-image: url('https://icdn3.themanual.com/image/themanual/cabin-in-the-woods-on-a-lake.jpg');
	background-repeat: no-repeat;
	background-position: center; 
	width: 100%;
	height: 500px;
`
const Paragraph = styled.p`
	text-align: center;
	padding: 15px;
	font-size: 20px;
`
const Header = styled.h3`
	text-align: center;
	font-family: 'Josefin Slab';
	font-size: 30px;
`
const InfoContainer = styled.div`
	height: 150px;
	background-color: #00224B;
	border: 1px solid white;
	display: flex;
	justify-content: space-around;
	align-items: center;
	padding: 20px;
`
const InfoBubble = styled.div`
	color: white;
	display: flex;
	align-items: center;
	justify-content: center;
	height: 100px;
	width: 100px;
	border: 1px solid white;
	border-radius: 50px;
	word-wrap: normal;
`
export default AboutUs;
