import React from 'react';
import {Link} from 'react-router-dom';

class VesselEntry extends React.Component {

	handleClick = event => {
		this.props.updateVesselKey(event.target.id); 
	}

	render() {
		return(
			<div>
				<Link onClick={this.handleClick} id={this.props.index} to={this.props.location + '/' + this.props.index}>{this.props.details.vesselName}</Link>
			</div>
		);
	}
}

export default VesselEntry;