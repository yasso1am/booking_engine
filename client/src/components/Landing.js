import React, { Component } from 'react';
import {
  Header,
  Grid,
  Form,
  Button,
  Segment,
  Checkbox,
  Container,
} from 'semantic-ui-react';
import { connect } from 'react-redux';
import { setFlash } from '../actions/flash';
import { addUser } from '../actions/contact';
import styled from 'styled-components';
import Footer from './Footer';

class Landing extends Component {
  state = { first_name: '', last_name: '', email: '', emailConfirmation: '', checkbox: false, day: 0, hour: 0, minute: 0, second: 0 };

  handleSubmit = (e) => {
    e.preventDefault();
    const { first_name, last_name, email, emailConfirmation, checkbox } = this.state;
    if (email === emailConfirmation && checkbox === true) {
      this.setState({ first_name: '', last_name: '', email: '', emailConfirmation: '', checkbox: false });
      this.props.dispatch(addUser({ first_name, last_name, email }));
      this.props.dispatch(setFlash('Thank you, We look foreward to seeing you!', 'green'));
    } else
      this.props.dispatch(setFlash('Emails do not match!, please try again', 'red'));
  }

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  handleCheckbox = (e) => {
    this.setState({ checkbox: !this.state.checkbox });
  };

  countDown = () => {
    let countDownDate = new Date("Oct 5, 2018 15:37:25").getTime();
    let x = setInterval(() => {
      let now = new Date().getTime();
      let distance = countDownDate - now;
      if (distance < 0) {
        clearInterval(x);
        return 0;
      }
      let days = Math.floor(distance / (1000 * 60 * 60 * 24));
      let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      let seconds = Math.floor((distance % (1000 * 60)) / 1000);
      this.setState({ day: days, hour: hours, second: seconds, minute: minutes });
    }, 1000);
  };

  componentDidMount() {
    this.countDown()
  };

  render() {
    const { first_name, last_name, email, emailConfirmation, day, minute, second, hour } = this.state;
    return (
      <div>
        <Grid.Column mobile={4} tablet={8} computer={16}>
          <MainHeader>
            <Greating>
               [HOTEL NAME] Welcomes You In:
              <StyledClock id="demo">
                {day + "d " + hour + "h " + minute + "m " + second + "s "}
              </StyledClock>
            </Greating>
          </MainHeader>
          <Segment basic>
            <Header textAlign='center' as='h2'>Sign Up Below For Exclusive Offers</Header>
            <FormStyle >
              <Container>
                <Form onSubmit={this.handleSubmit}>
                  <Form.Field >
                    <label htmlFor='first_name'>First Name</label>
                    <input
                      placeholder='First Name'
                      name='first_name'
                      autoComplete="given-name"
                      required
                      value={first_name}
                      onChange={this.handleChange}
                    />
                  </Form.Field>
                  <Form.Field >
                    <label htmlFor='last_name'>Last Name</label>
                    <input
                      placeholder='Last Name'
                      name='last_name'
                      required
                      autoComplete="family-name"
                      value={last_name}
                      onChange={this.handleChange}
                    />
                  </Form.Field>
                  <Form.Field>
                    <label htmlFor='email'>Email</label>
                    <input
                      placeholder='Email'
                      autoComplete="email"
                      name='email'
                      required
                      value={email}
                      onChange={this.handleChange}
                    />
                  </Form.Field>
                  <Form.Field>
                    <label htmlFor='emailConfirmation'>Email Confirmation</label>
                    <input
                      placeholder='Email Confirmation'
                      name="emailConfirmation"
                      type='email'
                      autoComplete="email"
                      required
                      value={emailConfirmation}
                      onChange={this.handleChange}
                    />
                  </Form.Field>
                  <Form.Field>
                    <Checkbox label='Check to recieve updates'
                      onChange={this.handleCheckbox} />
                  </Form.Field>
                  <Segment basic textAlign='center'>
                    <Button type='submit'>Submit</Button>
                  </Segment>
                </Form>
              </Container>
            </FormStyle>
          </Segment>
          <Footer />
        </Grid.Column>
      </div>
    );
  }
}

const MainHeader = styled.div`
  display: flex;
	background-image: url('https://images.unsplash.com/photo-1520406153111-4d1d4cfd3684?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=2d83f67c2d5baa1cdb4286e7e22369e3');
	background-repeat: no-repeat;
  background-position: center bottom; 
  background-size: cover;
	width: 100%;
  height: 85vh;
  justify-content: center;
`

const Greating = styled.div`
  flex: 1;
  justify-content: center;
  text-align: center;
  font-size: 60px;
  line-height: 1.8;
  margin-top: 10px;
  width: 100%;
  align-self: center;
  color: white;
  font-weight: 700;
`

const StyledClock = styled.div`
  text-align: center;
  font-size: 55px;
  color: white;
`

const FormStyle = styled.div`
  width: 75%;
  margin: auto;
`

export default connect()(Landing);