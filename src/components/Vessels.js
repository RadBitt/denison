import React from 'react';
import { Route, Switch, Link } from 'react-router-dom';
import ManageVessel from './child-components/ManageVessel';
import VesselList from './child-components/VesselList';

class Vessels extends React.Component {
	render() {

		const childUrl = this.props.match + "/manageVessel";

		return(
			<div>
				<h1>Vessels</h1>
				<ul>
					<li><Link to={childUrl}>New Vessel</Link></li>
				</ul>
				<Switch>
					<Route path={childUrl} 
						render={props => 
							<ManageVessel {...props} addVessel={this.props.addVessel}/>} 
					/>
					<Route path={this.props.match}
					render={
						() => <VesselList vessels={this.props.vessels}/>
					} />
				</Switch>
			</div>
		)
	}
}

export default Vessels;