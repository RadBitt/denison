import React from 'react';
import { Route, Switch, Link } from 'react-router-dom';
import CreateSystemsCheck from './child-components/CreateSystemsCheck';
import VesselList from './child-components/VesselList';
import SingleVessel from './child-components/SingleVessel';

class SytemsCheck extends React.Component {

	state = {
		vesselKey: '0',
		defaultLocation: '',
		currentLocation: '',
		newSysChkLink: true
	};

	componentDidMount() {
		// console.log('syscheck mounted');
		this.setState({
			vesselKey: '0',
			currentLocation: this.props.location.pathname,
			defaultLocation: this.props.defUrl
		});
	};

	componentWillUnmount() {
		// console.log('syscheck unmounted');
	};

	componentDidUpdate(prevProps, prevState) {
		// console.log('syscheck updated');
		// const singleVesselExp = new RegExp('vessel-[0-9]*');
		if(prevState.vesselKey !== this.state.vesselKey) {
			this.setState({
				currentLocation: this.props.location.pathname
			})
		}
	};

	handleClick = event => {
		if (event.target.id === '1')
			this.setState({newSysChkLink: false})
		if (event.target.id === '2')
			this.setState({newSysChkLink: true})
	};

	updateVesselKey = key => {
		this.setState({
			vesselKey: key,
		});
	};

	render() {
		let sysCheckLink;
		if(this.state.newSysChkLink) {
			sysCheckLink = <ul><li><Link onClick={this.handleClick} id='1' to={this.state.defaultLocation + '/createSystemsCheck'}>New Systems-Check Form</Link></li></ul>
		} else {
			sysCheckLink = <ul><li><Link onClick={this.handleClick} id='2' to={this.state.defaultLocation}>Back</Link></li></ul>
		}
		
		return(
			<div>
				<h1>Systems Check</h1>
				{sysCheckLink}
				<Switch>
					<Route path={this.state.defaultLocation + '/createSystemsCheck' } render={
						(props) => <CreateSystemsCheck 
						{...props}
						match={this.state.defaultLocation}
						addSystemCheckForm={this.props.addSystemCheckForm}
						updateSystemCheckForm={this.props.updateSystemCheckForm}
						vessels={this.props.vessels}
					/>} />
					<Route path={this.state.defaultLocation + '/' + this.state.vesselKey}
					render={
						() => <SingleVessel 
						getVessel={this.props.getVessel}
						vesselKey={this.state.vesselKey}/>} />
					<Route exact path={this.state.defaultLocation}
					render={
						() => <VesselList 
						location={this.state.defaultLocation} 
						updateVesselKey={this.updateVesselKey}
						vessels={this.props.vessels}/>
					} />
				</Switch>
			</div>
		)
	}
}

export default SytemsCheck;