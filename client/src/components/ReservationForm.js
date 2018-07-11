import React, { Component } from "react";
import { Header, Form, Checkbox, Button, Segment } from "semantic-ui-react";
import { connect } from "react-redux";

class ReservationForm extends Component {
  state = {
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    startDate: "",
    endDate: "",
    specialRequest: "",
    smokingRoom: "",
    adaAccessible: "",
    petFriendlyRoom: ""
  };

  componentDidmount() {
    const user = this.props;
    this.setState({
      firstName: user.first_name
    });
  }

  handleSubmit = event => {
    event.preventDefault();
  };

  handleChange = e => {
    const { id, value } = e.target;
    this.setState({ [id]: value });
  };

  handleCheck = e => {
    const { id, value } = e.target;
    this.setState({ [id]: value });
  };
  render() {
    const {
      phone,
      email,
      firstName,
      lastName,
      startDate,
      endDate,
      specialRequest,
      smokingRoom,
      adaAccessible,
      petFriendlyRoom
    } = this.state;
    return (
      <Segment basic>
        <Header as="h1" textAlign="center">
          Reservation Form Component
        </Header>
        <Form onSubmit={this.handleSubmit}>
          <Form.Field>
            <label htmlFor="firstName">First Name</label>
            <input
              id="firstName"
              placeholder="First name"
              required
              value={firstName}
              onChange={this.handleChange}
            />
          </Form.Field>
          <Form.Field>
            <label htmlFor="LastName">Last Name</label>
            <input
              id="lastName"
              placeholder="Last name"
              required
              value={lastName}
              onChange={this.handleChange}
            />
          </Form.Field>
          <Form.Field>
            <label htmlFor="phone">Phone</label>
            <input
              id="phone"
              placeholder="xxx-xxx-xxxx"
              required
              value={phone}
              onChange={this.handleChange}
            />
          </Form.Field>
          <Form.Field>
            <label htmlFor="email">Email</label>
            <input
              id="email"
              placeholder="email@example.com"
              required
              value={email}
              onChange={this.handleChange}
            />
          </Form.Field>
          <Form.Field>
            <label htmlFor="startDate">Arrival Date</label>
            <input
              id="startDate"
              placeholder="Arrival"
              required
              value={startDate}
              onChange={this.handleChange}
            />
          </Form.Field>
          <Form.Field>
            <label htmlFor="endDate">Departure Date</label>
            <input
              id="endDate"
              placeholder="Departure"
              required
              value={endDate}
              onChange={this.handleChange}
            />
          </Form.Field>
          <Form.Field>
            <label htmlFor="specialRequests">Special Requests</label>
            <input
              id="specialRequest"
              placeholder="Special Requests"
              value={specialRequest}
              onChange={this.handleChange}
            />
          </Form.Field>
          <Form.Field>
            <label htmlFor="size">Room Size</label>
            <select class="ui dropdown">
              <option value="">Please Select a room size</option>
              <option value="1">Single cabin - sleeps up to four.</option>
              <option value="0">Family Cabin - sleeps up to eight.</option>
            </select>
          </Form.Field>
          <Form.Field>
            <Checkbox
              label="I would like a smoking room."
              id="smoking"
              value={smokingRoom}
              onChange={this.handleCheck}
            />
          </Form.Field>
          <Form.Field>
            <Checkbox
              label="I would like an ADA accessible room."
              id="ada"
              value={adaAccessible}
              onChange={this.handleCheck}
            />
          </Form.Field>

          <Form.Field>
            <Checkbox
              label="I would like a pet friendly room."
              id="pet"
              value={petFriendlyRoom}
              onChange={this.handleCheck}
            />
          </Form.Field>
          <Segment basic textAlign="center">
            <Button type="submit">Submit</Button>
          </Segment>
        </Form>
      </Segment>
    );
  }
}

const mapStateToProps = state => {
  const user = this.state;
};
export default connect(mapStateToProps)(ReservationForm);
