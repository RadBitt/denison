import React from 'react';
import { Link } from 'react-router-dom';
import LogEntry from './child-components/LogEntry';

class LogHours extends React.Component {
	render() {
		return(
			<div>
				<ul>
					<li><Link to="/logHoursform">New Entry Form</Link></li>
				</ul>
				<LogEntry />
			</div>
		);
	}
}

export default LogHours;