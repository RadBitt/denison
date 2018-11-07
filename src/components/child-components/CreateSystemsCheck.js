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
			{/* Vessel Information */}
				<div className-"form-group">
					<label htmlFor="owner">Owner</label>
					<input ref={this.owner} type="text" className="form-control" id="owner" placeholder="OK" />
				</div>
				<div className-"form-group">
					<label htmlFor="vesselModel">Vessel Model</label>
					<input ref={this.vesselModel} type="text" className="form-control" id="vesselModel" placeholder="OK" />
				</div>
				<div className-"form-group">
					<label htmlFor="hullNumber">Hull</label>
					<input ref={this.hullNumber} type="text" className="form-control" id="hullNumber" placeholder="OK" />
				</div>
				<div className-"form-group">
					<label htmlFor="engineSerial">Engine Serial</label>
					<input ref={this.engineSerial} type="text" className="form-control" id="engineSerial" placeholder="OK" />
				</div>
				<div className-"form-group">
					<label htmlFor="engineHours">Engine Hours</label>
					<input ref={this.engineHours} type="text" className="form-control" id="engineHours" placeholder="OK" />
				</div>
			{/* Hull Condition */}
				<div className="form-group">	
					<label htmlFor="waterlineCondition">Waterline condition</label>
					<input ref={this.waterlineCondition} type="text" className="form-control" id="waterlineCondition" placeholder="OK"/>
				</div>
				<div className="form-group">
					<label htmlFor="hullDamage">Hull damage</label>
					<input ref={this.hullDamage} type="text" className="form-control" id="hullDamage" placeholder="OK"/>
				</div>
				<div className="form-group">
					<label htmlFor="deckHardware">Deck hardware</label>
					<input ref={this.deckHardware} type="text" className="form-control" id="deckHardware" placeholder="OK"/>
				</div>
			{/* Rigging */}
				<div className="form-group">
					<label htmlFor="hardwareCondition">Hardware Condition</label>
					<input ref={this.hardwareCondition} type="text" className="form-control" id="hardwareCondition" placeholder="OK"/>
				</div>
				<div className="form-group">
					<label htmlFor="riggingCondition">Rigging Condition</label>
					<input ref={this.riggingCondition} type="text" className="form-control" id="riggingCondition" placeholder="OK"/>
				</div>
			{/* Helm */}
				<div className="form-group">
					<label htmlFor="steeringSystem">Steering System</label>
					<input ref={this.steeringSystem} type="text" className="form-control" id="steeringSystem" placeholder="OK"/>
				</div>
				<div className="form-group">
					<label htmlFor="electronicsCondition">Electronics Condition</label>
					<input ref={this.electronicsCondition} type="text" className="form-control" id="electronicsCondition" placeholder="OK"/>
				</div>
			{ /* Engine Compartment */}
				<div className="form-group">
					<label htmlFor="thruhulls">Thru-hulls </label>
					<input ref={this.thruhulls} type="text" className="form-control" id="thruhulls" placeholder="Note Condition" />
				</div>
				<div className="form-group">
					<label htmlFor="seaStrainer">Sea Strainer</label>
					<input ref={this.seaStrainer} type="text" className="form-control" id="seaStrainer" placeholder="Note Condition" />
				</div>
				<div className="form-group">
					<label htmlFor="starterBatteryCables">Starter Battery Cables</label>
					<input ref={this.starterBatteryCables} type="text" className="form-control" id="starterBatteryCables" placeholder="Note Condition" />
				</div>
				<div className="form-group">
					<label htmlFor="alternatorBatteryCables">Alternator Battery Cables</label>
					<input ref={this.alternatorBatteryCables} type="text" className="form-control" id="alternatorBatteryCables" placeholder="Note Condition" />
				</div>
				<div className="form-group">
					<label htmlFor="groundingCables">Grounding Cables</label>
					<input ref={this.groundingCables} type="text" className="form-control" id="groundingCables" placeholder="Note Condition" />
				</div>
				<div className="form-group">
					<label htmlFor="engineHarness">Engine Harness</label>
					<input ref={this.engineHarness} type="text" className="form-control" id="engineHarness" placeholder="Note Condition" />
				</div>
				<div className="form-group">
					<label htmlFor="auxWiring">Aux Wiring</label>
					<input ref={this.auxWiring} type="text" className="form-control" id="auxWiring" placeholder="Note Condition" />
				</div>
				<div className="form-group">
					<label htmlFor="bilge">Bilge </label>
					<input ref={this.bilge} type="text" className="form-control" id="bilge" placeholder="Note Condition" />
				</div>
				<div className="form-group">
					<label htmlFor="shaft">Shaft </label>
					<input ref={this.shaft} type="text" className="form-control" id="shaft" placeholder="Note Condition" />
				</div>
				<div className="form-group">
					<label htmlFor="oillevel">Oil level</label>
					<input ref={this.oillevel} type="text" className="form-control" id="oillevel" placeholder="Note Condition" />
				</div>
				<div className="form-group">
					<label htmlFor="transoillevel">Transoil level</label>
					<input ref={this.transoillevel} type="text" className="form-control" id="transoillevel" placeholder="Note Condition" />
				</div>
				<div className="form-group">
					<label htmlFor="coolantlevel">Coolant level</label>
					<input ref={this.coolantlevel} type="text" className="form-control" id="coolantlevel" placeholder="Note Condition" />
				</div>
				<div className="form-group">
					<label htmlFor="expansiontanklevel">Expansion tank level</label>
					<input ref={this.expansiontanklevel} type="text" className="form-control" id="expansiontanklevel" placeholder="Note Condition" />
				</div>
				<div className="form-group">
					<label htmlFor="belts">Belts </label>
					<input ref={this.belts} type="text" className="form-control" id="belts" placeholder="Note Condition" />
				</div>
				<div className="form-group">
					<label htmlFor="oilcooler">Oil cooler </label>
					<input ref={this.oilcooler} type="text" className="form-control" id="oilcooler" placeholder="Note Condition" />
				</div>
				<div className="form-group">
					<label htmlFor="watercooler">Water cooler </label>
					<input ref={this.watercooler} type="text" className="form-control" id="watercooler" placeholder="Note Condition" />
				</div>
				<div className="form-group">
					<label htmlFor="rawwaterpump">Raw water pump</label>
					<input ref={this.rawwaterpump} type="text" className="form-control" id="rawwaterpump" placeholder="Note Condition" />
				</div>
				<div className="form-group">
					<label htmlFor="exhaustSystem">Exhaust System</label>
					<input ref={this.exhaustSystem} type="text" className="form-control" id="exhaustSystem" placeholder="Note Condition" />
				</div>
			{/* Run Engine */}
				<div className="form-group">
					<label htmlFor="engineAlarms">Engine Alarms</label>
					<input ref={this.engineAlarms} type="text" className="form-control" id="engineAlarms" placeholder="OK" />
				</div>
				<div className="form-group">
					<label htmlFor="runEngine">Run Engine</label>
					<input ref={this.runEngine} type="text" className="form-control" id="runEngine" placeholder="OK" />
				</div>
				<div className="form-group">
					<label htmlFor="exhaustWater">Exhaust Water</label>
					<input ref={this.exhaustWater} type="text" className="form-control" id="exhaustWater" placeholder="OK" />
				</div>
				<div className="form-group">
					<label htmlFor="exhaustColor">Exhaust Color</label>
					<input ref={this.exhaustColor} type="text" className="form-control" id="exhaustColor" placeholder="OK" />
				</div>
				<div className="form-group">
					<label htmlFor="transmission">Transmission</label>
					<input ref={this.transmission} type="text" className="form-control" id="transmission" placeholder="OK" />
				</div>
			{/* Electrical System */}
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
			{/* Lights */}
				<div className="form-group">
					<label htmlFor="lights">Lights</label>
					<input ref={this.lights} type="text" className="form-control" id="lights" placeholder="OK" />
				</div>
			{/* Audio System */}
				<div className="form-group">
					<label htmlFor="headUnit">Head Unit</label>
					<input ref={this.headUnit} type="text" className="form-control" id="headUnit" placeholder="OK" />
				</div>
				<div className="form-group">
					<label htmlFor="speakers">Speakers</label>
					<input ref={this.speakers} type="text" className="form-control" id="speakers" placeholder="OK" />
				</div>
			{/* Generator */}
				<div className="form-group">
					<label htmlFor="thruHulls">Thru hulls</label>
					<input ref={this.thruHulls} type="text" className="form-control" id="thruHulls" placeholder="OK" />
				</div>
				<div className="form-group">
					<label htmlFor="seaStrainer">Sea Strainer</label>
					<input ref={this.seaStrainer} type="text" className="form-control" id="seaStrainer" placeholder="OK" />
				</div>
				<div className="form-group">
					<label htmlFor="tarterBatteryCables">Starter Battery Cables</label>
					<input ref={this.tarterBatteryCables} type="text" className="form-control" id="tarterBatteryCables" placeholder="OK" />
				</div>
				<div className="form-group">
					<label htmlFor="generatorCables">Generator Cables</label>
					<input ref={this.generatorCables} type="text" className="form-control" id="generatorCables" placeholder="OK" />
				</div>
				<div className="form-group">
					<label htmlFor="groundingCables">Grounding Cables</label>
					<input ref={this.groundingCables} type="text" className="form-control" id="groundingCables" placeholder="OK" />
				</div>
				<div className="form-group">
					<label htmlFor="engineHarness">Engine Harness</label>
					<input ref={this.engineHarness} type="text" className="form-control" id="engineHarness" placeholder="OK" />
				</div>
				<div className="form-group">
					<label htmlFor="auxWiring">Aux Wiring</label>
					<input ref={this.auxWiring} type="text" className="form-control" id="auxWiring" placeholder="OK" />
				</div>
				<div className="form-group">
					<label htmlFor="bilge">Bilge</label>
					<input ref={this.bilge} type="text" className="form-control" id="bilge" placeholder="OK" />
				</div>
				<div className="form-group">
					<label htmlFor="oilLevel">Oil level</label>
					<input ref={this.oilLevel} type="text" className="form-control" id="oilLevel" placeholder="OK" />
				</div>
				<div className="form-group">
					<label htmlFor="coolantLevel">Coolant level</label>
					<input ref={this.coolantLevel} type="text" className="form-control" id="coolantLevel" placeholder="OK" />
				</div>
				<div className="form-group">
					<label htmlFor="expansionTankLevel">Expansion tank level</label>
					<input ref={this.expansionTankLevel} type="text" className="form-control" id="expansionTankLevel" placeholder="OK" />
				</div>
				<div className="form-group">
					<label htmlFor="belts">Belts</label>
					<input ref={this.belts} type="text" className="form-control" id="belts" placeholder="OK" />
				</div>
				<div className="form-group">
					<label htmlFor="oilCooler">Oil cooler</label>
					<input ref={this.oilCooler} type="text" className="form-control" id="oilCooler" placeholder="OK" />
				</div>
				<div className="form-group">
					<label htmlFor="waterCooler">Water cooler</label>
					<input ref={this.waterCooler} type="text" className="form-control" id="waterCooler" placeholder="OK" />
				</div>
				<div className="form-group">
					<label htmlFor="rawWaterPump">Raw water pump</label>
					<input ref={this.rawWaterPump} type="text" className="form-control" id="rawWaterPump" placeholder="OK" />
				</div>
				<div className="form-group">
					<label htmlFor="exhaustSystem">Exhaust System</label>
					<input ref={this.exhaustSystem} type="text" className="form-control" id="exhaustSystem" placeholder="OK" />
				</div>
				<button type="submit">Submit</button>
				</form>
Vessel Systems Report

Technician
Date of Report

Vessel Information
	Owner
	Vessel Model
	Hull
	Engine Serial
	Engine Hours

Hull Condition
	Waterline condition
	Hull damage
	Deck hardware

	Notes

Rigging
	Hardware condition
	Rigging condition

	Notes

Helm
	Steering system
	Electronics condition

Engine Compartment (Note Condition)
	Thru-hulls 
	Sea Strainer
	Starter Battery Cables
	Alternator Battery Cables
	Grounding Cables
	Engine Harness
	Aux Wiring
	Bilge 
	Shaft 
	Oil level
	Transoil level
	Coolant level
	Expansion tank level
	Belts 
	Oil cooler 
	Water cooler 
	Raw water pump
	Exhaust System

Run Engine
	Engine Alarms
	Run Engine
	Exhaust Water
	Exhaust Color
	Transmission

	Notes

Electrical System
	Shore Power Chord
	Shore Power Recepitcle
	Polarity
	Charging System
	Inverter System
	Battery Banks
	Battery Banks Secure
	Battery Cables Secure
	Battery Cables
	Battery Switches
	DC Electrical Panel
	AC Electrical Panel
	Gauges

	Notes

Lights
	Test all lights

	Notes

Audio System
	HeadUnit
	Speakers

Generator
	Thru hulls
	Sea Strainer
	Starter Battery Cables
	Generator Cables
	Grounding Cables
	Engine Harness
	Aux Wiring
	Bilge
	Oil level
	Coolant level
	Expansion tank level
	Belts
	Oil cooler
	Water cooler
	Raw water pump
	Exhaust System

Run Generator
	Run Generator
	Check exhaust water

	Notes

Black Water System
	Test all toilets
	Macerator
	Holding Tank
	Water supply
	Thru Hulls

Grey Water Sytem
	Thru-hulls
	Test sumps
	Test drains

Fresh Water System
	Thru-Hulls
	Water Tank

WaterHeater
	Test electrical
	Test convection

Air Conditioning
	Test heat
	Test cold
	Thru-hulls

Navigation Equipment
	VHF
	MFDs
	Compasses
	Nav Lights
	Wind
	Depth
	GPS
	AIS
	Autopilot

Steering System
	Steering
	Chain
	Hyrdraulic
	Shaft
	Autopilot mechanical
	Autopilot electrical

	Notes

DC Equipment
	Water Pressure
	Bilge Pumps
	Float Switches
	Refrigerator
	TVs
	DVD Player
	Stove
	Propane System

AC Appliances
	Refrigerator
	Microwave

	Notes

Windlass
	Test windlass
	Rode

			</div>
		);
	}
}

export default CreateSystemsCheck;

