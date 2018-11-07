import React from 'react';
import { Route, Switch, Link } from 'react-router-dom';
import VesselEntry from './child-components/VesselEntry';
import CreateSystemsCheck from './child-components/CreateSystemsCheck';
import VesselList from './child-components/VesselList';

class SytemsCheck extends React.Component {
	render() {
		return(
			<div>
				<h1>Systems Check</h1>
				<ul>
					<li><Link to="/systemsCheck/createSystemsCheck">New Systems-Check Form</Link></li>
				</ul>
				<Switch>
					<Route path={this.props.match + "/createSystemsCheck" }
					render={
						() => <CreateSystemsCheck />
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

export default SytemsCheck;