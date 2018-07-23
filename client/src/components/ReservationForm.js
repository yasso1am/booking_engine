import React, { Component } from "react";
import {
  Header,
  Grid,
  Form,
  Checkbox,
  Button,
  Segment,
  TextArea,
  Divider,
  Container,
} from "semantic-ui-react";
import { connect } from "react-redux";
import { setFlash } from "../actions/flash";
import { makeReservation } from "../reducers/reservations";
import PromoCodeAdd from "./PromoCodeAdd";
import DateSelector from "./DateSelector";
import styled from "styled-components";
import moment from "moment";

const roomOptions = [
  { key: "single", text: "Single - sleeps up to four", value: "single" },
  { key: "family", text: "Family - sleeps up to eight", value: "family" }
];

class ReservationForm extends Component {
  state = {
    startDate: moment(),
    endDate: moment(),
    dateClicked: 0,
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
    code: "",
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
      startDate: moment(),
      endDate: moment(),
      realStartDate: "",
      realEndDate: "",
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

  handleStart = date => {
    this.setState({ startDate: date });
  };

  handleEnd = date => {
    this.setState({ endDate: date });
  };

  handleChange = e => {
    const { id, value } = e.target;
    this.setState({ [id]: value });
  };

  handleRoomChoice = (e, data) => {
    this.setState({ size: data.value });
  };

  shareCode = code => {
    this.setState({ code: code });
  };

  displayCode = () => {
    const { code } = this.state;
    if (code) {
      return (
        <div>
          <Header as="h3">{code.code}</Header>
          <span>{code.description}</span>
          <p>You will receive {code.value} off your reservation </p>
        </div>
      );
    }
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
      <Grid stackable style={styles.font}>
        <Grid.Column mobile={4} tablet={8} computer={16}>
          <Grid.Row>
            <HeaderText>
              Make a Reservation
            </HeaderText>
            <Divider hidden />
            <Container>
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
                      autoComplete="address-line1"
                      placeholder="Address Line 1"
                      value={addressLine1}
                      onChange={this.handleChange}
                    />
                  </Form.Field>
                  <Form.Field>
                    <label htmlFor="addressLine2">Address Line 2</label>
                    <input
                      id="addressLine2"
                      autoComplete="address-line2"
                      placeholder="Address Line 2"
                      value={addressLine2}
                      onChange={this.handleChange}
                    />
                  </Form.Field>
                  <Form.Field>
                    <label htmlFor="city">City</label>
                    <input
                      id="city"
                      autoComplete="address-level2"
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
                      autoComplete="address-level1"
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
                      autoComplete="postal-code"
                      required
                      value={zipcode}
                      onChange={this.handleChange}
                    />
                  </Form.Field>
                  <Form.Field>
                    <label htmlFor="country">Country</label>
                    <input
                      id="country"
                      autoComplete="country"
                      placeholder="Country"
                      value={country}
                      onChange={this.handleChange}
                    />
                  </Form.Field>
                </Form.Group>
                <SubHeader>
                  {" "}
                  Chose your Dates{" "}
                </SubHeader>
                <MyContainer>
                  <DateSelector
                    handleStart={this.handleStart}
                    handleEnd={this.handleEnd}
                    startDate={startDate}
                    endDate={endDate}
                  />
                </MyContainer>
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
                      onChange={() =>
                        this.setState({ smokingRoom: !smokingRoom })
                      }
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
                    onChange={() =>
                      this.setState({ pet_friendly: !petFriendly })
                    }
                  />
                </Form.Field>
                <Segment basic textAlign="center">
                  <Button type="submit">Submit</Button>
                </Segment>
              </Form>
              {this.displayCode()}
              <PromoCodeAdd shareCode={this.shareCode} />
            </Container>
          </Grid.Row>
        </Grid.Column>
      </Grid>
    );
  }
}

const MyContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  font-family: "Josefin Slab";
`;

const HeaderText = styled.div`
  display: flex;
  justify-content: center;
  font-size: 3em;
  padding-top: 40px;
`

const SubHeader = HeaderText.extend`
  font-size: 2em;
  padding: 20px;
`

const styles = {
  font: {
    fontFamily: "Josefin Slab"
  }
};

const mapStateToProps = state => {
  return { user: state.user };
};

export default connect(mapStateToProps)(ReservationForm);
