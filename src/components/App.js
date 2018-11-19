import React from 'react';
import {BrowserRouter , Route, Switch, Link} from 'react-router-dom';
import Dashboard from './Dashboard';
import HoursLog from './HoursLog';
import ReimbursmentReport from './ReimbursmentReport';
import SystemsCheck from './SystemsCheck';
import Vessels from './Vessels';
import { base, firebaseApp } from '../base';

class App extends React.Component {

	state = {
		logEntries: {},
		vessels: {},
		systemsChecks: {},
		editSysCheckKey: ''
	};

	componentDidMount() {
		this.ref = base.syncState('vessels', {
			context: this,
			state: 'vessels',
		});
	};	

	addVessel = vessel => {
		const vessels = {...this.state.vessels};
		vessels[`vessel-${Date.now()}`] = vessel;
		this.setState({
			vessels
		});
	};

	addLogEntry = log => {
		const logEntries = {...this.state.logEntries};
		logEntries[`log${Date.now()}`] = log;
		this.setState({
			logEntries
		});
	};

	createSystemsCheck = (object, key) => {
		// const systemsChecks = {...this.state.systemsChecks};
		// if(key == undefined) 
		// 	key = `syscheck-${Date.now()}`;
		// systemsChecks[key].object = {...object};  
		// this.setState({
		// 	systemsChecks[key]: systemsChecks[key].object
		// });
	};

	getSysCheckObj = (key) => {
		console.log(key);
	};

	updateSysChkKey = key => {
		let editSysCheckKey = this.state.editSysCheckKey;
		editSysCheckKey = key;
		this.setState({
			editSysCheckKey
		});
	};

	updateSystemsCheck = (key, object) => {
		console.log(key);
	}

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
								props => <SystemsCheck
									defUrl={'/systemsCheck'}
									systemsCheckKey={this.state.editSysCheckKey}
									createSystemsCheck={this.createSystemsCheck}
									getSysCheckObj={this.getSysCheckObj}
									updateSystemsCheck={this.updateSystemsCheck}
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