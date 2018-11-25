import React from 'react';
import {Link} from 'react-router-dom';

class SingleVessel extends React.Component {

	vesselsCollection = this.props.vessels;
	vesselObj = this.vesselsCollection[this.props.vesselKey];

	mapFunction = (key) => {
		if (this.props.systemsChecks[key].vesselKey === this.props.vesselKey) {
			return (<li key={key}><Link index={key} to={this.props.match.path + '/' + key}>
			{this.props.systemsChecks[key].dateOfReport}</Link></li>);
		}
	}

	render() {
		return(
			<div>
				<h2>{this.vesselObj['vesselName']}: {this.props.subject}</h2>
				<ul>
					{Object.keys(this.props.systemsChecks).map(key => (this.mapFunction(key)))}
				</ul>
			</div>
		);
	}
}

export default SingleVessel