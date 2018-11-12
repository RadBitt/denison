import React from 'react';

class ScDetails extends React.Component {
	render() {
		return(
		<form onSubmit={console.log("1")}>
			<h2> Systems Check Details </h2>
			<div className="form-group">
				<label htmlFor="technician">Technician</label>
				<input ref={this.technician} type="text" className="form-control" id="technician" placeholder="OK" />
			</div>
			<div className="form-group">
				<label htmlFor="dateOfReport">Date Of Report</label>
				<input ref={this.dateOfReport} type="text" className="form-control" id="dateOfReport" placeholder="OK" />
			</div>
			<h2> Vessel Information </h2>
			<div className="form-group">
				<label htmlFor="owner">Owner</label>
				<input ref={this.owner} type="text" className="form-control" id="owner" placeholder="OK" />
			</div>
			<div className="form-group">
				<label htmlFor="vesselModel">Vessel Model</label>
				<input ref={this.vesselModel} type="text" className="form-control" id="vesselModel" placeholder="OK" />
			</div>
			<div className="form-group">
				<label htmlFor="hullNumber">Hull</label>
				<input ref={this.hullNumber} type="text" className="form-control" id="hullNumber" placeholder="OK" />
			</div>
			<div className="form-group">
				<label htmlFor="engineSerial">Engine Serial</label>
				<input ref={this.engineSerial} type="text" className="form-control" id="engineSerial" placeholder="OK" />
			</div>
			<div className="form-group">
				<label htmlFor="engineHours">Engine Hours</label>
				<input ref={this.engineHours} type="text" className="form-control" id="engineHours" placeholder="OK" />
			</div>
		<button type="submit">Submit</button>
		</form>
		);
	}
}

export default ScDetails;