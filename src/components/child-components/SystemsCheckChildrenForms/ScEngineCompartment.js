import React from 'react';
import RadioToggle from './RadioToggle';

class ScEngineCompartment extends React.Component {

	engineCompartmentLabels = {
		thruHulls: 'Thru-hulls',
		seaStrainer: 'Sea Strainer',
		starterBatteryCables: 'Starter Battery',
		alternatorBatteryCables: 'Alternator Battery',
		groundingCables: 'Grounding Cables',
		engineHarness: 'Engine Harness',
		auxWiring: 'Aux Wiring',
		bilge: 'Bilge',
		shaft: 'Shaft',
		oilLevel: 'Oil Level',
		transoilLevel: 'Transmission Oil level',
		coolantLevel: 'Coolant level',
		expansionTanklevel: 'Expansion Tank Level',
		belts: 'Engine Belts',
		oilCooler: 'Oil Cooler',
		waterCooler: 'Water Cooler',
		rawWaterPump: 'Raw Water Pump',
		exhaustSystem: 'Exhaust System',
	}

	divHtmlClass = 'form-check form-check-inline';
	inputHtmlClass = 'form-check-input position-static';
	labelHtmlClass = 'form-check-label';

	render() {
		return(
		<div>
			<h2> Engine Compartment </h2>
			{Object.keys(this.engineCompartmentLabels).map(key => (
	         <RadioToggle
	         	key={key}
	         	id={key}
	            label={this.engineCompartmentLabels[key]}
				idName={key}
				divHtmlClass={this.divHtmlClass}
				inputHtmlClass={this.inputHtmlClass}
				labelHtmlClass={this.labelHtmlClass}
	         />
	        ))}
		</div>
		);
	}
}

export default ScEngineCompartment;