import React from 'react';

class ScDetails extends React.Component {

	handleChange1 = event => {
		event.preventDefault();
		const id = event.target.id;
		const initObject = {};
		initObject[id] = event.target.value;
		// this.props.createSystemsCheck(initObject);
	};

	handleChange2 = event => {
		event.preventDefault();

	};

	render() {
		return(
		<div>
			<h2> Systems Check Details </h2>
			<div className="form-group">
				<label htmlFor="technician">Technician</label>
				<input ref={this.technician} type="text" className="form-control" id="technician" placeholder="OK" onBlur={this.handleChange1} />
			</div>
			<div className="form-group">
				<label htmlFor="dateOfReport">Date Of Report</label>
				<input ref={this.dateOfReport} type="text" className="form-control" id="dateOfReport" placeholder="OK" onBlur={this.handleChange1}/>
			</div>
			<h2> Vessel Information </h2>
			<div className="form-group">
				<label htmlFor="owner">Owner</label>
				<input ref={this.owner} type="text" className="form-control" id="owner" placeholder="OK" onBlur={this.handleChange2}/>
			</div>
			<div className="form-group">
				<label htmlFor="vesselModel">Vessel Model</label>
				<input ref={this.vesselModel} type="text" className="form-control" id="vesselModel" placeholder="OK" onBlur={this.handleChange2}/>
			</div>
			<div className="form-group">
				<label htmlFor="hullNumber">Hull</label>
				<input ref={this.hullNumber} type="text" className="form-control" id="hullNumber" placeholder="OK" onBlur={this.handleChange2}/>
			</div>
			<div className="form-group">
				<label htmlFor="engineSerial">Engine Serial</label>
				<input ref={this.engineSerial} type="text" className="form-control" id="engineSerial" placeholder="OK" onBlur={this.handleChange2}/>
			</div>
			<div className="form-group">
				<label htmlFor="engineHours">Engine Hours</label>
				<input ref={this.engineHours} type="text" className="form-control" id="engineHours" placeholder="OK" onBlur={this.handleChange2}/>
			</div>
		</div>
		);
	}
}

export default ScDetails;