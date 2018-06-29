import React, { Component } from 'react';
import { Divider, Container, Button } from 'semantic-ui-react';
import styled from 'styled-components';

class AboutUs extends Component {
	render() {
		return(
			<div>
				<MainHeader></MainHeader>
				<Container>
					<Divider hidden />
					<Header>About Us</Header>
					<Paragraph>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla feugiat ac nulla in varius. 
						Cras in dapibus dui. Aenean sit amet posuere sapien. Integer mattis quam sed maximus venenatis. 
						Fusce vitae enim ipsum. Pellentesque at tellus ac turpis bibendum vehicula. Morbi pulvinar suscipit semper. 
						Ut vestibulum gravida enim in varius. Nulla in facilisis sapien. Phasellus at nulla sed ante vehicula facilisis. 
						Aliquam risus odio, eleifend sit amet posuere eu, blandit vel orci.
					</Paragraph>
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
					<InfoContainer>
						<InfoBubble>50 Cabins</InfoBubble>
						<InfoBubble>5 Stars</InfoBubble>
						<InfoBubble>100 Acres</InfoBubble>
						<InfoBubble>10 Buildings</InfoBubble>
					</InfoContainer>
					<Divider hidden />
				</Container>
			</div>
		)
	}
}

const MainHeader = styled.div`
	background-image: url(https://images.unsplash.com/photo-1488441770602-aed21fc49bd5?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=f093285a418b6aadfc00bd4b8354ec02&auto=format&fit=crop&w=1350&q=80);
	background-size: cover;
	background-position: center center;
	background-repeat: no-repeat; 
	height: 450px;
	display: flex;
	align-items: center;
	justify-content: center;
`
const Paragraph = styled.p`
	text-align: center;
	font-family: "Palatino Linotype", "Book Antiqua", Palatino, serif;
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