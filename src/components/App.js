import React from 'react';
import {BrowserRouter , Route, Switch, Link} from 'react-router-dom';
import Dashboard from './Dashboard';
import HoursLog from './HoursLog';
import ReimbursmentReport from './ReimbursmentReport';
import SystemsCheck from './SystemsCheck';
import Vessels from './Vessels';
import { base } from '../base';

class App extends React.Component {

	state = {
		logEntries: {},
		vessels: {},
		systemsChecks: {},
	};

	componentDidMount() {
		this.ref = base.syncState('vessels', {
			context: this,
			state: 'vessels',
		});
		// this.ref = base.syncState('systemsChecks', {
		// 	context: this,
		// 	state: 'systemsChecks',
		// });
		console.log('app mounted');
	};

	componentWillUnMount() {
		console.log('app un-mounted');
	};

	addSystemCheckForm = formObject => {
		// const sysChecks = {this.state.systemsChecks};
		// const key = `syscheck-${Date.now()}`;
		// sysChecks[key] = formObject;
		// this.setState({
		// 	systemsChecks: sysChecks
		// });
		// return key;
	};

	updateSystemCheckForm = (key, formObject) => {
		// const sysChecks = {this.state.systemsChecks};
		// sysChecks[key] = formObject;
		// this.setState({
		// 	systemsChecks: sysChecks
		// });
	};

	addVessel = vessel => {
		const vessels = {...this.state.vessels};
		vessels[`vessel-${Date.now()}`] = vessel;
		this.setState({
			vessels
		});
	};

	getVessel = vessel => {
		const obj = this.state.vessels[vessel];
		return obj;
	};

	addLogEntry = log => {
		const logEntries = {...this.state.logEntries};
		logEntries[`log${Date.now()}`] = log;
		this.setState({
			logEntries
		});
	};

	render() {
		return(
			<div>
				<BrowserRouter>
					<div className="container">
						<ul className="nav">
							<li className="nav-item"><Link className="nav-link" to="/">Home</Link></li>
							<li className="nav-item"><Link className="nav-link" to="/hoursLog">Hours Log</Link></li>
							<li className="nav-item"><Link className="nav-link" to="/systemsCheck">Systems Check</Link></li>
							<li className="nav-item"><Link className="nav-link" to="/vessels">Vessels</Link></li>
							<li className="nav-item"><Link className="nav-link" to="/reimbursmentReport">Reimbursment Report</Link></li>
						</ul>
						<Switch>
							<Route exact path="/" render={
								() => <Dashboard /> 
							} />
							<Route path="/hoursLog" render={
								() => <HoursLog logEntries={this.state.logEntries} match="/hoursLog"/>
							} />
							<Route path="/reimbursmentReport" render={
								() => <ReimbursmentReport />
							} />
							<Route path="/systemsCheck" render={
								(props) => <SystemsCheck
									addSystemCheckForm={this.addSystemCheckForm}
									defUrl={'/systemsCheck'}
									getVessel={this.getVessel}
									location={props.location}
									updateSystemCheckForm={this.updateSystemCheckForm}
									vessels={this.state.vessels}
								/>} />
							<Route path="/vessels" render={
								() => <Vessels 
									match="/vessels"
									addVessel={this.addVessel} 
									vessels={this.state.vessels}
								/>} />
						</Switch>
					</div>
				</BrowserRouter>
			</div>
		);
	}
}

export default App;