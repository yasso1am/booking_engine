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
      <div>
        <Grid stackable>
          <Grid.Row>
            <Grid.Column mobile={4} tablet={8} computer={16}>
              <Background>
                <Segment basic>
                  <Header as='h1' textAlign='center'>Terra Nova Opening Soon</Header>
                  <Image src='https://specials-images.forbesimg.com/dam/imageserve/521462644/960x0.jpg?fit=scale' alt="YellowStone" height="450px;" centered />
                  <Header textAlign='center' as='h1' > If you want to know more about us, leave us your info</Header>
                  <Container>
                    <Form onSubmit={this.handleSubmit}>
                      <Grid.Row>
                        <Grid.Column mobile={4} tablet={8} computer={16}>
                          <Form.Input
                            label='Name'
                            placeholder='Name'
                            name='name'
                            required
                            value={first_name}
                            onChange={this.handleChange}
                          />
                          <Form.Input
                            label='Email'
                            placeholder='Email'
                            name='email'
                            required
                            value={email}
                            onChange={this.handleChange}
                          />
                          <Form.Input
                            label='Email Confirmation'
                            placeholder='Email Confirmation'
                            name="emailConfirmation"
                            type='email'
                            required
                            value={emailConfirmation}
                            onChange={this.handleChange}
                          />
                          <Checkbox label='Check to recieve updates'
                            onChange={this.handleCheckbox} />
                        </Grid.Column>
                      </Grid.Row>
                      <Segment basic textAlign='center'>
                        <Button type='submit'>Submit</Button>
                      </Segment>
                      <Grid.Row>
                        <Grid.Column mobile={4} tablet={8} computer={16}>
                          <StyledClock id="demo">{day + "d " + hour + "h "
                            + minute + "m " + second + "s "} </StyledClock>
                        </Grid.Column>
                      </Grid.Row>
                    </Form>
                  </Container>
                  <Header textAlign="center" as='h1' >Until We Open</Header>
                </Segment>
              </Background>
            </Grid.Column>
          </Grid.Row>
        </Grid>
        <Footer />
      </div>
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

export default connect()(Landing);