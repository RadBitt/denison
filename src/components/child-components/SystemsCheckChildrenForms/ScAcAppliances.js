import React from 'react';

class ScAcAppliances extends React.Component {
	render() {
		return(
		<form onSubmit={console.log("1")}>
			<h2> AC Appliances </h2>
			<div className="form-group">
				<label htmlFor="acRefrigerator">AC Refrigerator</label>
				<input ref={this.acRefrigerator} type="text" className="form-control" id="acRefrigerator" placeholder="OK" />
			</div>
			<div className="form-group">
				<label htmlFor="microwave">Microwave</label>
				<input ref={this.microwave} type="text" className="form-control" id="microwave" placeholder="OK" />
			</div>
			<h2> Water Heater </h2>
			<div className="form-group">
				<label htmlFor="testElectrical">Test Electrical</label>
				<input ref={this.testElectrical} type="text" className="form-control" id="testElectrical" placeholder="OK" />
			</div>
			<div className="form-group">
				<label htmlFor="testConvection">Test Convection</label>
				<input ref={this.testConvection} type="text" className="form-control" id="testConvection" placeholder="OK" />
			</div>
			<h2> Air Conditioner </h2>
			<div className="form-group">
				<label htmlFor="testHeat">Test Heat</label>
				<input ref={this.testHeat} type="text" className="form-control" id="testHeat" placeholder="OK" />
			</div>
			<div className="form-group">
				<label htmlFor="testCold">Test Cold</label>
				<input ref={this.testCold} type="text" className="form-control" id="testCold" placeholder="OK" />
			</div>
		<button type="submit">Submit</button>
		</form>
		);
	}
}

export default ScAcAppliances;