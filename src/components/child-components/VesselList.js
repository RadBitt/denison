import React from 'react';
import VesselEntry from './VesselEntry';

const VesselList = () => {
	return(
		<div>
			<h2>Active Vessel List</h2>
			<ul>
				<li><VesselEntry /></li>
			</ul>	
		</div>
	);
}

export default VesselList;