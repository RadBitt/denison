import React from 'react';
import RadioToggle from './RadioToggle';

class ScElectricalSystem extends React.Component {

	parentId1 = 'electricalSystem';
	parentId2 = 'allLights';

	electricalSystemLabels = {
		shorePowerChord:  'Shore Power Chord',
		shorePowerRecepitcle: 'Shore Power Recepitcle',
		polarity: 'Reverse Polarity',
		chargingSystem: 'Charging System',
		inverterSystem: 'Inverter System',
		batteryBanks: 'Battery Banks',
		batteryBanksSecure: 'Battery Banks Secure',
		batteryCablesSecure: 'Battery Cables Secure',
		batteryCables: 'Battery Cables',
		batterySwitches: 'Battery Switches',
		dCElectricalPanel: 'DC Panel',
		aCElectricalPanel: 'AC Panel',
		gauges: 'All Gauges'
	}

	allLightsLabels = {
		lights: 'All Lights'
	}

	divHtmlClass = 'form-check form-check-inline';
	inputHtmlClass = 'form-check-input position-static';
	labelHtmlClass = 'form-check-label';

	render() {
		const props = this.props;
		return(
		<div>
			<h2> Electrical System </h2>
			{Object.keys(this.electricalSystemLabels).map(key => (
	         <RadioToggle
	         	{...props}
	         	key={key}
	         	id={key}
	         	parentId={this.parentId1}
	            label={this.electricalSystemLabels[key]}
				divHtmlClass={this.divHtmlClass}
				inputHtmlClass={this.inputHtmlClass}
				labelHtmlClass={this.labelHtmlClass}
	         />
	        ))}
			<h2> Lights </h2>
			{Object.keys(this.allLightsLabels).map(key => (
	         <RadioToggle
	         	{...props}
	         	key={key}
	         	id={key}
	         	parentId={this.parentId2}
	            label={this.allLightsLabels[key]}
				divHtmlClass={this.divHtmlClass}
				inputHtmlClass={this.inputHtmlClass}
				labelHtmlClass={this.labelHtmlClass}
	         />
	        ))}
		</div>
		);
	}
}

export default ScElectricalSystem;