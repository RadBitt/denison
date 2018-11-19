import React from 'react';
import { Route, Switch, Link } from 'react-router-dom';
import CreateSystemsCheck from './child-components/CreateSystemsCheck';
import VesselList from './child-components/VesselList';
import SingleVessel from './child-components/SingleVessel';

class SytemsCheck extends React.Component {

	defaultLocation = this.props.defUrl;
	singleVesselExp = new RegExp('vessel-[0-9]*');

	render() {
		console.log(this.props.location + this.singleVesselExp);
		return(
			<div>
				<h1>Systems Check</h1>
				<ul>
					<li><Link to={this.defaultLocation + 'createSystemsCheck'}>New Systems-Check Form</Link></li>
				</ul>
				<Switch>
					<Route path={this.props.location + '/createSystemsCheck' } render={
						() => <CreateSystemsCheck 
						matcm={this.defaultLocation}
						systemsCheckKey={this.props.systemsCheckKey}
						createSystemsCheck={this.props.createSystemsCheck}
						getSysCheckObj={this.props.getSysCheckObj}
						updateSystemsCheck={this.props.updateSystemsCheck}
					/>} />
					<Route path={this.props.location + this.singleVesselExp}
					render={
						() => <SingleVessel location={this.props.location} vessel={this.props.vessels}/>
					} />
					<Route exact path={this.defaultLocation}
					render={
						() => <VesselList location={this.props.location} vessels={this.props.vessels}/>
					} />
				</Switch>
			</div>
		)
	}
}

export default SytemsCheck;