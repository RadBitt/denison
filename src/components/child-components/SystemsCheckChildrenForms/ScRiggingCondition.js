import React from 'react';
import RadioToggle from './RadioToggle';

class ScRiggingCondition extends React.Component {

	parentId1 = 'riggingHardware';
	parentId2 = 'helmArea';
	parentId3 = 'anchorEquipment';

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
		const props = this.props;
		return(
			<div>
				<h2>Rigging</h2>
				{Object.keys(this.riggingHardwareLabels).map(key => (
		         <RadioToggle
		         	{...props}
		         	key={key}
		         	id={key}
		         	parentId={this.parentId1}
		            label={this.riggingHardwareLabels[key]}
					divHtmlClass={this.divHtmlClass}
					inputHtmlClass={this.inputHtmlClass}
					labelHtmlClass={this.labelHtmlClass}
		         />
		        ))}
		        <h2>Helm Area</h2>
		        {Object.keys(this.helmAreaLabels).map(key => (
		         <RadioToggle
		         	{...props}
		         	key={key}
		         	id={key}
		         	parentId={this.parentId2}
		            label={this.helmAreaLabels[key]}
					divHtmlClass={this.divHtmlClass}
					inputHtmlClass={this.inputHtmlClass}
					labelHtmlClass={this.labelHtmlClass}
		         />
		        ))}
		        <h2>Anchor Equipment</h2>
		        {Object.keys(this.anchorEquipmentLabels).map(key => (
		         <RadioToggle
		         	{...props}
		         	key={key}
		         	id={key}
		         	parentId={this.parentId3}
		            label={this.anchorEquipmentLabels[key]}
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