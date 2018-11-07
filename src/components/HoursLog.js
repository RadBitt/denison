import React from 'react';
import { Route, Switch, Link } from 'react-router-dom';
import LogEntry from './child-components/LogEntry';
import CreateLogEntry from './child-components/CreateLogEntry';

class HoursLog extends React.Component {

	render() {
		return(
			<div>
				<Switch>
					<Route path={ this.props.match + "/createLogEntry" }
					render={
						() => <CreateLogEntry />
					} />
					<Route path={this.props.match}
					render={
						() => 
						<div>
							<h1>Hours Log</h1>
							<ul>
								<li><Link to="/hoursLog/createLogEntry">New Log Form</Link></li>
							</ul>
							{Object.keys(this.props.logEntries).map(key => (
					          <LogEntry
					            key={key}
					            index={key}
					            details={this.props.logEntries[key]}
					          />
					        ))}
						</div>
					} />
				</Switch>
			</div>
		)
	}
}



export default HoursLog;