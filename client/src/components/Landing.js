import React, { Component } from 'react';
import { 
  Header, 
  Form,
  Image,
  Button, 
  Segment, 
  Checkbox,
  Container,
   } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { setFlash } from '../actions/flash';
import styled from 'styled-components';

class Landing extends Component {
  state = { name: '', email: '', emailConfirmation: '', checkbox: false };
  
  
  handleSubmit = (e) => {
    e.preventDefault();
    const { email, emailConfirmation, checkbox } = this.state;
      if (email === emailConfirmation && checkbox === true) {
       this.setState({ name: '', email: '', emailConfirmation: '', checkbox: false})
       this.props.dispatch(setFlash('Thank you, We look foreward to seeing you!', 'green'))
      } else 
      this.props.dispatch(setFlash('Emails do not match!, please try again', 'red'));
    
  }
 
  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value})
  }

  handleCheckbox = (e) => {
    this.setState({ checkbox: !this.state.checkbox })
  }

  countDown = () => {
    var countDownDate = new Date("Oct 5, 2018 15:37:25").getTime();
    var x = setInterval(function() {
    var now = new Date().getTime();
    var distance = countDownDate - now;
  
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
    document.getElementById("demo").innerHTML = days + "d " + hours + "h "
    + minutes + "m " + seconds + "s ";
    
    if (distance < 0) {
        clearInterval(x);
        document.getElementById("demo").innerHTML = "EXPIRED";
    }
  }, 1000);
   
  } 

  render() {
    const { name, email, emailConfirmation} = this.state;
    return (
      <Background>
      <Segment basic>
        <Header as='h1' textAlign='center'>Terra Nova Opening Soon</Header>
          <Image src='https://specials-images.forbesimg.com/dam/imageserve/521462644/960x0.jpg?fit=scale' alt="YellowStone" height="450px;"  centered />
        <Header textAlign='center' as='h1' > If you want to know more about us, leave us your info</Header>
        <FormStyle > 
        <Container>
          <Form onSubmit={this.handleSubmit}>
          <Form.Field >
              <label htmlFor='name'>Name</label>
              <input
                placeholder='Name'
                name='name'
                required
                value={name}
                onChange={this.handleChange}
              />
            </Form.Field>
            <Form.Field>
              <label htmlFor='email'>Email</label>
              <input
                placeholder='Email'
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
            <StyledClock id="demo">{ this.countDown() } </StyledClock>
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
  color: cyan;
`
const Background = styled.div`
  background: slategray;
`
const FormStyle = styled.div`
  width: 655px;
  margin: auto;
`

export default connect()(Landing)