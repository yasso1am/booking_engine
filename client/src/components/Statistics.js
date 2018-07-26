import React, { Component } from 'react'
import {
    Container,
    Header,
    } from 'semantic-ui-react'
import { connect } from 'react-redux';
import { setHeaders } from '../actions/headers'
import axios from 'axios';
import styled from 'styled-components';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, Cell } from 'recharts';

class Statistics extends Component {
state = { 
    contacts: [], 
    users: [], 
    start_date: [],
    end_date: [],
    family: [],
    singles: [],
    smoking_room: [],
    ada_accessible: [],
  }
  
componentDidMount() {
    const { dispatch } = this.props 
     axios.get('/api/users')
    .then( res => {
        dispatch(setHeaders( res.headers))
        this.setState({users: res.data})
    });
    axios.get('/api/contacts')
   .then( res => {
       dispatch(setHeaders( res.headers))
       this.setState({contacts: res.data})
    });
    axios.get('/api/resStats')
    .then(res => {
        dispatch(setHeaders( res.headers))
        this.setState({singles: res.data})    
  
    });
}  

chooseColor = () => {
    return this.state.singles.map(s => {
        if (s.size === 'single') {
            return <Cell fill="#82ca9d" />
        } else {
            return <Cell fill="#82fa9d" />
        }
    });
}

render() {     
    const { contacts, users, reservations, singles } = this.state 
    return(
        <Container>
            <HeadWrap>
             {contacts.length + users.length} in mailing list
            </HeadWrap>
            <Header textAlign="center" as='h1'>
               Yearly Stat Chart
            </Header>  
            <GridWrapper>
                <BarChart width={900} height={300} data={this.state.singles}
                        margin={{top: 5, right: 30, left: 20, bottom: 5}}
                >     
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey={"start_month"} />
                    <YAxis />
                    <Tooltip />
                    <Legend payload={[{value: "family", color: "#82fa9d" }, {value: 'single', color: '#82ca9d'}]} />
                    <Bar      
                        dataKey={'room_count'} 
                    >
                        {this.chooseColor()}           
                    </Bar> 
                </BarChart>
            </GridWrapper>            
        </Container>      
    )};     
}

const GridWrapper = styled.div`
display: flex;
justify-content: center;
flex-wrap: wrap;
`
const HeadWrap = styled.div`
display: flex;
justify-content: flex-end;
`

function mapStateToProps(state) {
    return {
        reservations: state.reservations
    };
}

export default (connect(mapStateToProps)(Statistics));