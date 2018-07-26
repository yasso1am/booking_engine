import React, { Component } from 'react';
import styled from 'styled-components';
import { Icon,} from "semantic-ui-react";

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
				<IconContainer>
          <a style = {{color: 'gray'}} >
        <Icon name='facebook' size='big' />
        </a>
        <a style = {{color: 'gray'}}>
        <Icon name='instagram' size='big' />
        </a>
        <a style = {{color: 'gray'}}>
        <Icon name='twitter' size='big' />
        </a>
        <a style = {{color: 'gray'}}>
        <Icon name='pinterest' size='big' />
        </a>
        </IconContainer>
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
	font-size: 16px;
	color: grey;
`

const IconContainer = styled.div` 
  display: flex;
  flex-direction: row;
  align-items: center;
	flex-wrap: wrap;
	padding-top: 35px;  
`

export default Footer;