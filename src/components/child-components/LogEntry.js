import React from 'react';

class LogEntry extends React.Component {

	render() {
		const logEntryObj = this.props.details

		return(
			<div>
				<h2>{logEntryObj.date}</h2>
				<ul>
					<li><h3>{logEntryObj.job.jobVessel} : {logEntryObj.job.jobTitle} : {logEntryObj.job.jobHours} Hours</h3></li>
					<ul> 
						<li>{logEntryObj.job.jobDescriptionArray[0]}</li>
					</ul>
				</ul>
			</div>
		);
	}
}

export default LogEntry;