import React, { Component } from 'react';
import {
  Header,
  Form,
  Image,
  Button,
  Segment,
  Checkbox,
  Container,
  Grid,
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
      this.props.dispatch(addUser({first_name, last_name, email}));
      this.props.dispatch(setFlash('Thank you, We look foreward to seeing you!', 'green'));
    } else
      this.props.dispatch(setFlash('Emails do not match!, please try again', 'red'));

  }

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  }

  handleCheckbox = (e) => {
    this.setState({ checkbox: !this.state.checkbox });
  }

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


  }

  componentDidMount() {
    this.countDown()
  }

  render() {
    const { first_name, last_name, email, emailConfirmation, day, minute, second, hour } = this.state;
    return (
      <Background>
        <Segment basic>
          <Header as='h1' textAlign='center'>Terra Nova Soon</Header>
          <Image src='https://specials-images.forbesimg.com/dam/imageserve/521462644/960x0.jpg?fit=scale' alt="YellowStone" height="450px;" centered />
          <Header textAlign='center' as='h1' > If you want to know more about us, leave us your info</Header>
          <FormStyle >
            <Container>
              <Form onSubmit={ this.handleSubmit }>
                <Form.Field >
                  <label htmlFor='first_name'>First Name</label>
                  <input
                    placeholder='First Name'
                    name='first_name'
                    required
                    value={ first_name }
                    onChange={ this.handleChange }
                  />
                </Form.Field>
                <Form.Field >
                  <label htmlFor='last_name'>Last Name</label>
                  <input
                    placeholder='Last Name'
                    name='last_name'
                    required
                    value={ last_name }
                    onChange={ this.handleChange }
                  />
                </Form.Field>
                <Form.Field>
                  <label htmlFor='email'>Email</label>
                  <input
                    placeholder='Email'
                    name='email'
                    required
                    value={ email }
                    onChange={ this.handleChange }
                  />
                </Form.Field>
                <Form.Field>
                  <label htmlFor='emailConfirmation'>Email Confirmation</label>
                  <input
                    placeholder='Email Confirmation'
                    name="emailConfirmation"
                    type='email'
                    required
                    value={ emailConfirmation }
                    onChange={ this.handleChange }
                  />
                </Form.Field>
                <Form.Field>
                  <Checkbox label='Check to recieve updates'
                    onChange={ this.handleCheckbox } />
                </Form.Field>
                <Segment basic textAlign='center'>
                  <Button type='submit'>Submit</Button>
                </Segment>
                <StyledClock id="demo">{ day + "d " + hour + "h "
                  + minute + "m " + second + "s " } </StyledClock>
              </Form>
            </Container>
          </FormStyle>
          <Header textAlign="center" as='h1' >Until We Open</Header>
        </Segment>
      </Background>
    );
  }
}

const StyledClock = styled.div`
  text-align: center;
  font-size: 60px;
  margin-top: 0px;
  color: black;
`
const Background = styled.div`
  background: slategray;
`
const FormStyle = styled.div`
  width: 655px;
  margin: auto;
`

export default connect()(Landing);