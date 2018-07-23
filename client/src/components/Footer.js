import React, { Component } from 'react';
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
	height: 155px;
	background-color: #504B3A;
`
const Paragraph = styled.div`
	font-family: 'Josefin Slab';
	font-size: 12px;
	color: grey;
`
export default Footer;