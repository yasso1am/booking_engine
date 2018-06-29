import React, { Component } from 'react';
import { Header, Form, Button, Segment } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { registerUser } from '../actions/auth';
import { setFlash } from '../actions/flash';

class ReservationForm extends Component {
  state = { email: '', firstName: '', lastName: '' };

  handleSubmit = event => {
    event.preventDefault();
    const { email, firstName, lastName } = this.state;
    const { dispatch, history } = this.props;
    if (password === lastName) {
      dispatch(registerUser(email, firstName, lastName, history));
    } else dispatch(setFlash('FirstName do not match!, please try again', 'red'));
  }

  handleChange = event => {
    // use e to grab the id off the element also the value and set state
    // const { id, value } = event.target;
    const id = event.target.id;
    const value = event.target.value;
    this.setState({ [id]: value });
  }

  render() {
    const { email, firstName, lastName } = this.state;

    return (
      <Segment basic>
        <Header as='h1' textAlign='center'>Reservation Form Component</Header>
        <Form onSubmit={this.handleSubmit}>
          <Form.Field>
            <label htmlFor='email'>Email</label>
            <input
              id='email'
              placeholder='Email'
              required
              value={email}
              onChange={this.handleChange}
            />
          </Form.Field>
          <Form.Field>
            <label htmlFor='firstName'>First Name</label>
            <input
              id='firstName'
              placeholder='FirstName'
              type='FirstName'
              required
              value={firstName}
              onChange={this.handleChange}
            />
          </Form.Field>
          <Form.Field>
            <label htmlFor='LastName'>Last Name</label>
            <input
              id='lastName'
              placeholder='LastName Confirmation'
              type='LastName'
              required
              value={lastName}
              onChange={this.handleChange}
            />
          </Form.Field>
          <Segment basic textAlign='center'>
            <Button type='submit'>Submit</Button>
          </Segment>
        </Form>
      </Segment>
    );
  }
}

export default connect()(ReservationForm);
