import React from 'react';
import { 
	Menu,
	Segment,
	Grid, 
	Container,
} from 'semantic-ui-react';
import AboutUs from './AboutUs';
import Home from './Home';

class AdminDashboard extends React.Component {
	state = { activeItem: '', component: '' };

	handleItemClick = (e, { name }) => this.setState({ activeItem: name, component: name });

	showActiveItem = () => {
		const { component } = this.state;
		switch(component) {
			case 'AboutUs':
				return <AboutUs />
			case 'Home':
				return <Home />
			default:
				null
		};
	};

	render() {
		const { activeItem, component } = this.state;
		return(
			<Grid>
				<Grid.Column width={3}>
					<Menu fluid vertical tabular>
						<Menu.Item name='Reservations' active={activeItem === 'Reservations'} onClick={this.handleItemClick} />
						<Menu.Item name='Employees' active={activeItem === 'Employees'} onClick={this.handleItemClick} />
						<Menu.Item name='Statistics' active={activeItem === 'Statistics'} onClick={this.handleItemClick} />
						<Menu.Item name='AboutUs' active={activeItem === 'AboutUs'} onClick={this.handleItemClick} />
						<Menu.Item name='Home' active={activeItem === 'Home'} onClick={this.handleItemClick} />
					</Menu>
				</Grid.Column>
				{ component.length > 0 ?
					<Grid.Column stretched width={12}>
						{ this.showActiveItem() }
					</Grid.Column>
					:
					null
				}
			</Grid>
		)
	}
}

export default AdminDashboard;