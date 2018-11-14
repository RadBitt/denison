import React from 'react';
import { Route, Switch, Link } from 'react-router-dom';
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

class CreateSystemsCheck extends React.Component {

	render() {

		const url = this.props.match + '/createSystemsCheck';

		return(
			<div>
				<h2>New Systems Check</h2>
				<nav>
					<ul className="pagination pagination-sm justify-content-center">
					<li className="page-item"><Link className="page-link" to={url + "/scDetails"}>Vessel Details</Link></li> 
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
							() => <ScDetails />
					} />
					<Route path={url + "/scHullCondition" }
						render={
							() => <ScHullCondition />
					} />
					<Route path={url + "/scRiggingCondition" }
						render={
							() => <ScRiggingCondition />
					} />
					<Route path={url + "/scEngineCompartment" }
						render={
							() => <ScEngineCompartment />
					} />
					<Route path={url + "/scElectricalSystem" }
						render={
							() => <ScElectricalSystem />
					} />
					<Route path={url + "/scGenerator" }
						render={
							() => <ScGenerator />
					} />
					<Route path={url + "/scNavEquipment" }
						render={
							() => <ScNavEquipment />
					} />
					<Route path={url + "/scWaterSystems" }
						render={
							() => <ScWaterSystems />
					} />
					<Route path={url + "/scAutoPilot" }
						render={
							() => <ScAutoPilot />
					} />
					<Route path={url + "/scDcEquipment" }
						render={
							() => <ScDcEquipment />
					} />
					<Route path={url + "/scAcAppliances" }
						render={
							() => <ScAcAppliances />
					} />
				</Switch>
			</div>
		);
	}
}

export default CreateSystemsCheck;

