import React from 'react';
import {
	Table,
	Button,
	Container,
} from 'semantic-ui-react';
import { getPromoCodes, deletePromoCode } from '../reducers/promocodes';
import { connect } from 'react-redux';
import AdminPromoCodeForm from './AdminPromoCodeForm';

class PromoCodesIndex extends React.Component {
	state = { showForm: false, code: {} };

	toggleForm = () => {
		return this.setState({ showForm: !this.state.showForm })
	};

	componentDidMount() {
		this.props.dispatch(getPromoCodes())
	};

	editing = (code) => {
		this.setState({ code: code });
		this.toggleForm();
	};

	handleDelete = (id) => {
		this.props.dispatch(deletePromoCode(id))
	};

	listCodes = () => {
		const { promocodes } = this.props;
		return promocodes.map( (code, i) => {
			return(
				<Table.Row key={i}>
					<Table.Cell>{code.code}</Table.Cell>
					<Table.Cell>{code.description}</Table.Cell>
					<Table.Cell>{code.start_date}</Table.Cell>
					<Table.Cell>{code.end_date}</Table.Cell>
					<Table.Cell>{code.kind}</Table.Cell>
					<Table.Cell>{code.value}</Table.Cell>
					<Table.Cell>{code.max_useable}</Table.Cell>
					<Table.Cell>{code.max_by_user}</Table.Cell>
					<Table.Cell>
						<Button.Group>
    					<Button color="blue" onClick={() => this.editing(code)}>Edit</Button>
    					<Button.Or />
    					<Button color="red" onClick={() => this.handleDelete(code.id)}>Delete</Button>
  					</Button.Group>
					</Table.Cell>
				</Table.Row>
				)
			}
		)
	};

	render() {
		const { showForm, code } = this.state;
		return(
			<Container>
			{ showForm &&
				<div>
					<AdminPromoCodeForm toggleForm={this.toggleForm} {...code} />
					<Button onClick={this.toggleForm} color="red">Cancel</Button>
				</div>
			}
			{ !showForm &&
				<div>
				<Button onClick={this.toggleForm} color="green">Add Promo Code</Button>
				<Table striped celled>
					<Table.Header>
		      	<Table.Row>
		        	<Table.HeaderCell>Code</Table.HeaderCell>
		        	<Table.HeaderCell>Description</Table.HeaderCell>
		        	<Table.HeaderCell>Start Date</Table.HeaderCell>
		        	<Table.HeaderCell>End Date</Table.HeaderCell>
		        	<Table.HeaderCell>Kind</Table.HeaderCell>
		        	<Table.HeaderCell>Value</Table.HeaderCell>
		        	<Table.HeaderCell>Max Usable</Table.HeaderCell>
		        	<Table.HeaderCell>Max By User</Table.HeaderCell>
		        	<Table.HeaderCell>Admin Actions</Table.HeaderCell>
		      	</Table.Row>
	    		</Table.Header>
	    		<Table.Body>
	    			{ this.listCodes() }
	    		</Table.Body>
				</Table>
				</div>
			}
			</Container>
		)
	}
}

const mapStateToProps = (state) => {
	const { promocodes, user } = state;
	return {
		user,
		promocodes,
	};
};

export default connect(mapStateToProps)(PromoCodesIndex);
