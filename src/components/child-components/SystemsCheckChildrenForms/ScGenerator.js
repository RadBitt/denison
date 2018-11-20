import React from 'react';
import RadioToggle from './RadioToggle';

class ScGenerator extends React.Component {

	parentId1 = 'mainGenerator';
	parentId2 = 'runGenerator';

	mainGeneratorLabels = {
	 	genThruHulls: 'Thru Hulls',
	 	genSeaStrainer: 'Sea Strainer',
		genStarterBatteryCables: 'Starter Battery Cables', 
		generatorCables: 'Generator Cables',
		genGroundingCables: 'Grounding Cables',
		genEngineHarness: 'Engine Harness',
		genAuxWiring: 'Aux Wiring',
		genBilge: 'Bilge',
		genOilLevel: 'Oil Level',
		genCoolantLevel: 'Coolant Level',
		genExpansionTankLevel: 'Expansion Tank Level',
		genBelts: 'Belts',
		genOilCooler: 'Oil Cooler',
		genWaterCooler: 'Water Cooler',
		genRawWaterPump: 'Raw Water Pump',
		genExhaustSystem: 'Exhaust System'
	};

	runGeneratorLabels = {
		genEngineAlarms: 'Engine Alarms',
		genRunEngine: 'Run Engine',
		genExhaustWater: 'Exhaust Water',
		genExhaustColor: 'Exhaust Color'
	};

	divHtmlClass = 'form-check form-check-inline';
	inputHtmlClass = 'form-check-input position-static';
	labelHtmlClass = 'form-check-label';

	render() {
		const props = this.props;
		return(
		<div>
		<h2>Generator</h2>
			{Object.keys(this.mainGeneratorLabels).map(key => (
				<RadioToggle
				{...props}
		     	key={key}
		     	id={key}
		     	parentId={this.parentId1}
		        label={this.mainGeneratorLabels[key]}
				divHtmlClass={this.divHtmlClass}
				inputHtmlClass={this.inputHtmlClass}
				labelHtmlClass={this.labelHtmlClass}
		    	/>
			))}
		<h2>Run Generator</h2>
			{Object.keys(this.runGeneratorLabels).map(key => (
				<RadioToggle
				{...props}
		     	key={key}
		     	id={key}
		     	parentId={this.parentId2}
		        label={this.runGeneratorLabels[key]}
				divHtmlClass={this.divHtmlClass}
				inputHtmlClass={this.inputHtmlClass}
				labelHtmlClass={this.labelHtmlClass}
		    	/>
			))}
		</div>
		);
	}
}

export default ScGenerator;