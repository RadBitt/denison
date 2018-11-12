import React from 'react';

class ScDcEquipment extends React.Component {
	render() {
		return(
		<form onSubmit={console.log("1")}>
			<h2> DC Equipment </h2>
			<div className="form-group">
				<label htmlFor="waterPressure">Water Pressure</label>
				<input ref={this.waterPressure} type="text" className="form-control" id="waterPressure" placeholder="OK" />
			</div>
			<div className="form-group">
				<label htmlFor="bilgePumps">Bilge Pumps</label>
				<input ref={this.bilgePumps} type="text" className="form-control" id="bilgePumps" placeholder="OK" />
			</div>
			<div className="form-group">
				<label htmlFor="dcRefrigerator">DC Refrigerator</label>
				<input ref={this.dcRefrigerator} type="text" className="form-control" id="dcRefrigerator" placeholder="OK" />
			</div>
			<div className="form-group">
				<label htmlFor="tv">TVs</label>
				<input ref={this.tv} type="text" className="form-control" id="tv" placeholder="OK" />
			</div>
			<div className="form-group">
				<label htmlFor="dvd">DVD</label>
				<input ref={this.dvd} type="text" className="form-control" id="dvd" placeholder="OK" />
			</div>
			<div className="form-group">
				<label htmlFor="stove">Stove</label>
				<input ref={this.stove} type="text" className="form-control" id="stove" placeholder="OK" />
			</div>
			<div className="form-group">
				<label htmlFor="propane">Propane</label>
				<input ref={this.propane} type="text" className="form-control" id="propane" placeholder="OK" />
			</div>
		<button type="submit">Submit</button>
		</form>
		);
	}
}

export default ScDcEquipment;