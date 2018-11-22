import React from 'react';
import {Link} from 'react-router-dom';

class VesselEntry extends React.Component {

	render() {
		return(
			<div>
				<Link id={this.props.index} to={this.props.location.pathname + '/' + this.props.index}>{this.props.details.vesselName}</Link>
			</div>
		);
	}
}

export default VesselEntry;