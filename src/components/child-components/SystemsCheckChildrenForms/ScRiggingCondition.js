import React from 'react';

class ScRiggingCondition extends React.Component {
	render() {
		return(
			<form onSubmit={console.log("1")}>
				<h2> Rigging </h2>
				<div className="form-group">
					<label htmlFor="hardwareCondition">Hardware Condition</label>
					<input ref={this.hardwareCondition} type="text" className="form-control" id="hardwareCondition" placeholder="OK"/>
				</div>
				<div className="form-group">
					<label htmlFor="riggingCondition">Rigging Condition</label>
					<input ref={this.riggingCondition} type="text" className="form-control" id="riggingCondition" placeholder="OK"/>
				</div>
				<h2> Helm </h2>
				<div className="form-group">
					<label htmlFor="steeringSystem">Steering System</label>
					<input ref={this.steeringSystem} type="text" className="form-control" id="steeringSystem" placeholder="OK"/>
				</div>
				<div className="form-group">
					<label htmlFor="electronicsCondition">Electronics Condition</label>
					<input ref={this.electronicsCondition} type="text" className="form-control" id="electronicsCondition" placeholder="OK"/>
				</div>
				<h2> Anchor Equipment </h2>
				<div className="form-group">
					<label htmlFor="anchorWindlass">Anchor Windlass</label>
					<input ref={this.anchorWindlass} type="text" className="form-control" id="anchorWindlass" placeholder="OK" />
				</div>
				<div className="form-group">
					<label htmlFor="anchorGear">Anchor Gear</label>
					<input ref={this.anchorGear} type="text" className="form-control" id="anchorGear" placeholder="OK" />
				</div>
			<button type="submit">Submit</button>
			</form>
		);
	}
}

export default ScRiggingCondition;