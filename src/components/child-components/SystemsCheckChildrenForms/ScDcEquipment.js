import React from 'react';
import RadioToggle from './RadioToggle';

class ScDcEquipment extends React.Component {

	parentId = 'dCEquipment';

	dCEquipmentLabels = {
		waterPressure: 'Water Pressure',
		bilgePumps: 'Bilge Pumps',
		dcRefrigerator: 'DC Refrigerator',
		tv: 'TV',
		dvd: 'DVD',
		stove: 'Stove',
		propane: 'Propane'
	}

	divHtmlClass = 'form-check form-check-inline';
	inputHtmlClass = 'form-check-input position-static';
	labelHtmlClass = 'form-check-label';

	render() {
		const props = this.props;
		return(
			<div>
			<h2>DC Equipment</h2>
			{Object.keys(this.dCEquipmentLabels).map(key => (
	         <RadioToggle
	         	{...props}
	         	key={key}
	         	id={key}
	         	parentId={this.parentId}
	            label={this.dCEquipmentLabels[key]}
				divHtmlClass={this.divHtmlClass}
				inputHtmlClass={this.inputHtmlClass}
				labelHtmlClass={this.labelHtmlClass}
	         />
	        ))}
			</div>
		);
	}
}

export default ScDcEquipment;