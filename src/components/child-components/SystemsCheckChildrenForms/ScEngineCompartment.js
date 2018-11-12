import React from 'react';

class ScEngineCompartment extends React.Component {
	render() {
		return(
		<form onSubmit={console.log("1")}>
			<h2> Engine Compartment </h2>
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
			<h2> Run Engine </h2>
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
		<button type="submit">Submit</button>
		</form>
		);
	}
}

export default ScEngineCompartment;