import React from "react";
import { Segment, Form, Button } from "semantic-ui-react";
import axios from "axios";
import { connect } from "react-redux";
import { setHeaders } from "../actions/headers";

class PromoCodeAdd extends React.Component {
  state = { code: "" };

  handleSubmit = event => {
    event.preventDefault();
    const { code } = this.state;
    const { dispatch } = this.props;
    axios.post('/api/user_promo_codes', { code })
      .then(res => {
        dispatch(setHeaders(res.headers));
        alert("Promo code accepted")  
        debugger
        this.props.shareCode(res.data.promo_code)
        this.setState({ code: "" });
      }).catch( res => {
        dispatch(setHeaders(res.response.headers));
        const message = res.response.data.errors
        if (message);
          return alert(message);
        return alert("Something went wrong, code not accepted");
      })
  };

  handleChange = event => {
    const name = event.target.id;
    const value = event.target.value;
    this.setState({ [name]: value });
  };

  render() {
    const { code } = this.state;
    return (
      <Form onSubmit={this.handleSubmit}>
        <Form.Field>
          <label htmlFor="code">Promocode ?</label>
          <input
            name="code"
            placeholder="PromoCode"
            required
            value={code}
            onChange={this.handleChange}
          />
        </Form.Field>
        <Segment basic textAlign="center">
          <Button type="submit">Add Your Code</Button>
        </Segment>
      </Form>
    );
  }
}
export default connect()(PromoCodeAdd);
