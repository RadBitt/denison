import React from 'react';

class ScElectricalSystem extends React.Component {
	render() {
		return(
		<div>
			<h2> Electrical System </h2>
			<h5 htmlFor="shorePowerChord">Shore Power Chord</h5>
			<div className="form-check form-check-inline">
				<input ref={this.shorePowerChord} type="radio" className="form-check-input position-static" name="shorePowerChord" id="shorePowerChordP" value="true" />
				<label htmlFor="shorePowerChord">Pass</label>
			</div>
			<div className="form-check form-check-inline">
				<input ref={this.shorePowerChord} type="radio" className="form-check-input position-static" name="shorePowerChord" id="shorePowerChordF" value="false" />
				<label htmlFor="shorePowerChord">Fail</label>
			</div>
			<h5 htmlFor="shorePowerRecepitcle">Shore Power Recepitcle</h5>
			<div className="form-check form-check-inline">
				<input ref={this.shorePowerRecepitcle} type="radio" className="form-check-input position-static" name="shorePowerRecepitcle" id="shorePowerRecepitcleP"  value="true"/>
				<label htmlFor="shorePowerRecepitcle">Pass</label>
			</div>
			<div className="form-check form-check-inline">
				<input ref={this.shorePowerRecepitcle} type="radio" className="form-check-input position-static" name="shorePowerRecepitcle" id="shorePowerRecepitcleF" value="false"/>
				<label htmlFor="shorePowerRecepitcle">Fail</label>
			</div>
			<h5 htmlFor="polarity">Polarity</h5>
			<div className="form-check form-check-inline">
				<input ref={this.polarity} type="radio" className="form-check-input position-static" name="polarity" id="polarityP"  value="true"/>
				<label htmlFor="polarity">Pass</label>
			</div>
			<div className="form-check form-check-inline">
				<input ref={this.polarity} type="radio" className="form-check-input position-static" name="polarity" id="polarityF" value="false"/>
				<label htmlFor="polarity">Fail</label>
			</div>
			<h5 htmlFor="chargingSystem">Charging System</h5>
			<div className="form-check form-check-inline">
				<input ref={this.chargingSystem} type="radio" className="form-check-input position-static" name="chargingSystem" id="chargingSystemP"  value="true"/>
				<label htmlFor="chargingSystem">Pass</label>
			</div>
			<div className="form-check form-check-inline">
				<input ref={this.chargingSystem} type="radio" className="form-check-input position-static" name="chargingSystem" id="chargingSystemF" value="false"/>
				<label htmlFor="chargingSystem">Fail</label>
			</div>
			<h5 htmlFor="inverterSystem">Inverter System</h5>
			<div className="form-check form-check-inline">
				<input ref={this.inverterSystem} type="radio" className="form-check-input position-static" name="inverterSystem" id="inverterSystemP"  value="true"/>
				<label htmlFor="inverterSystem">Pass</label>
			</div>
			<div className="form-check form-check-inline">
				<input ref={this.inverterSystem} type="radio" className="form-check-input position-static" name="inverterSystem" id="inverterSystemF" value="false"/>
				<label htmlFor="inverterSystem">Fail</label>
			</div>
			<h5 htmlFor="batteryBanks">Battery Banks</h5>
			<div className="form-check form-check-inline">
				<input ref={this.batteryBanks} type="radio" className="form-check-input position-static" name="batteryBanks" id="batteryBanksP"  value="true"/>
				<label htmlFor="batteryBanks">Pass</label>
			</div>
			<div className="form-check form-check-inline">
				<input ref={this.batteryBanks} type="radio" className="form-check-input position-static" name="batteryBanks" id="batteryBanksF" value="false"/>
				<label htmlFor="batteryBanks">Fail</label>
			</div>
			<h5 htmlFor="batteryBanksSecure">Battery Banks Secure</h5>
			<div className="form-check form-check-inline">
				<input ref={this.batteryBanksSecure} type="radio" className="form-check-input position-static" name="batteryBanksSecure" id="batteryBanksSecureP"  value="true"/>
				<label htmlFor="batteryBanksSecure">Pass</label>
			</div>
			<div className="form-check form-check-inline">
				<input ref={this.batteryBanksSecure} type="radio" className="form-check-input position-static" name="batteryBanksSecure" id="batteryBanksSecureF" value="false"/>
				<label htmlFor="batteryBanksSecure">Fail</label>
			</div>
			<h5 htmlFor="batteryCablesSecure">Battery Cables Secure</h5>
			<div className="form-check form-check-inline">
				<input ref={this.batteryCablesSecure} type="radio" className="form-check-input position-static" name="batteryCablesSecure" id="batteryCablesSecureP"  value="true"/>
				<label htmlFor="batteryCablesSecure">Pass</label>
			</div>
			<div className="form-check form-check-inline">
				<input ref={this.batteryCablesSecure} type="radio" className="form-check-input position-static" name="batteryCablesSecure" id="batteryCablesSecureF" value="false"/>
				<label htmlFor="batteryCablesSecure">Fail</label>
			</div>
			<h5 htmlFor="batteryCables">Battery Cables</h5>
			<div className="form-check form-check-inline">
				<input ref={this.batteryCables} type="radio" className="form-check-input position-static" name="batteryCables" id="batteryCablesP"  value="true"/>
				<label htmlFor="batteryCables">Pass</label>
			</div>
			<div className="form-check form-check-inline">
				<input ref={this.batteryCables} type="radio" className="form-check-input position-static" name="batteryCables" id="batteryCablesF" value="false"/>
				<label htmlFor="batteryCables">Fail</label>
			</div>
			<h5 htmlFor="batterySwitches">Battery Switches</h5>
			<div className="form-check form-check-inline">
				<input ref={this.batterySwitches} type="radio" className="form-check-input position-static" name="batterySwitches" id="batterySwitchesP"  value="true"/>
				<label htmlFor="batterySwitches">Pass</label>
			</div>
			<div className="form-check form-check-inline">
				<input ref={this.batterySwitches} type="radio" className="form-check-input position-static" name="batterySwitches" id="batterySwitchesF" value="false"/>
				<label htmlFor="batterySwitches">Fail</label>
			</div>
			<h5 htmlFor="dCElectricalPanel">DC Electrical Panel</h5>
			<div className="form-check form-check-inline">
				<input ref={this.dCElectricalPanel} type="radio" className="form-check-input position-static" name="dCElectricalPanel" id="dCElectricalPanelP"  value="true"/>
				<label htmlFor="dCElectricalPanel">Pass</label>
			</div>
			<div className="form-check form-check-inline">
				<input ref={this.dCElectricalPanel} type="radio" className="form-check-input position-static" name="dCElectricalPanel" id="dCElectricalPanelF" value="false"/>
				<label htmlFor="dCElectricalPanel">Fail</label>
			</div>
			<h5 htmlFor="aCElectricalPanel">AC Electrical Panel</h5>
			<div className="form-check form-check-inline">
				<input ref={this.aCElectricalPanel} type="radio" className="form-check-input position-static" name="aCElectricalPanel" id="aCElectricalPanelP"  value="true"/>
				<label htmlFor="aCElectricalPanel">Pass</label>
			</div>
			<div className="form-check form-check-inline">
				<input ref={this.aCElectricalPanel} type="radio" className="form-check-input position-static" name="aCElectricalPanel" id="aCElectricalPanelF" value="false"/>
				<label htmlFor="aCElectricalPanel">Fail</label>
			</div>
			<h5 htmlFor="gauges">Gauges</h5>
			<div className="form-check form-check-inline">
				<input ref={this.gauges} type="radio" className="form-check-input position-static" name="gauges" id="gaugesP"  value="true"/>
				<label htmlFor="gauges">Pass</label>
			</div>
			<div className="form-check form-check-inline">
				<input ref={this.gauges} type="radio" className="form-check-input position-static" name="gauges" id="gaugesF" value="false"/>
				<label htmlFor="gauges">Fail</label>
			</div>
			<h2> Lights </h2>
			<h5 htmlFor="lights">Lights</h5>
			<div className="form-check form-check-inline">
				<input ref={this.lights} type="radio" className="form-check-input position-static" name="lights" id="lightsP"  value="true"/>
				<label htmlFor="lights">Pass</label>
			</div>
			<div className="form-check form-check-inline">
				<input ref={this.lights} type="radio" className="form-check-input position-static" name="lights" id="lightsF" value="false"/>
				<label htmlFor="lights">Fail</label>
			</div>
		</div>
		);
	}
}

export default ScElectricalSystem;