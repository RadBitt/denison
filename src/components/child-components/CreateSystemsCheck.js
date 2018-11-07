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
			{/* Systems Check Details */}
				<div className="form-group">
					<label htmlFor="technician">Technician</label>
					<input ref={this.technician} type="text" className="form-control" id="technician" placeholder="OK" />
				</div>
				<div className="form-group">
					<label htmlFor="dateOfReport">Date Of Report</label>
					<input ref={this.dateOfReport} type="text" className="form-control" id="dateOfReport" placeholder="OK" />
				</div>
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
					<label htmlFor="genThruHulls">Gen Thru hulls</label>
					<input ref={this.genThruHulls} type="text" className="form-control" id="genThruHulls" placeholder="OK" />
				</div>
				<div className="form-group">
					<label htmlFor="genSeaStrainer">Gen Sea Strainer</label>
					<input ref={this.genSeaStrainer} type="text" className="form-control" id="genSeaStrainer" placeholder="OK" />
				</div>
				<div className="form-group">
					<label htmlFor="genStarterBatteryCables">Gen Starter Battery Cables</label>
					<input ref={this.genStarterBatteryCables} type="text" className="form-control" id="genStarterBatteryCables" placeholder="OK" />
				</div>
				<div className="form-group">
					<label htmlFor="generatorCables">Generator Cables</label>
					<input ref={this.generatorCables} type="text" className="form-control" id="generatorCables" placeholder="OK" />
				</div>
				<div className="form-group">
					<label htmlFor="genGroundingCables">Gen Grounding Cables</label>
					<input ref={this.genGroundingCables} type="text" className="form-control" id="genGroundingCables" placeholder="OK" />
				</div>
				<div className="form-group">
					<label htmlFor="genEngineHarness">Gen Engine Harness</label>
					<input ref={this.genEngineHarness} type="text" className="form-control" id="genEngineHarness" placeholder="OK" />
				</div>
				<div className="form-group">
					<label htmlFor="genAuxWiring">Gen Aux Wiring</label>
					<input ref={this.genAuxWiring} type="text" className="form-control" id="genAuxWiring" placeholder="OK" />
				</div>
				<div className="form-group">
					<label htmlFor="genBilge">Gen Bilge</label>
					<input ref={this.genBilge} type="text" className="form-control" id="genBilge" placeholder="OK" />
				</div>
				<div className="form-group">
					<label htmlFor="genOilLevel">Gen Oil level</label>
					<input ref={this.genOilLevel} type="text" className="form-control" id="genOilLevel" placeholder="OK" />
				</div>
				<div className="form-group">
					<label htmlFor="genCoolantLevel">Gen Coolant level</label>
					<input ref={this.genCoolantLevel} type="text" className="form-control" id="genCoolantLevel" placeholder="OK" />
				</div>
				<div className="form-group">
					<label htmlFor="genExpansionTankLevel">Gen Expansion Tank Level</label>
					<input ref={this.genExpansionTankLevel} type="text" className="form-control" id="genExpansionTankLevel" placeholder="OK" />
				</div>
				<div className="form-group">
					<label htmlFor="genBelts">Gen Belts</label>
					<input ref={this.genBelts} type="text" className="form-control" id="genBelts" placeholder="OK" />
				</div>
				<div className="form-group">
					<label htmlFor="genHeatExchanger">Gen Heat Exchanger</label>
					<input ref={this.genHeatExchanger} type="text" className="form-control" id="genHeatExchanger" placeholder="OK" />
				</div>
				<div className="form-group">
					<label htmlFor="genRawWaterPump">Gen Raw Water pump</label>
					<input ref={this.genRawWaterPump} type="text" className="form-control" id="genRawWaterPump" placeholder="OK" />
				</div>
				<div className="form-group">
					<label htmlFor="genExhaustSystem">Gen Exhaust System</label>
					<input ref={this.genExhaustSystem} type="text" className="form-control" id="genExhaustSystem" placeholder="OK" />
				</div>
			{/* Run Generator Engine */}
				<div className="form-group">
					<label htmlFor="genEngineAlarms">Gen Engine Alarms</label>
					<input ref={this.genEngineAlarms} type="text" className="form-control" id="genEngineAlarms" placeholder="OK" />
				</div>
				<div className="form-group">
					<label htmlFor="genRunEngine">Gen Run Engine</label>
					<input ref={this.genRunEngine} type="text" className="form-control" id="genRunEngine" placeholder="OK" />
				</div>
				<div className="form-group">
					<label htmlFor="genExhaustWater">Gen Exhaust Water</label>
					<input ref={this.genExhaustWater} type="text" className="form-control" id="genExhaustWater" placeholder="OK" />
				</div>
				<div className="form-group">
					<label htmlFor="genExhaustColor">Gen Exhaust Color</label>
					<input ref={this.genExhaustColor} type="text" className="form-control" id="genExhaustColor" placeholder="OK" />
				</div>
			{/* Navigation Equipment */}
				<div className="form-group">
					<label htmlFor="vhf">VHF</label>
					<input ref={this.vhf} type="text" className="form-control" id="vhf" placeholder="OK" />
				</div>
				<div className="form-group">
					<label htmlFor="mfds">MFDs</label>
					<input ref={this.mfds} type="text" className="form-control" id="mfds" placeholder="OK" />
				</div>
				<div className="form-group">
					<label htmlFor="compasses">Compasses</label>
					<input ref={this.compasses} type="text" className="form-control" id="compasses" placeholder="OK" />
				</div>
				<div className="form-group">
					<label htmlFor="navLights">Nav Lights</label>
					<input ref={this.navLights} type="text" className="form-control" id="navLights" placeholder="OK" />
				</div>
				<div className="form-group">
					<label htmlFor="wind">Wind</label>
					<input ref={this.wind} type="text" className="form-control" id="wind" placeholder="OK" />
				</div>
				<div className="form-group">
					<label htmlFor="depth">Depth</label>
					<input ref={this.depth} type="text" className="form-control" id="depth" placeholder="OK" />
				</div>   
				<div className="form-group">
					<label htmlFor="gps">GPS</label>
					<input ref={this.gps} type="text" className="form-control" id="gps" placeholder="OK" />
				</div>
				<div className="form-group">
					<label htmlFor="ais">AIS</label>
					<input ref={this.ais} type="text" className="form-control" id="ais" placeholder="OK" />
				</div>
				<div className="form-group">
					<label htmlFor="autopilot">Autopilot</label>
					<input ref={this.autopilot} type="text" className="form-control" id="autopilot" placeholder="OK" />
				</div>
			{/*Water Systems*/}
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
			{/* Autopilot */}
				<div className="form-group">
					<label htmlFor="steering">Steering</label>
					<input ref={this.steering} type="text" className="form-control" id="steering" placeholder="OK" />
				</div>
				<div className="form-group">
					<label htmlFor="chain">Chain</label>
					<input ref={this.chain} type="text" className="form-control" id="chain" placeholder="OK" />
				</div>
				<div className="form-group">
					<label htmlFor="hyrdraulic">Hyrdraulic</label>
					<input ref={this.hyrdraulic} type="text" className="form-control" id="hyrdraulic" placeholder="OK" />
				</div>
				<div className="form-group">
					<label htmlFor="shaft">Shaft</label>
					<input ref={this.shaft} type="text" className="form-control" id="shaft" placeholder="OK" />
				</div>
				<div className="form-group">
					<label htmlFor="autopilot">Autopilot</label>
					<input ref={this.autopilot} type="text" className="form-control" id="autopilot" placeholder="OK" />
				</div>
			{/* DC Equipment */}
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
			{/* AC Appliances */}
				<div className="form-group">
					<label htmlFor="acRefrigerator">AC Refrigerator</label>
					<input ref={this.acRefrigerator} type="text" className="form-control" id="acRefrigerator" placeholder="OK" />
				</div>
				<div className="form-group">
					<label htmlFor="microwave">Microwave</label>
					<input ref={this.microwave} type="text" className="form-control" id="microwave" placeholder="OK" />
				</div>
			{/* Anchor Equipment */}
				<div className="form-group">
					<label htmlFor="anchorWindlass">Anchor Windlass</label>
					<input ref={this.anchorWindlass} type="text" className="form-control" id="anchorWindlass" placeholder="OK" />
				</div>
				<div className="form-group">
					<label htmlFor="anchorGear">Anchor Gear</label>
					<input ref={this.anchorGear} type="text" className="form-control" id="anchorGear" placeholder="OK" />
				</div>
			{/* Water Heater */}
				<div className="form-group">
					<label htmlFor="testElectrical">Test Electrical</label>
					<input ref={this.testElectrical} type="text" className="form-control" id="testElectrical" placeholder="OK" />
				</div>
				<div className="form-group">
					<label htmlFor="testConvection">Test Convection</label>
					<input ref={this.testConvection} type="text" className="form-control" id="testConvection" placeholder="OK" />
				</div>
			{/* Air Conditioner */}
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
			</div>
		);
	}
}

export default CreateSystemsCheck;

