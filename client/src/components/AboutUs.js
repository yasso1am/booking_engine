import React, { Component } from 'react';
import { Divider, Container, Grid } from 'semantic-ui-react';
import styled from 'styled-components';
import Footer from './Footer';

class AboutUs extends Component {
	render() {
		return(
			<div>
				<Grid stackable>
					<Grid.Row>
						<Grid.Column mobile={4} computer={16}>
							<MainHeader></MainHeader>
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
	background-image: url('https://images.unsplash.com/photo-1499696010180-025ef6e1a8f9?ixlib=rb-0.3.5&s=2041fd6c2a8ac244c054a855f25c5fd6&auto=format&fit=crop&w=1350&q=80');
	background-repeat: no-repeat;
	background-position: center top; 
	background-attachment: fixed
	height: 450px;
	display: flex;
`
const Paragraph = styled.p`
	text-align: center;
	font-family: "Palatino Linotype", "Book Antiqua", Palatino, serif;
	padding: 15px;
`
const Header = styled.h3`
	text-align: center;
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