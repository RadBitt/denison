import React from 'react';
import RadioToggle from './RadioToggle';

class ScAutoPilot extends React.Component {

	steeringSystemLabels = {
		steering: 'Steering',
		chain: 'Chain',
		hyrdraulic: 'Hyrdraulic',
		shaft: 'Shaft', 
		autopilot: 'Autopilot'
	}

	divHtmlClass = 'form-check form-check-inline';
	inputHtmlClass = 'form-check-input position-static';
	labelHtmlClass = 'form-check-label';

	render() {
		return(
			<div>
			<h2>Steering System</h2>
			{Object.keys(this.steeringSystemLabels).map(key => (
	         <RadioToggle
	         	key={key}
	         	id={key}
	            label={this.steeringSystemLabels[key]}
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

export default ScAutoPilot;