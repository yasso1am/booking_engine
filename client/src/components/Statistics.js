import React, { Component } from 'react'
import {
    Container,
    Header,
} from 'semantic-ui-react'
import { connect } from 'react-redux';
import { setHeaders } from '../actions/headers'
import axios from 'axios'

class Statistics extends Component {
state = { contacts: [], users: [] }

componentDidMount() {
    const { dispatch } = this.props 
     axios.get('/api/users')
    .then( res => {
        dispatch(setHeaders( res.headers))
        this.setState({users: res.data})
    })
    axios.get('/api/contacts')
   .then( res => {
       dispatch(setHeaders( res.headers))
       this.setState({contacts: res.data})
    })
}
    render(){
        const { contacts, users } = this.state
        return(
        <Container>
            <Header as='h1'>
               {contacts.length + users.length} Users in the database
            </Header>        
         </Container>
        )
    }

}

export default connect()(Statistics);