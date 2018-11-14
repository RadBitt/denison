import React from 'react';

class ManageVessel extends React.Component {

	vesselName = React.createRef();

	handleSubmit = event => {
		event.preventDefault();
		const vesselObj = {
			vesselName: this.vesselName.current.value, 
		}
		this.props.addVessel(vesselObj);
		this.props.history.push('/vessels');
	}

	render() {
		return(
			<div>
				<h2>Vessel Manager: Managing vessel</h2>
				<form onSubmit={this.handleSubmit}>
					<div className="form-group">
						<label htmlFor="vesselName">Vessel Name</label>
						<input ref={this.vesselName} type="text" className="form-control" id="vesselName" placeholder="Vessel Name" />
					</div>
					<button type="submit">Submit</button>
				</form>
			</div>
		);
	}
}

export default ManageVessel;