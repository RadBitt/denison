import React from 'react';
import { Route, Switch, Link } from 'react-router-dom';
import CreateSystemsCheck from './child-components/CreateSystemsCheck';
import VesselList from './child-components/VesselList';
import SingleVessel from './child-components/SingleVessel';
import ViewSystemCheck from './child-components/ViewSystemCheck';

class SytemsCheck extends React.Component {

	state = {
		newSysChkLink: true
	};

	componentDidMount() {

	};

	componentWillUnmount() {

	};

	componentDidUpdate(prevProps, prevState) {

	};

	vesselKeyRegEx = new RegExp('vessel-[0-9]*');
	sysCheckKeyRegEx = new RegExp('syscheck-[0-9]*'); 

	handleClick = event => {
		if (event.target.id === '1')
			this.setState({newSysChkLink: false})
		if (event.target.id === '2')
			this.setState({newSysChkLink: true})
	};

	render() {

		let vesselKey = '...';
		const url = this.props.location.pathname
		if (url.match(this.vesselKeyRegEx) !== null) 
			vesselKey = url.match(this.vesselKeyRegEx)[0];

		let sysCheckKey = '...';
		if (url.match(this.sysCheckKeyRegEx) !== null) 
			sysCheckKey = url.match(this.sysCheckKeyRegEx)[0];

		let sysCheckLink;
		if(this.state.newSysChkLink) {
			sysCheckLink = <ul><li><Link onClick={this.handleClick} id='1' to={'/systemsCheck' + '/createSystemsCheck'}>New Systems-Check Form</Link></li></ul>
		} else {
			sysCheckLink = <ul><li><Link onClick={this.handleClick} id='2' to={'systemsCheck'}>Back</Link></li></ul>
		}

		console.log(this.props.match.path + '/' + vesselKey + '/' + sysCheckKey);

		return(
			<div>
				<h1>Systems Check</h1>
				{sysCheckLink}
				<Switch>
					<Route path={this.props.match.path + '/createSystemsCheck' } render={
						(props) => <CreateSystemsCheck 
						{...props}
						addSystemCheckForm={this.props.addSystemCheckForm}
						updateSystemCheckForm={this.props.updateSystemCheckForm}
						vessels={this.props.vessels}
					/>} />
					<Route path={this.props.match.path + '/' + vesselKey + '/' + sysCheckKey}
					render={
						(props) => <ViewSystemCheck 
						{...props}
						vesselKey={vesselKey}
						systemsChecks={this.props.systemsChecks}
						sysCheckKey={sysCheckKey}
					/>} />
					<Route path={this.props.match.path + '/' + vesselKey}
					render={
						(props) => <SingleVessel 
						{...props}
						vessels={this.props.vessels}
						vesselKey={vesselKey}
						subject={'Systems Checks'}
						systemsChecks={this.props.systemsChecks}
					/>} />
					<Route path={this.props.match.path}
					render={
						(props) => <VesselList
						{...props}
						vessels={this.props.vessels}/>
					} />
				</Switch>
			</div>
		)
	}
}

export default SytemsCheck;