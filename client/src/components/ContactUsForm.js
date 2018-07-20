import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addContact } from '../reducers/contacts';
import { Padding, Container, Header, Dropdown, Button, Form } from 'semantic-ui-react';
import styled from 'styled-components';

class ContactUsForm extends Component {
    initialState = { 
        first_name: '',
        last_name: '',
        subject: '',
        email: '',
        phone: '', 
        text: '',
    }

    state = {...this.initialState}


    handleSubmit = (e) => {
        const { dispatch } = this.props;
        e.preventDefault();
        const { subject, first_name, last_name, email, phone, text } = this.state;
        let contact = {subject: subject, first_name: first_name, last_name: last_name, email: email, phone: phone, text: text };
        dispatch(addContact(contact));
        this.setState(this.initialState);
    }

    handleChange = (e) => {
        const { name, value } = e.target
        this.setState({ [name]: value })
    }

    handleSubjectChange = (e, data) => {
        this.setState({ subject: data.value })
    }

	render() {
        const { 
            subject, 
            first_name, 
            last_name, 
            email, 
            phone, 
            text 
        } = this.state;

        const subjectOptions = [  
            { key: 'g', text: 'General Question', value: 'General_Question', name: 'General_Question'},
            { key: 'e', text: 'Group Event Question', value: 'Group_Event_Question', name: 'Group_Event_Question'},
            { key: 't', text: 'Tell Us About Your Stay', value: 'Tell_Us_About_Your_Stay', name: 'Tell_Us_About_Your_Stay'},
            { key: 'a', text: 'Recommend our Staff or Accommodation', value: 'Recommendation_Of_Staff_Or_Accommodation', name: 'Recommendation_Of_Staff_Or_Accommodation'},
            { key: 'r', text: 'Reservation Question', value: 'Reservation_Question', name: 'Reservation_Question'},
        ]
		return(  
            <div>
                <MainHeader></MainHeader>
                <Header as='h1' textAlign='center'>Contact Us</Header>
                    <Container>
                    <Form onSubmit={this.handleSubmit}>    
                    <Form.Field widths='equal'>
                    <label htmlFor='contact'></label>
                        <Form.Group widths='equal'>
                            <Form.Dropdown
                                value={subject}
                                selection
                                label="Subject"
                                options={subjectOptions}
                                placeholder="Subject"
                                onChange={this.handleSubjectChange} 
                                />
                            <Form.Input 
                                fluid label='First name' 
                                placeholder='First name' 
                                id="first_name"
                                name="first_name"
                                autoComplete="given-name"                        
                                value={first_name} 
                                onChange={this.handleChange}
                                />
                            <Form.Input 
                                fluid label='Last name' 
                                placeholder='Last name'
                                id='last_name' 
                                name='last_name'
                                autoComplete='family-name'
                                value={last_name} 
                                onChange={this.handleChange}
                                />
                        </Form.Group>
                                <Form.Group widths='equal'>
                                    <Form.Input
                                        fluid label='Email' 
                                        id='email' 
                                        name="email"
                                        autoComplete="email" 
                                        placeholder='email' 
                                        value={email} 
                                        onChange={this.handleChange}
                                        />
                                    <Form.Input
                                        fluid label='Phone' 
                                        id='phone' 
                                        name="phone"
                                        autoComplete='tel-national' 
                                        placeholder='xxx-xx  ' 
                                        value={phone} 
                                        onChange={this.handleChange}
                                        />
                                </Form.Group>
                                    <Form.TextArea 
                                        fluid label='Message'
                                        placeholder='Tell us more about ...' 
                                        id='text' 
                                        name='text'
                                        autoComplete='message'
                                        value={text} 
                                        onChange={this.handleChange}
                                        />
                                   
                                        <Button positive
                                            type="submit" 
                                            value="Submit">Submit
                                        </Button>
                                  
                    </Form.Field>
                    </Form> 
                    </Container>
                </div>
        )
    }
}

    
const MainHeader = styled.div`
    background-image: url(https://images.unsplash.com/photo-1488441770602-aed21fc49bd5?ixlib=rb-0.3.5&s=07ba5eba4f4a1d7963d1b9cbf00e5667&auto=format&fit=crop&w=2550&q=80);
    background-size: cover;
    background-position: center center;
    background-repeat: no-repeat; 
    height: 250px;
    text-align: center;
    display: flex;
    overflow: scroll;
    font-family: 'Josefin Slab';
    `;

export default connect()(ContactUsForm);
