import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addPromoCode } from '../reducers/promocodes';
import { 
	Form,
	Button,
	Container,
	Header,
	Divider,
} from 'semantic-ui-react';

class AdminPromoCodeForm extends Component {
	initialState = {
		code: '',
		description: '',
		start_date: '',
		end_date: '',
		max_useable: '',
		kind: '',
		value: '',
		max_by_user: '',
	};

	state = {...this.initialState};

	handleChange = (e) => {
   const { name, value } = e.target;
   this.setState({ [name]: value });
  }

  handleSubmit = (e) => {
  	e.preventDefault();
  	const promo_code = this.state;
  	const { dispatch } = this.props;
  	dispatch(addPromoCode(promo_code));
  	this.setState({...this.initialState});
  }

	render () {
		const { code, description, start_date, end_date, max_useable, max_by_user, kind, value } = this.state;
		return (
			<Container>
				<Header textAlign='center'>Submit A New Promo Code</Header>
				<Divider hidden/>
				<Form onSubmit={this.handleSubmit}>
					<Form.Group widths='equal'>
	      		<Form.Input required label='Code' placeholder='Code' name="code" value={code} onChange={this.handleChange} />
	      		<Form.Input required label='Description' placeholder='Description' name="description" value={description} onChange={this.handleChange} />
	    		</Form.Group>
	    		<Form.Group widths='equal'>
	      		<Form.Input required label='Start Date' type="date" placeholder='Start Date' name="start_date" value={start_date} onChange={this.handleChange} />
	      		<Form.Input required label='End Date' type="date" placeholder='End Date' name="end_date" value={end_date} onChange={this.handleChange} />
	      		<Form.Input required label='Max Useable' type="number" placeholder='Max Useable' name="max_useable" value={max_useable} onChange={this.handleChange} />
	    		</Form.Group>
	    		<Form.Group widths='equal'>
	      		<Form.Input required label='Kind' placeholder='Kind' name="kind" value={kind} onChange={this.handleChange} />
	      		<Form.Input required label='Value' type="number" placeholder='Value' name="value" value={value} onChange={this.handleChange} />
	      		<Form.Input required label='Max By User' type="number" placeholder='Max By User' name="max_by_user" value={max_by_user} onChange={this.handleChange} />
	    		</Form.Group>
	    		<Button type="submit">Submit</Button>
				</Form>
			</Container>
		)
	}
}

export default connect()(AdminPromoCodeForm);