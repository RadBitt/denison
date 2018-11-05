import React from 'react';
import {BrowserRouter , Route, Switch, Link} from 'react-router-dom';
import Dashboard from './Dashboard';
import HoursLog from './HoursLog';
import CreateLogEntry from './child-components/CreateLogEntry';
import ReceiptsReport from './ReceiptsReport';

class App extends React.Component {

	state = {
		logEntries: {},
		receiptReports: {}
	};

	addLogEntry = log => {
		const logEntries = {...this.state.logEntries};
		logEntries[`log${Date.now()}`] = log;
		this.setState({
			logEntries
		});
	} 

	render() {
		return(
			<div>
				<BrowserRouter>
					<div className="container">
						<ul className="nav">
							<li className="nav-item"><Link className="nav-link" to="/">Home</Link></li>
							<li className="nav-item"><Link className="nav-link" to="/hoursLog">Hours Log</Link></li>
							<li className="nav-item"><Link className="nav-link" to="/receiptsReport">Receipts Report</Link></li>
						</ul>
						<Switch>
							<Route exact path="/" render={
								() => <Dashboard /> 
							} />
							<Route path="/hourslog" render={
								() => <HoursLog logEntries={this.state.logEntries} />
							} />
							<Route path="/createLogEntry" render={
								() => <CreateLogEntry addLogEntry={this.addLogEntry} />
							} />
							<Route path="/receiptsReport" render={
								() => <ReceiptsReport />
							} />
						</Switch>
					</div>
				</BrowserRouter>
			</div>
		);
	}
}

export default App;