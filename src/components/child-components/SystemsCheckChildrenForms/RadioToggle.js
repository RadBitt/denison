import React from 'react'; 

class RadioToggle extends React.Component {
	
	myRef1 = React.createRef();
	myRef2 = React.createRef();

	label = this.props.label;
	idName = this.props.idName;
	radioLabel = this.props.radioLabel;
	divHtmlClass = this.props.divHtmlClass;
	inputHtmlClass = this.props.inputHtmlClass;
	labelHtmlClass = this.props.labelHtmlClass;
	defaultValue1 = 'true';
	defaultValue2 = 'false';
	radioLabel1 = 'Pass';
	radioLabel2 = 'Requires Attention';

	render() {

		return(
			<div>
				<h5 htmlFor={this.idName}>{this.label}</h5>
				<div className={this.divHtmlClass}>
					<input ref={this.myRef1} type="radio" className={this.inputHtmlClass} name={this.idName} id={this.idName + '_p'} value={this.defaultValue1} defaultChecked />
					<label htmlFor={this.idName} className={this.labelHtmlClass}>{this.radioLabel1}</label>
				</div>
				<div className={this.divHtmlClass}>
					<input ref={this.myRef2} type="radio" className={this.inputHtmlClass} name={this.idName} id={this.idName + '_f'} value={this.defaultValue2} />
					<label htmlFor={this.idName} className={this.labelHtmlClass}>{this.radioLabel2}</label>
				</div>
			</div>
		);
	}
}

export default RadioToggle;