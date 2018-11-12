import React from 'react';

class ScAutoPilot extends React.Component {
	render() {
		return(
		<form onSubmit={console.log("1")}>
			<h2> Autopilot </h2>
			<div className="form-group">
				<label htmlFor="steering">Steering</label>
				<input ref={this.steering} type="text" className="form-control" id="steering" placeholder="OK" />
			</div>
			<div className="form-group">
				<label htmlFor="chain">Chain</label>
				<input ref={this.chain} type="text" className="form-control" id="chain" placeholder="OK" />
			</div>
			<div className="form-group">
				<label htmlFor="hyrdraulic">Hyrdraulic</label>
				<input ref={this.hyrdraulic} type="text" className="form-control" id="hyrdraulic" placeholder="OK" />
			</div>
			<div className="form-group">
				<label htmlFor="shaft">Shaft</label>
				<input ref={this.shaft} type="text" className="form-control" id="shaft" placeholder="OK" />
			</div>
			<div className="form-group">
				<label htmlFor="autopilot">Autopilot</label>
				<input ref={this.autopilot} type="text" className="form-control" id="autopilot" placeholder="OK" />
			</div>
		<button type="submit">Submit</button>
		</form>
		);
	}
}

export default ScAutoPilot;