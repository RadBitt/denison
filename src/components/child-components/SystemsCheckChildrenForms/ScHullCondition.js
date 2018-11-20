import React from 'react';
import RadioToggle from './RadioToggle';

class ScHullCondition extends React.Component {

	hullConditionLabels = {
		waterlineCondition: 'Waterline Condition',
		hullDamage: 'Hull Damage',
		deckHardware: 'Deck Hardware'
	}

	divHtmlClass = 'form-check form-check-inline';
	inputHtmlClass = 'form-check-input position-static';
	labelHtmlClass = 'form-check-label';

	render() {
		return(
		<div>
			<h2> Hull Condition </h2>
			{Object.keys(this.hullConditionLabels).map(key => (
	         <RadioToggle
	         	key={key}
	         	id={key}
	            label={this.hullConditionLabels[key]}
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

export default ScHullCondition;