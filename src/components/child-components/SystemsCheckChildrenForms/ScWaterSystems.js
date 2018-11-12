import React from 'react';

class ScWaterSystems extends React.Component {
	render() {
		return(
		<form onSubmit={console.log("1")}>
			<h2>Water Systems</h2>
			<div className="form-group">
				<label htmlFor="testToilets">Test Toilets</label>
				<input ref={this.testToilets} type="text" className="form-control" id="testToilets" placeholder="OK" />
			</div>
			<div className="form-group">
				<label htmlFor="maceratorPump">Macerator Pump</label>
				<input ref={this.maceratorPump} type="text" className="form-control" id="maceratorPump" placeholder="OK" />
			</div>
			<div className="form-group">
				<label htmlFor="holdingTank">Holding Tank</label>
				<input ref={this.holdingTank} type="text" className="form-control" id="holdingTank" placeholder="OK" />
			</div>
			<div className="form-group">
				<label htmlFor="waterSupply">Water Supply</label>
				<input ref={this.waterSupply} type="text" className="form-control" id="waterSupply" placeholder="OK" />
			</div>
			<div className="form-group">
				<label htmlFor="thruHulls">Thru Hulls</label>
				<input ref={this.thruHulls} type="text" className="form-control" id="thruHulls" placeholder="OK" />
			</div>
			<div className="form-group">
				<label htmlFor="waterTank">Water Tank</label>
				<input ref={this.waterTank} type="text" className="form-control" id="waterTank" placeholder="OK" />
			</div>
			<div className="form-group">
				<label htmlFor="waterHoses">Water Hoses</label>
				<input ref={this.waterHoses} type="text" className="form-control" id="waterHoses" placeholder="OK" />
			</div>
			<div className="form-group">
				<label htmlFor="sanitaryHoses">Sanitary Hoses</label>
				<input ref={this.sanitaryHoses} type="text" className="form-control" id="sanitaryHoses" placeholder="OK" />
			</div>
			<div className="form-group">
				<label htmlFor="reportLeaks">Report Leaks</label>
				<input ref={this.reportLeaks} type="text" className="form-control" id="reportLeaks" placeholder="OK" />
			</div>
		<button type="submit">Submit</button>
		</form>
		);
	}
}

export default ScWaterSystems;