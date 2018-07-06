import React from 'react';
import { connect } from 'react-redux';
import { Form, Button } from 'semantic-ui-react';
import {editForm} from './reducers/userSettingForm';

class UserSettingForm extends React.Component {
  initialState = { name: '', email: '', role: ''};
  state = { ...this.initialState };

  componentDidMount() {
    if (this.props.match.params.id)
    this.setState({...this.props });
  }

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const { dispatch } = this.props;
    const user = { ...this.state };
    dispatch(editForm(user));

    this.setState({ user, ...this.initialState });
  }

  render() {
    const { name, email, role } = this.state;
    return (
      <Form onSubmit={this.handleSubmit}>
        <Form.Input
          name="name"
          placeholder="Name"
          value={name}
          onChange={this.handleChange}
          label="name"
          required
        />
        <Form.Input
          name="email"
          placeholder="Email"
          value={email}
          onChange={this.handleChange}
          label="email"
          required
        />
        <Form.Input
          name="role"
          placeholder="Role"
          value={role}
          onChange={this.handleChange}
          label="role"
          required
        />
        <Button 
          basic
          fluid
          content="Update User"
        />
      </Form>
    ) 
  }
}

export default connect()(UserSettingForm);

