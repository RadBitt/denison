import React from 'react';

class LogForm extends React.Component {

	dateInputRef = React.createRef();

	saveLogData(event) {
		event.preventDefault();
	}

	render() {
		return(
			<form onSubmit={this.saveLogData}>
			<input 
				type="text" 
				ref={this.dateInputRef}
				required placeholder="Date" 
				defaultValue="10-30-2018"
			/>
			<button type="submit">Submit</button>
			</form>
		);
	}
}

export default LogForm;