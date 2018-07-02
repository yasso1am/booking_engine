import React, { Component } from 'react';
import { Grid, Container } from 'semantic-ui-react';
import styled from 'styled-components';

class Footer extends Component {
	render () {
		return (
			<Wrapper>
				<Paragraph>
					Terra Nova Cabins
				</Paragraph>
				<Paragraph>
					Yellowstone National Park - Wyoming, United States
				</Paragraph>
			</Wrapper>
		)
	}
}

const Wrapper = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;
	height: 120px;
	background-color: #504B3A;
`
const Paragraph = styled.div`
	font-size: 12px;
	color: grey;
	font-family: "Palatino Linotype", "Book Antiqua", Palatino, serif;
`
export default Footer;