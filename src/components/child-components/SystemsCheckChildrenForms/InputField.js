import React from 'react'; 
import {dSniff} from '../../../bin/hFuncs';

class InputField extends React.Component {
	
	myRef = React.createRef();

	parentId = this.props.parentId;
	label = this.props.label;
	id = this.props.id;
	divHtmlClass = this.props.divHtmlClass;
	inputHtmlClass = this.props.inputHtmlClass;
	labelHtmlClass = this.props.labelHtmlClass;
	tempObj = dSniff(this.props.formObj, this.parentId, this.id);

	handleBlur = event => {
		this.props.updateSystemsCheck(this.parentId, this.id, event.target.value)
	}

	render() {
		return(
			<div className={this.divHtmlClass}>
				<label className={this.labelHtmlClass} htmlFor={this.id}>{this.label}</label>
				<input defaultValue={this.tempObj} onBlur={this.handleBlur} id={this.id} ref={this.myRef} className={this.inputHtmlClass} type='text'/>
			</div>
		);
	}
}

export default InputField;