import React from 'react';
import {
  Segment,
  Container,
  Header,
  Form,
  Button,
  Checkbox
} from 'semantic-ui-react';
import axios from 'axios';
import { connect } from 'react-redux';
import { setFlash } from '../actions/flash';
import { setHeaders } from '../actions/headers';

class PromoCodeAdd extends React.Component {
  state = { code: '', smoking_room: false };

  handleSubmit = event => {
    event.preventDefault();
    const { code } = this.state;
    const { dispatch } = this.props;
    axios.post('/api/user_promo_codes', {code})
      .then( res => {
        dispatch(setHeaders(res.headers))
        this.setState( { code: '' } )
      })
  }

  handleChange = event => {
    const id = event.target.id;
    const value = event.target.value;
    this.setState({ [id]: value });
  }

  render() {
    const { smoking_room, code } = this.state
    return(
      <Segment>
      <Container>
        <Form onSubmit={this.handleSubmit}>
          <Form.Field>
              <label htmlFor='code'>Code</label>
              <input
                id='code'
                placeholder='PromoCode'
                required
                value={code}
                onChange={this.handleChange}
              />
          </Form.Field>
          <Segment basic textAlign='center'>
            <Button type='submit'>Submit</Button>
          </Segment>
        </Form>
      </Container>
      </Segment>
    )
  }
}
export default connect()(PromoCodeAdd);