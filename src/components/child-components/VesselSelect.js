import React from 'react';
import VesselOption from './VesselOption';

class VesselSelect extends React.Component {

	handleChange = event => {
		this.props.updateVessel(event.target.value);
	};

	handleSave = event => {
		console.log(event.target.value);
	};

	render() {
		let selectable;
		if(this.props.selectable) selectable = 
			<div className='row mt-2 mb-2'>
				<div className='col'>
					<select onChange={this.handleChange}>
						<option value=''>Select a vessel to begin...</option>
						{Object.keys(this.props.vessels).map(key => (
							<VesselOption
				         	key={key}
				            index={key}
				            name={this.props.vessels[key].vesselName}
				          />
						))}
					</select>
				</div>
			</div>
		else selectable =
			<div className='row mt-2 mb-2'>
				<div className='col'><p className='mb-0 pt-1'>System Check for: {this.props.vessels[this.props.vesselKey].vesselName}</p></div>
				<div className='col'><button onClick={this.handleSave} type='button' className='btn btn-outline-primary float-right'>Save & Reset</button></div>
			</div>
			
		return(
			<div className='container'>
				{selectable}
			</div>
		);
	}
}
export default VesselSelect;