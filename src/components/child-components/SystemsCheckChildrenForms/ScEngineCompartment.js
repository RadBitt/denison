import React from 'react';
import RadioToggle from './RadioToggle';

class ScEngineCompartment extends React.Component {

	engineCompartment = {
		thruhulls: 'Thru-hulls',
		seaStrainer: 'Sea Strainer',
		starterBatteryCables: 'Starter Battery',
		alternatorBatteryCables: 'Alternator Battery',
		groundingCables: 'Grounding Cables',
		engineHarness: 'Engine Harness',
		auxWiring: 'Aux Wiring',
		bilge: 'Bilge',
		shaft: 'Shaft',
		oillevel: 'Oil Level',
		transoillevel: 'Transmission Oil level',
		coolantlevel: 'Coolant level',
		expansiontanklevel: 'Expansion Tank Level',
		belts: 'Engine Belts',
		oilcooler: 'Oil Cooler',
		watercooler: 'Water Cooler',
		rawwaterpump: 'Raw Water Pump',
		exhaustSystem: 'Exhaust System',
	}

	divHtmlClass = 'form-check form-check-inline';
	inputHtmlClass = 'form-check-input position-static';
	labelHtmlClass = 'form-check-label';

	render() {
		return(
		<div>
			<h2> Engine Compartment </h2>
			{Object.keys(this.engineCompartment).map(key => (
	         <RadioToggle
	         	key={key}
	         	id={key}
	            label={this.engineCompartment[key]}
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