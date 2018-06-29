import React, { Component } from 'react';
import { Divider, Container, Button, Grid } from 'semantic-ui-react';
import styled from 'styled-components';

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
			</div>
		)
	}
}

const MainHeader = styled.div`
	background-image: url(https://images.unsplash.com/photo-1488441770602-aed21fc49bd5?ixlib=rb-0.3.5&s=07ba5eba4f4a1d7963d1b9cbf00e5667&auto=format&fit=crop&w=2550&q=80);
	background-size: cover;
	background-position: center center;
	background-repeat: no-repeat; 
	height: 450px;
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
	background-color: #ce8782;
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