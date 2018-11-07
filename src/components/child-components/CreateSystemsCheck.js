import React from 'react';

class CreateSystemsCheck extends React.Component {

	// date = React.createRef();
	// vessel = React.createRef();
	// hours = React.createRef();
	// jobTitle = React.createRef();
	// description = React.createRef();
	// notes = React.createRef();

	// saveLogData = event => {
	// 	event.preventDefault();
	// 	// console.log('i hit the button');
	// 	const logEntryObj = {
	// 	date: this.date.current.value,
	// 	job: {
	// 		jobVessel: this.vessel.current.value,
	// 		jobHours: this.hours.current.value,
	// 		jobTitle: this.jobTitle.current.value,
	// 		jobDescriptionArray: [
	// 			this.description.current.value
	// 		],
	// 		notes: this.notes.current.value
	// 		}
	// 	};
		
	// 	this.props.addLogEntry(logEntryObj);

	// }

	render() {
		return(
			<div>
				<h1>New Systems Check</h1>
				<form onSubmit={this.saveLogData}>
				<div className="form-group">
				    <label htmlFor="date">Date</label>
				    <input ref={this.date} type="text" className="form-control" id="date" placeholder="mm/dd/yyyy" />
				 </div>
				 <div className="form-group">
				    <label htmlFor="vessel">Vessel</label>
				    <input ref={this.vessel} type="text" className="form-control" id="vessel" placeholder="Vessel Name" />
				 </div>
				 <div className="form-group">
				    <label htmlFor="hours">Hours</label>
				    <input ref={this.hours} type="text" className="form-control" id="hours" placeholder="Total Hours" />
				 </div>
				 <div className="form-group">
				    <label htmlFor="jobTitle">Job Title</label>
				    <input ref={this.jobTitle} type="text" className="form-control" id="jobTitle" placeholder="Job Title" />
				 </div>
				 <div className="form-group">
				    <label htmlFor="description">Line Description</label>
				    <input ref={this.description} type="text" className="form-control" id="description" placeholder="Description" />
				 </div>
				 <div className="form-group">
				    <label htmlFor="notes">Notes</label>
				    <textarea ref={this.notes} type="textarea" className="form-control" id="notse" placeholder="Special Notes" />
				 </div>
				<button type="submit">Submit</button>
				</form>
			</div>
		);
	}
}

export default CreateSystemsCheck;