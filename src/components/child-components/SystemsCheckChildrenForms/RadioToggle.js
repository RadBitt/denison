import React from 'react'; 
import {dSniff} from '../../../bin/hFuncs';

class RadioToggle extends React.Component {
	
	myRef1 = React.createRef();
	myRef2 = React.createRef();

	label = this.props.label;
	parentId = this.props.parentId;
	id = this.props.id;
	radioLabel = this.props.radioLabel;
	divHtmlClass = this.props.divHtmlClass;
	inputHtmlClass = this.props.inputHtmlClass;
	labelHtmlClass = this.props.labelHtmlClass;
	defaultValue1 = true;
	defaultValue2 = false;
	radioLabel1 = 'Pass';
	radioLabel2 = 'Requires Attention';
	tempObjValue = dSniff(this.props.formObj, this.parentId, this.id);

	handleClick = event => {
		this.props.updateSystemsCheck(this.parentId, this.id, event.target.value)
	}

	render() {
		if(this.tempObjValue === 'true') {
			this.defaultValue1 = true;
			this.defaultValue2 = false;
		} else if (this.tempObjValue === 'false') {
			this.defaultValue1 = false;
			this.defaultValue2 = true;
		}
		return(
			<div>
				<h5 htmlFor={this.id}>{this.label}</h5>
				<div className={this.divHtmlClass}>
					<input onClick={this.handleClick} ref={this.myRef1} type="radio" className={this.inputHtmlClass} name={this.id} id={this.id + '_p'} value={this.defaultValue1} defaultChecked={this.defaultValue1}/>
					<label htmlFor={this.id} className={this.labelHtmlClass}>{this.radioLabel1}</label>
				</div>
				<div className={this.divHtmlClass}>
					<input onClick={this.handleClick} ref={this.myRef2} type="radio" className={this.inputHtmlClass} name={this.id} id={this.id + '_f'} value={this.defaultValue2} defaultChecked={this.defaultValue2}/>
					<label htmlFor={this.id} className={this.labelHtmlClass}>{this.radioLabel2}</label>
				</div>
			</div>
		);
	}
}

export default RadioToggle;