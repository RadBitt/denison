import React from 'react';
import { Link } from 'react-router-dom';
import LogEntry from './child-components/LogEntry';

class HoursLog extends React.Component {

	render() {

		return(
			<div>
				<h1>Hours Log</h1>
				<ul>
					<li><Link to="/createLogEntry">New Log Form</Link></li>
				</ul>
				{Object.keys(this.props.logEntries).map(key => (
	              <LogEntry
	                key={key}
	                index={key}
	                details={this.props.logEntries[key]}
	              />
	            ))}
			</div>
		);
	}
}

export default HoursLog;