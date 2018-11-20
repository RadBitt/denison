import React from 'react';
import RadioToggle from './RadioToggle';

class ScNavEquipment extends React.Component {

	navigationEquipmentLabels = {
		vhf: 'VHF',
		mfds: 'Multi-Function Displays',
		compasses: 'Compasses',
		navLights: 'Navigation Lights',
		wind: 'Wind',
		depth: 'Depth',
		gps: 'GPS',
		ais: 'AIS',
		autopilot: 'Auto-pilot'
	}

	divHtmlClass = 'form-check form-check-inline';
	inputHtmlClass = 'form-check-input position-static';
	labelHtmlClass = 'form-check-label';

	render() {
		return(
			<div>
				<h2>Navigation Equipment</h2>
				{Object.keys(this.navigationEquipmentLabels).map(key => (
		         <RadioToggle
		         	key={key}
		         	id={key}
		            label={this.navigationEquipmentLabels[key]}
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

export default ScNavEquipment;