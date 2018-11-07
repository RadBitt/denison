import React from 'react';
import { Route, Switch, Link } from 'react-router-dom';
import VesselEntry from './child-components/VesselEntry';
import ManageVessel from './child-components/ManageVessel';
import VesselList from './child-components/VesselList';

class Vessels extends React.Component {
	render() {
		return(
			<div>
				<h1>Vessels</h1>
				<ul>
					<li><Link to="/systemsCheck/createSystemsCheck">New Vessel</Link></li>
				</ul>
				<Switch>
					<Route path={this.props.match + "/manageVessel" }
					render={
						() => <ManageVessel />
					} />
					<Route path={this.props.match}
					render={
						() => <VesselList />
					} />
				</Switch>
			</div>
		)
	}
}

export default Vessels;