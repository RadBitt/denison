import React from 'react';

class LogEntry extends React.Component {

	render() {
	const logEntryObj = {
	'Date': '10-30-2018',
	'Job': {
		'JobVessel': 'D520-002',
		'JobHours': '10',
		'JobDescription': [
			'Engine Serive', 
			'Bow Thruster Repair'
			]
		}
	}

	return(
		<div>
			<h2>{logEntryObj.Date}</h2>
			<ul>
				<li><h3>{logEntryObj.Job.JobVessel} : {logEntryObj.Job.JobHours} Hours</h3></li>
				<ul> 
					<li>{logEntryObj.Job.JobDescription[0]}</li>
					<li>{logEntryObj.Job.JobDescription[1]}</li>
				</ul>
			</ul>
		</div>
	);
	}
}

export default LogEntry;