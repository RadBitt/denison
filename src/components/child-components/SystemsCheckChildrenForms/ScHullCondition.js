import React from 'react';

class ScHullCondition extends React.Component {
	render() {
		return(
		
		<form onSubmit={console.log("1")}>
			<h2> Hull Condition </h2>
			<div className="form-group">	
				<label htmlFor="waterlineCondition">Waterline condition</label>
				<input ref={this.waterlineCondition} type="text" className="form-control" id="waterlineCondition" placeholder="OK"/>
			</div>
			<div className="form-group">
				<label htmlFor="hullDamage">Hull damage</label>
				<input ref={this.hullDamage} type="text" className="form-control" id="hullDamage" placeholder="OK"/>
			</div>
			<div className="form-group">
				<label htmlFor="deckHardware">Deck hardware</label>
				<input ref={this.deckHardware} type="text" className="form-control" id="deckHardware" placeholder="OK"/>
			</div>
		<button type="submit">Submit</button>
		</form>
		);
	}
}

export default ScHullCondition;