import React from 'react';

class SingleVessel extends React.Component {

	vesselsCollection = this.props.vessels;
	vesselObj = this.vesselsCollection[this.props.vesselKey];

	render() {
		console.log(this.vesselsCollection);
		return(
			<div>
				<h2>{this.vesselObj['vesselName']}: {this.props.subject}</h2>
			</div>
		);
	}
}

export default SingleVessel