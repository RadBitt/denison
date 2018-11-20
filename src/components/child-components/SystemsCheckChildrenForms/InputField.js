import React from 'react'; 

class InputField extends React.Component {
	
	myRef = React.createRef();

	label = this.props.label;
	idName = this.props.idName;
	divHtmlClass = this.props.divHtmlClass;
	inputHtmlClass = this.props.inputHtmlClass;
	labelHtmlClass = this.props.labelHtmlClass;

	render() {
		return(
			<div className={this.divHtmlClass}>
				<label className={this.labelHtmlClass} htmlFor={this.idName}>{this.label}</label>
				<input ref={this.myRef} type="text" className={this.inputHtmlClass} id={this.idName} />
			</div>
		);
	}
}

export default InputField;