import React from 'react';
import VesselEntry from './VesselEntry';

class VesselList extends React.Component {
	render() {
		return(
			<div>
				<h2>Active Vessel List</h2>
				<ul>
					{Object.keys(this.props.vessels).map(key => (
			         <li key={key}><VesselEntry
			            index={key}
			            details={this.props.vessels[key]}
			            getVessel={this.props.getVessel}
			            location={this.props.location}
			            updateVesselKey={this.props.updateVesselKey}
			          /></li>
					))}
				</ul>	
			</div>
		);
	}
}
export default VesselList;