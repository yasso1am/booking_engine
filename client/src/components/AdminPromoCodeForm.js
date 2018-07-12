import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addPromoCode, updatePromoCode } from '../reducers/promocodes';
import { 
	Form,
	Button,
	Container,
	Header,
	Divider,
	Select,
} from 'semantic-ui-react';

const options = [
  {  key: 'dollar_amount', text: 'Dollar Value', value: 'dollar_amount' },
  {  key: 'percentage', text: 'Percentage', value: 'percentage' },
];

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

	componentDidMount() {
    if (this.props.id)
      this.setState({ ...this.props })
  };

  handleChange = (e, { name, value }) => {
    this.setState({ [name]: value })
  };

  handleSubmit = (e) => {
  	e.preventDefault();
  	const { toggleForm, dispatch } = this.props;
  	const promo_code = this.state;
  	const option = this.props.id ? updatePromoCode : addPromoCode
  	dispatch(option(promo_code));
  	this.setState({...this.initialState});
  	toggleForm();
  };

	render () {
		const { code, description, start_date, end_date, max_useable, max_by_user, kind, value } = this.state;
		return (
			<Container>
				<Divider hidden />
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
	      		<Form.Select value={kind} name="kind" label='Kind' options={options} placeholder='Kind' required onChange={this.handleChange} />
	      		<Form.Input required label='Value' type="number" placeholder='Value' name="value" value={value} onChange={this.handleChange} />
	      		<Form.Input required label='Max By User' type="number" placeholder='Max By User' name="max_by_user" value={max_by_user} onChange={this.handleChange} />
	    		</Form.Group>
	    		<Button type="submit" color="green">Submit</Button>
				</Form>
			</Container>
		);
	};
};

export default connect()(AdminPromoCodeForm);