import React from 'react';
import RadioToggle from './RadioToggle';

class ScWaterSystems extends React.Component {

	parentId = 'waterSystems';

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
		const props = this.props;
		return(
			<div>
				<h2>Water Systems</h2>
				{Object.keys(this.waterSystemsLabels).map(key => (
		         <RadioToggle
		         	{...props}
		         	key={key}
		         	id={key}
		         	parentId={this.parentId}
		            label={this.waterSystemsLabels[key]}
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