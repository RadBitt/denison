import React from 'react';
import RadioToggle from './RadioToggle';

class ScAcAppliances extends React.Component {

	aCAppliancesLabels = {
		acRefrigerator: 'AC Refrigerator',
		microwave: 'Microwave'
	}

	waterHeaterLabels = {
		testElectrical: 'Test Electrical',
		testConvection: 'Test Convection'
	}

	airConditioningLabels = {
		testHeat: 'Test Heat',
		testCold: 'Test Cold'
	}

	divHtmlClass = 'form-check form-check-inline';
	inputHtmlClass = 'form-check-input position-static';
	labelHtmlClass = 'form-check-label';

	render() {
		return(
		<div>
			<h2>AC Appliances</h2>
			{Object.keys(this.aCAppliancesLabels).map(key => (
	         <RadioToggle
	         	key={key}
	         	id={key}
	            label={this.aCAppliancesLabels[key]}
				idName={key}
				divHtmlClass={this.divHtmlClass}
				inputHtmlClass={this.inputHtmlClass}
				labelHtmlClass={this.labelHtmlClass}
	         />
	        ))}
			<h2>Water Heater</h2>
			{Object.keys(this.waterHeaterLabels).map(key => (
	         <RadioToggle
	         	key={key}
	         	id={key}
	            label={this.waterHeaterLabels[key]}
				idName={key}
				divHtmlClass={this.divHtmlClass}
				inputHtmlClass={this.inputHtmlClass}
				labelHtmlClass={this.labelHtmlClass}
	         />
	        ))}
			<h2>Air Conditioner</h2>
			{Object.keys(this.airConditioningLabels).map(key => (
	         <RadioToggle
	         	key={key}
	         	id={key}
	            label={this.airConditioningLabels[key]}
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

export default ScAcAppliances;