import React from 'react';
import RadioToggle from './RadioToggle';

class ScAcAppliances extends React.Component {

	parentId1 = 'aCAppliances';
	parentId2 = 'waterHeater';
	parentId3 = 'airConditioning';

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
		const props = this.props;
		return(
		<div>
			<h2>AC Appliances</h2>
			{Object.keys(this.aCAppliancesLabels).map(key => (
	         <RadioToggle
	         	{...props}
	         	key={key}
	         	id={key}
	         	parentId={this.parentId1}
	            label={this.aCAppliancesLabels[key]}
				divHtmlClass={this.divHtmlClass}
				inputHtmlClass={this.inputHtmlClass}
				labelHtmlClass={this.labelHtmlClass}
				updateSystemsCheck={this.props.updateSystemsCheck}
	         />
	        ))}
			<h2>Water Heater</h2>
			{Object.keys(this.waterHeaterLabels).map(key => (
	         <RadioToggle
	         	{...props}
	         	key={key}
	         	id={key}
	         	parentId={this.parentId2}
	            label={this.waterHeaterLabels[key]}
				divHtmlClass={this.divHtmlClass}
				inputHtmlClass={this.inputHtmlClass}
				labelHtmlClass={this.labelHtmlClass}
				updateSystemsCheck={this.props.updateSystemsCheck}
	         />
	        ))}
			<h2>Air Conditioner</h2>
			{Object.keys(this.airConditioningLabels).map(key => (
	         <RadioToggle
	         	{...props}
	         	key={key}
	         	id={key}
	         	parentId={this.parentId3}
	            label={this.airConditioningLabels[key]}
				divHtmlClass={this.divHtmlClass}
				inputHtmlClass={this.inputHtmlClass}
				labelHtmlClass={this.labelHtmlClass}
				updateSystemsCheck={this.props.updateSystemsCheck}
	         />
	        ))}
		</div>
		);
	}
}

export default ScAcAppliances;