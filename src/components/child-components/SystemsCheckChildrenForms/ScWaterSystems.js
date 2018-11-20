import React from 'react';
import RadioToggle from './RadioToggle';

class ScWaterSystems extends React.Component {

	waterSystemsLabels = {
	 	testToilets: 'Test Toilets',
		maceratorPump: 'Macerator Pump',
		holdingTank: 'Holding Tank',
		waterSupply: 'Water Supply',
		thruHulls: 'Thru Hulls',
		waterTank: 'Water Tank',
		waterHoses: 'Water Hoses',
		sanitaryHoses: 'Sanitary Hoses',
		reportLeaks: 'Report Leaks'
	}

	divHtmlClass = 'form-check form-check-inline';
	inputHtmlClass = 'form-check-input position-static';
	labelHtmlClass = 'form-check-label';

	render() {
		return(
			<div>
				<h2>Water Systems</h2>
				{Object.keys(this.waterSystemsLabels).map(key => (
		         <RadioToggle
		         	key={key}
		         	id={key}
		            label={this.waterSystemsLabels[key]}
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

export default ScWaterSystems;