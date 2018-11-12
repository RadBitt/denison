import React from 'react';

class ScElectricalSystem extends React.Component {
	render() {
		return(
		<form onSubmit={console.log("1")}>
			<h2> Electrical System </h2>
			<div className="form-group">
				<label htmlFor="shorePowerChord">Shore Power Chord</label>
				<input ref={this.shorePowerChord} type="text" className="form-control" id="shorePowerChord" placeholder="OK" />
			</div>
			<div className="form-group">
				<label htmlFor="shorePowerRecepitcle">Shore Power Recepitcle</label>
				<input ref={this.shorePowerRecepitcle} type="text" className="form-control" id="shorePowerRecepitcle" placeholder="OK" />
			</div>
			<div className="form-group">
				<label htmlFor="polarity">Polarity</label>
				<input ref={this.polarity} type="text" className="form-control" id="polarity" placeholder="OK" />
			</div>
			<div className="form-group">
				<label htmlFor="chargingSystem">Charging System</label>
				<input ref={this.chargingSystem} type="text" className="form-control" id="chargingSystem" placeholder="OK" />
			</div>
			<div className="form-group">
				<label htmlFor="inverterSystem">Inverter System</label>
				<input ref={this.inverterSystem} type="text" className="form-control" id="inverterSystem" placeholder="OK" />
			</div>
			<div className="form-group">
				<label htmlFor="batteryBanks">Battery Banks</label>
				<input ref={this.batteryBanks} type="text" className="form-control" id="batteryBanks" placeholder="OK" />
			</div>
			<div className="form-group">
				<label htmlFor="batteryBanksSecure">Battery Banks Secure</label>
				<input ref={this.batteryBanksSecure} type="text" className="form-control" id="batteryBanksSecure" placeholder="OK" />
			</div>
			<div className="form-group">
				<label htmlFor="batteryCablesSecure">Battery Cables Secure</label>
				<input ref={this.batteryCablesSecure} type="text" className="form-control" id="batteryCablesSecure" placeholder="OK" />
			</div>
			<div className="form-group">
				<label htmlFor="batteryCables">Battery Cables</label>
				<input ref={this.batteryCables} type="text" className="form-control" id="batteryCables" placeholder="OK" />
			</div>
			<div className="form-group">
				<label htmlFor="batterySwitches">Battery Switches</label>
				<input ref={this.batterySwitches} type="text" className="form-control" id="batterySwitches" placeholder="OK" />
			</div>
			<div className="form-group">
				<label htmlFor="dCElectricalPanel">DC Electrical Panel</label>
				<input ref={this.dCElectricalPanel} type="text" className="form-control" id="dCElectricalPanel" placeholder="OK" />
			</div>
			<div className="form-group">
				<label htmlFor="aCElectricalPanel">AC Electrical Panel</label>
				<input ref={this.aCElectricalPanel} type="text" className="form-control" id="aCElectricalPanel" placeholder="OK" />
			</div>
			<div className="form-group">
				<label htmlFor="gauges">Gauges</label>
				<input ref={this.gauges} type="text" className="form-control" id="gauges" placeholder="OK" />
			</div>
			<h2> Lights </h2>
			<div className="form-group">
				<label htmlFor="lights">Lights</label>
				<input ref={this.lights} type="text" className="form-control" id="lights" placeholder="OK" />
			</div>

		<button type="submit">Submit</button>
		</form>
		);
	}
}

export default ScElectricalSystem;