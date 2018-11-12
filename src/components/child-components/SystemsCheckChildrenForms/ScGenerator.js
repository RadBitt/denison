import React from 'react';

class ScGenerator extends React.Component {
	render() {
		return(
		<form onSubmit={console.log("1")}>
		<h2> Generator </h2>
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
		<h2> Run Generator Engine </h2>
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
		<button type="submit">Submit</button>
		</form>
		);
	}
}

export default ScGenerator;