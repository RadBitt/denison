import React from 'react';
import { Route, Switch, Link } from 'react-router-dom';
import VesselSelect from './VesselSelect';
import object from '../../bin/sysCheckJson/sysCheckFormObjTemp';
import ScDetails from './SystemsCheckChildrenForms/ScDetails';
import ScHullCondition from './SystemsCheckChildrenForms/ScHullCondition';
import ScRiggingCondition from './SystemsCheckChildrenForms/ScRiggingCondition';
import ScEngineCompartment from './SystemsCheckChildrenForms/ScEngineCompartment';
import ScElectricalSystem from './SystemsCheckChildrenForms/ScElectricalSystem';
import ScGenerator from './SystemsCheckChildrenForms/ScGenerator';
import ScNavEquipment from './SystemsCheckChildrenForms/ScNavEquipment';
import ScWaterSystems from './SystemsCheckChildrenForms/ScWaterSystems';
import ScAutoPilot from './SystemsCheckChildrenForms/ScAutoPilot';
import ScDcEquipment from './SystemsCheckChildrenForms/ScDcEquipment';
import ScAcAppliances from './SystemsCheckChildrenForms/ScAcAppliances';
import { dSniff } from '../../bin/hFuncs';

class CreateSystemsCheck extends React.Component {

	state = {
		selectable: true,
		systemCheckForm: object,
		systemCheckKey: '0',
		vesselKey: ''
	};

	componentDidUpdate(prevProps, prevState) {
		if (this.state.systemCheckForm !== prevState.systemCheckForm) {
    		this.props.updateSystemCheckForm(this.state.systemCheckKey, this.state.systemCheckForm);
  		}
	};

	initializeForm = key => {
		let sysCheckKey;
		const tempObj = this.state.systemCheckForm;
		tempObj['vesselKey'] = key;
		this.setState({
			systemCheckForm: tempObj,
			selectable: false,
			vesselKey: key
		});
		sysCheckKey = this.props.addSystemCheckForm(this.state.systemCheckForm);
		this.setState({
			systemCheckKey: sysCheckKey,
		});
	};

	updateSystemsCheck = (pkey, ckey, value) => {
		let tempObj = this.state.systemCheckForm;
		tempObj = dSniff(tempObj, pkey, ckey, value);
		console.log(tempObj)
		this.setState({
			systemCheckForm: tempObj
		});
	};

	render() {

		const props = {
			formObj: this.state.systemCheckForm,
			updateSystemsCheck: this.updateSystemsCheck
		}

		const url = this.props.match + '/createSystemsCheck';

		return(
			<div>
				<h2>New Systems Check</h2>
				<VesselSelect
					history={this.props.history}
					selectable={this.state.selectable}
					initializeForm={this.initializeForm}
					vessels={this.props.vessels}
					vesselKey={this.state.vesselKey}
				/>
				<nav>
					<ul className="pagination pagination-sm justify-content-center">
					<li className="page-item"><Link disabled className="page-link" to={url + "/scDetails"}>Vessel Details</Link></li> 
					<li className="page-item"><Link className="page-link" to={url + "/scHullCondition"}>Hull Condition</Link></li> 
					<li className="page-item"><Link className="page-link" to={url + "/scRiggingCondition"}>Rigging Condition</Link></li> 
					<li className="page-item"><Link className="page-link" to={url + "/scEngineCompartment"}>Engine Compartment</Link></li> 
					<li className="page-item"><Link className="page-link" to={url + "/scElectricalSystem"}>Electrical System</Link></li> 
					<li className="page-item"><Link className="page-link" to={url + "/scGenerator"}>Vessel Generator</Link></li> 
					<li className="page-item"><Link className="page-link" to={url + "/scNavEquipment"}>Nav Equipment</Link></li> 
					<li className="page-item"><Link className="page-link" to={url + "/scWaterSystems"}>Water Systems</Link></li> 
					<li className="page-item"><Link className="page-link" to={url + "/scAutoPilot"}>Auto Pilot</Link></li> 
					<li className="page-item"><Link className="page-link" to={url + "/scDcEquipment"}>DC Equipment</Link></li> 
					<li className="page-item"><Link className="page-link" to={url + "/scAcAppliances"}>AC Appliances</Link></li> 
				</ul>
				</nav>
				<Switch>
					<Route path={url + "/scDetails" }
						render={
							() => <ScDetails
							{...props}
					/>} />
					<Route path={url + "/scHullCondition" }
						render={
							() => <ScHullCondition
							{...props}
					/>} />
					<Route path={url + "/scRiggingCondition" }
						render={
							() => <ScRiggingCondition
							{...props}
					/>} />
					<Route path={url + "/scEngineCompartment" }
						render={
							() => <ScEngineCompartment
							{...props}
					/>} />
					<Route path={url + "/scElectricalSystem" }
						render={
							() => <ScElectricalSystem
							{...props}
					/>} />
					<Route path={url + "/scGenerator" }
						render={
							() => <ScGenerator
							{...props}
					/>} />
					<Route path={url + "/scNavEquipment" }
						render={
							() => <ScNavEquipment
							{...props}
					/>} />
					<Route path={url + "/scWaterSystems" }
						render={
							() => <ScWaterSystems
							{...props}
					/>} />
					<Route path={url + "/scAutoPilot" }
						render={
							() => <ScAutoPilot
							{...props}
					/>} />
					<Route path={url + "/scDcEquipment" }
						render={
							() => <ScDcEquipment
							{...props}
					/>} />
					<Route path={url + "/scAcAppliances" }
						render={
							() => <ScAcAppliances
							{...props}
					/>} />
				</Switch>
			</div>
		);
	}
}

export default CreateSystemsCheck;

