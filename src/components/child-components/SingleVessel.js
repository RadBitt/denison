import React from 'react';

class SingleVessel extends React.Component {

	render() {
		const vesselsCollection = this.props.vessels
		const vesselObj = vesselsCollection[this.props.vesselKey];
		return(
			<div>
				<h2>{vesselObj['vesselName']}: {this.props.subject}</h2>
			</div>
		);
	}
}

export default SingleVessel