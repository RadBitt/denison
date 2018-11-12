import React from 'react';

class ScNavEquipment extends React.Component {
	render() {
		return(
		<form onSubmit={console.log("1")}>
			<h2> Navigation Equipment </h2>
			<div className="form-group">
				<label htmlFor="vhf">VHF</label>
				<input ref={this.vhf} type="text" className="form-control" id="vhf" placeholder="OK" />
			</div>
			<div className="form-group">
				<label htmlFor="mfds">MFDs</label>
				<input ref={this.mfds} type="text" className="form-control" id="mfds" placeholder="OK" />
			</div>
			<div className="form-group">
				<label htmlFor="compasses">Compasses</label>
				<input ref={this.compasses} type="text" className="form-control" id="compasses" placeholder="OK" />
			</div>
			<div className="form-group">
				<label htmlFor="navLights">Nav Lights</label>
				<input ref={this.navLights} type="text" className="form-control" id="navLights" placeholder="OK" />
			</div>
			<div className="form-group">
				<label htmlFor="wind">Wind</label>
				<input ref={this.wind} type="text" className="form-control" id="wind" placeholder="OK" />
			</div>
			<div className="form-group">
				<label htmlFor="depth">Depth</label>
				<input ref={this.depth} type="text" className="form-control" id="depth" placeholder="OK" />
			</div>   
			<div className="form-group">
				<label htmlFor="gps">GPS</label>
				<input ref={this.gps} type="text" className="form-control" id="gps" placeholder="OK" />
			</div>
			<div className="form-group">
				<label htmlFor="ais">AIS</label>
				<input ref={this.ais} type="text" className="form-control" id="ais" placeholder="OK" />
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

export default ScNavEquipment;