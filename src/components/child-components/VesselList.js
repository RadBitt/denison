import React from 'react';
import VesselEntry from './VesselEntry';

class VesselList extends React.Component {
	render() {
		const props = {...this.props}
		return(
			<div>
				<h2>Active Vessel List</h2>
				<ul>
					{Object.keys(this.props.vessels).map(key => (
			         <li key={key}><VesselEntry
			         	{...props}
			            index={key}
			            details={this.props.vessels[key]}
			          /></li>
					))}
				</ul>	
			</div>
		);
	}
}
export default VesselList;