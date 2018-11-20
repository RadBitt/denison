import React from 'react';
import RadioToggle from './RadioToggle';

class ScRiggingCondition extends React.Component {

	riggingHardwareLabels = {
	hardwareCondition: 'Hardware Condition',
	riggingCondition: 'Rigging Condition'
	};

	helmAreaLabels = {
		steeringSystem: 'Steering System',
		electronicsCondition: 'Electronics Condition'
	};

	anchorEquipmentLabels = {
		anchorWindlass: 'Anchor Windlass',
		anchorGear: 'Anchor Gear'
	};

	divHtmlClass = 'form-check form-check-inline';
	inputHtmlClass = 'form-check-input position-static';
	labelHtmlClass = 'form-check-label';

	render() {
		return(
			<div>
				<h2>Rigging</h2>
				{Object.keys(this.riggingHardwareLabels).map(key => (
		         <RadioToggle
		         	key={key}
		         	id={key}
		            label={this.riggingHardwareLabels[key]}
					idName={key}
					divHtmlClass={this.divHtmlClass}
					inputHtmlClass={this.inputHtmlClass}
					labelHtmlClass={this.labelHtmlClass}
		         />
		        ))}
		        <h2>Helm Area</h2>
		        {Object.keys(this.helmAreaLabels).map(key => (
		         <RadioToggle
		         	key={key}
		         	id={key}
		            label={this.helmAreaLabels[key]}
					idName={key}
					divHtmlClass={this.divHtmlClass}
					inputHtmlClass={this.inputHtmlClass}
					labelHtmlClass={this.labelHtmlClass}
		         />
		        ))}
		        <h2>Anchor Equipment</h2>
		        {Object.keys(this.anchorEquipmentLabels).map(key => (
		         <RadioToggle
		         	key={key}
		         	id={key}
		            label={this.anchorEquipmentLabels[key]}
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

export default ScRiggingCondition;