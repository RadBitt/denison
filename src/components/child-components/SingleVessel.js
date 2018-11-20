import React from 'react';

class SingleVessel extends React.Component {

	render() {
		const vesselObj = this.props.getVessel(this.props.vesselKey);
		return(
			<div>
				<h2>{vesselObj.vesselName}: Systems Checks</h2>
			</div>
		);
	}
}

export default SingleVessel