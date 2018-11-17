import React from 'react';
import RadioToggle from './RadioToggle';

class ScElectricalSystem extends React.Component {

	electricalSystem = {
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

	divHtmlClass = 'form-check form-check-inline';
	inputHtmlClass = 'form-check-input position-static';
	labelHtmlClass = 'form-check-label';

	render() {
		return(
		<div>
			<h2> Electrical System </h2>
			{Object.keys(this.electricalSystem).map(key => (
	         <RadioToggle
	         	key={key}
	         	id={key}
	            label={this.electricalSystem[key]}
				idName={key}
				divHtmlClass={this.divHtmlClass}
				inputHtmlClass={this.inputHtmlClass}
				labelHtmlClass={this.labelHtmlClass}
	         />
	        ))}
			<h2> Lights </h2>
		</div>
		);
	}
}

export default ScElectricalSystem;