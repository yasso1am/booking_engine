import React from 'react';
import { 
	Menu,
	Grid, 
} from 'semantic-ui-react';
import AboutUs from './AboutUs';
import Home from './Home';
import PromoCodesIndex from './PromoCodesIndex';
import Statistics from './Statistics';
import Employees from './Employees';

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
			case 'Promo Codes':
				return <PromoCodesIndex />
			case 'Statistics':
				return <Statistics />
			case 'Employees':
				return <Employees />
			default:
				return null
		}
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
						<Menu.Item name='Promo Codes' active={activeItem === 'Promo Codes'} onClick={this.handleItemClick} />
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