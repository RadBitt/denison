import React from 'react';

class VesselOption extends React.Component {
	render() {
		return(
			<option value={this.props.index}>{this.props.name}</option>
		);
	}
}

export default VesselOption;