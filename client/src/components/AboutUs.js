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
										<InfoBubble>Luxury</InfoBubble>
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
	background-image: url('https://images.unsplash.com/photo-1507992997513-5aa7c22c613f?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=40a90a1424d129085983f69fcaf3a810&auto=format&fit=crop&w=1349&q=80');
	background-repeat: no-repeat;
	background-position: center top; 
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
	font-size: 30px;
`
const InfoContainer = styled.div`
	height: 150px;
	background-color: #202a0a;
	border: 1px solid white;
	display: flex;
	align-items: center;
	padding: 20px;
	justify-content: center;
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
	margin: 30px;
	font-size: 20px;
`
export default AboutUs;
