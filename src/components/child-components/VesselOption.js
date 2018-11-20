import React from 'react';
import {Link} from 'react-router-dom';

class VesselOption extends React.Component {
	render() {
		return(
			<option value={this.props.index}>{this.props.name}</option>
		);
	}
}

export default VesselOption;