import React, { Component } from "react";
import {
  Header,
  Form,
  Checkbox,
  Button,
  Segment,
  TextArea
} from "semantic-ui-react";
import { connect } from "react-redux";
import { setFlash } from "../actions/flash";
import { makeReservation } from "../reducers/reservations";

const roomOptions = [
  { key: "single", text: "Single - sleeps up to four", value: "single" },
  { key: "family", text: "Family - sleeps up to eight", value: "family" },
];

class ReservationForm extends Component {
  state = {
    startDate: "",
    endDate: "",
    specialRequest: "",
    smokingRoom: false,
    size: "",
    adaAccessible: false,
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    zipcode: "",
    country: "",
    addressLine1: "",
    addressLine2: "",
    city: "",
    state: "",
    petFriendly: false,
  };

  componentDidMount() {
    const { user } = this.props;
    this.setState({
      firstName: user.first_name,
      lastName: user.last_name,
      email: user.email,
    });
  }

  handleSubmit = event => {
    event.preventDefault();
    const { dispatch } = this.props;
    const {
      startDate,
      endDate,
      specialRequest,
      smokingRoom,
      size,
      adaAccessible,
      firstName,
      lastName,
      email,
      phone,
      zipcode,
      country,
      addressLine1,
      addressLine2,
      city,
      state,
      petFriendly,
    } = this.state;
    const reservation = {
      start_date: startDate,
      end_date: endDate,
      special_requests: specialRequest,
      smoking_room: smokingRoom,
      size: size,
      ada_accessible: adaAccessible,
      first_name: firstName,
      last_name: lastName,
      email: email,
      phone_number: phone,
      zip_code: zipcode,
      country: country,
      address_line1: addressLine1,
      address_line2: addressLine2,
      city: city,
      state: state,
      pet_friendly: petFriendly,
    };
    dispatch(setFlash("Thanks, we're looking forward to having you!", "green"));
    dispatch(makeReservation(reservation));
    this.setState({
      startDate: "",
      endDate: "",
      specialRequest: "",
      smokingRoom: false,
      size: "",
      adaAccessible: false,
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      zipcode: "",
      country: "",
      addressLine1: "",
      addressLine2: "",
      city: "",
      state: "",
      petFriendly: false,
    });
  };

  handleChange = e => {
    const { id, value } = e.target;
    this.setState({ [id]: value });
  };

  handleRoomChoice = (e, data) => {
    this.setState({ size: data.value });
  };

  render() {
    const {
      startDate,
      endDate,
      specialRequest,
      smokingRoom,
      size,
      adaAccessible,
      firstName,
      lastName,
      email,
      phone,
      zipcode,
      country,
      addressLine1,
      addressLine2,
      city,
      state,
      petFriendly,
    } = this.state;

    return (
      <Segment basic>
        <Header as="h1" textAlign="center">
          Reservation Form Component
        </Header>
        <Form onSubmit={this.handleSubmit}>
          <Form.Group widths="equal">
            <Form.Field>
              <label htmlFor="firstName">First Name</label>
              <input
                id="firstName"
                placeholder="First name"
                autoComplete="given-name"
                required
                value={firstName}
                onChange={this.handleChange}
              />
            </Form.Field>
            <Form.Field>
              <label htmlFor="lastName">Last Name</label>
              <input
                id="lastName"
                placeholder="Last name"
                autoComplete="family-name"
                required
                value={lastName}
                onChange={this.handleChange}
              />
            </Form.Field>
          </Form.Group>
          <Form.Group widths="equal">
            <Form.Field>
              <label htmlFor="email">Email</label>
              <input
                id="email"
                placeholder="email@example.com"
                autoComplete="email"
                required
                value={email}
                onChange={this.handleChange}
              />
            </Form.Field>
            <Form.Field>
              <label htmlFor="phone">Phone</label>
              <input
                id="phone"
                placeholder="xxx-xxx-xxxx"
                autoComplete="tel-national"
                required
                value={phone}
                onChange={this.handleChange}
              />
            </Form.Field>
          </Form.Group>
          <Form.Group widths="equal">
          <Form.Field>
            <label htmlFor="addressLine1">Address Line 1</label>
            <input
              id="addressLine1"
              placeholder="Address Line 1"
              value={addressLine1}
              onChange={this.handleChange}
            />
          </Form.Field>
          <Form.Field>
            <label htmlFor="addressLine2">Address Line 2</label>
            <input
              id="addressLine2"
              placeholder="Address Line 2"
              value={addressLine2}
              onChange={this.handleChange}
            />
          </Form.Field>
          <Form.Field>
            <label htmlFor="city">City</label>
            <input
              id="city"
              placeholder="City"
              required
              value={city}
              onChange={this.handleChange}
            />
          </Form.Field>
          </Form.Group>
          <Form.Group widths="equal">
          <Form.Field>
            <label htmlFor="state">State</label>
            <input
              id="state"
              placeholder="State"
              required
              value={state}
              onChange={this.handleChange}
            />
          </Form.Field>
          <Form.Field>
            <label htmlFor="zipcode">Zipcode</label>
            <input
              id="zipcode"
              placeholder="Zipcode"
              required
              value={zipcode}
              onChange={this.handleChange}
            />
          </Form.Field>
          <Form.Field>
            <label htmlFor="country">Country</label>
            <input
              id="country"
              placeholder="Country"
              value={country}
              onChange={this.handleChange}
            />
          </Form.Field>
          </Form.Group>
          <Form.Group widths="equal">
            <Form.Field>
              <label htmlFor="startDate">Arrival Date</label>
              <input
                id="startDate"
                type="date"
                placeholder="xx / xx / xxxx"
                required
                value={startDate}
                onChange={this.handleChange}
              />
            </Form.Field>
            <Form.Field>
              <label htmlFor="endDate">Departure Date</label>
              <input
                id="endDate"
                type="date"
                placeholder="xx / xx / xxxx"
                required
                value={endDate}
                onChange={this.handleChange}
              />
            </Form.Field>
          </Form.Group>
          <Form.Field>
            <label htmlFor="specialRequests">Special Requests</label>
            <TextArea
              autoHeight
              autoComplete="nope"
              id="specialRequest"
              value={specialRequest}
              onChange={this.handleChange}
            />
          </Form.Field>
          <Form.Dropdown
            required
            defaultValue={size}
            selection
            label="Size"
            options={roomOptions}
            placeholder="Please choose a room size"
            onChange={this.handleRoomChoice}
          />
          <Form.Group>
            <Form.Field>
              <Checkbox
                label="I would like a smoking room."
                id="smokingRoom"
                onChange={() => this.setState({ smokingRoom: !smokingRoom })}
              />
            </Form.Field>
            <Form.Field>
              <Checkbox
                label="I would like an ADA accessible room."
                id="adaAccessible"
                onChange={() =>
                  this.setState({ adaAccessible: !adaAccessible })
                }
              />
            </Form.Field>
          </Form.Group>

          <Form.Field>
            <Checkbox
              label="I would like a pet friendly room."
              id="pet"
              onChange={() => this.setState({ pet_friendly: !petFriendly })}
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
  return { user: state.user };
};

export default connect(mapStateToProps)(ReservationForm);
