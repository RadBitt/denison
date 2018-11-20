import React from 'react';
import InputField from './InputField';

class ScDetails extends React.Component {

	detailsLabels = {
		technician: 'Technician',
		dateOfReport: 'Date',
	}

	vesselInformationLabels = {
		owner: 'Owner',
		vesselModel: 'Vessel Model',
		hullNumber: 'Hull Number',
		hullType: 'Hull Type'
	}

	divHtmlClass = 'form-group';
	inputHtmlClass = 'form-control';
	labelHtmlClass = '';

	render() {

		return(
			<div>
			<h2> System Check Details </h2>
			{Object.keys(this.detailsLabels).map(key => (
	         <InputField
	         	key={key}
	         	id={key}
	            label={this.detailsLabels[key]}
				idName={key}
				divHtmlClass={this.divHtmlClass}
				inputHtmlClass={this.inputHtmlClass}
				labelHtmlClass={this.labelHtmlClass}
	         />
	        ))}
	        <h2>Vessel Information</h2>
	        {Object.keys(this.vesselInformationLabels).map(key => (
	         <InputField
	         	key={key}
	         	id={key}
	            label={this.vesselInformationLabels[key]}
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

export default ScDetails;