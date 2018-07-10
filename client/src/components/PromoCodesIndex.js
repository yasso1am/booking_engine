import React from 'react';
import {
	Table,
	Button,
	Container,
} from 'semantic-ui-react';
import { getPromoCodes } from '../reducers/promocodes';
import { connect } from 'react-redux';
import AdminPromoCodeForm from './AdminPromoCodeForm';

class PromoCodesIndex extends React.Component {
	state = { showForm: false }

	toggleForm = () => {
		return this.setState({ showForm: !this.state.showForm })
	};

	componentDidMount() {
		this.props.dispatch(getPromoCodes())
	};

	listCodes = () => {
		const { promocodes } = this.props;
		return promocodes.map( code => {
			return(
				<Table.Row>
					<Table.Cell>{code.code}</Table.Cell>
					<Table.Cell>{code.description}</Table.Cell>
					<Table.Cell>{code.start_date}</Table.Cell>
					<Table.Cell>{code.end_date}</Table.Cell>
					<Table.Cell>{code.kind}</Table.Cell>
					<Table.Cell>{code.value}</Table.Cell>
					<Table.Cell>{code.max_useable}</Table.Cell>
					<Table.Cell>{code.max_by_user}</Table.Cell>
				</Table.Row>
				)
			}
		)
	};

	render() {
		const { showForm } = this.state
		return(
			<Container>
			{ showForm &&
				<div>
					<AdminPromoCodeForm toggleForm={this.toggleForm}/>
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
};

const mapStateToProps = (state) => {
	const { promocodes, user } = state;
	return {
		user,
		promocodes,
	};
};

export default connect(mapStateToProps)(PromoCodesIndex);
