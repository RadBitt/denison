import React from 'react';
import InputField from './InputField';
import { dSniff } from '../../../bin/hFuncs';

class ScDetails extends React.Component {

	parentId1 = 'details';
	parentId2 = 'vesselInformation';

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
		const props = {
			...this.props
		};
		return(
			<div>
			<h2> System Check Details </h2>
			{Object.keys(this.detailsLabels).map(key => (
	         <InputField
	         	{...props}
	         	key={key}
	         	id={key}
	            parentId={this.parentId1}
	            label={this.detailsLabels[key]}
				divHtmlClass={this.divHtmlClass}
				inputHtmlClass={this.inputHtmlClass}
				labelHtmlClass={this.labelHtmlClass}
	         />
	        ))}
	        <h2>Vessel Information</h2>
	        {Object.keys(this.vesselInformationLabels).map(key => (
	         <InputField
	         	{...props}
	         	key={key}
	         	id={key}
	            parentId={this.parentId2}
	            label={this.vesselInformationLabels[key]}
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