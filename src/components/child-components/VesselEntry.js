import React from 'react';
import {Link} from 'react-router-dom';

class VesselEntry extends React.Component {

	handleClick(event) {
		console.log(event.target);
	}

	render() {
		return(
			<div>
				<Link onClick={this.handleClick} key={this.props.index} to={this.props.location + '/' + this.props.index}>{this.props.details.vesselName}</Link>
			</div>
		);
	}
}

export default VesselEntry;