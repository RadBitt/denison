import React from 'react';
import {BrowserRouter , Route, Switch, Link} from 'react-router-dom';
import Dashboard from './Dashboard';
import LogHours from './LogHours';
import LogForm from './child-components/LogForm';
import ReceiptsReport from './ReceiptsReport';

const Router = () => (
	<BrowserRouter>
		<div>
			<ul>
				<li><Link to="/">Home</Link></li>
				<li><Link to="/loghours">Log Hours</Link></li>
				<li><Link to="/receiptsReport">Receipts Report</Link></li>
			</ul>
			<Switch>
				<Route exact path="/" component={Dashboard} />
				<Route path="/loghours" component={LogHours} />
				<Route path="/loghoursform" component={LogForm} />
				<Route path="/receiptsReport" component={ReceiptsReport} />
			</Switch>
		</div>
	</BrowserRouter>
)

export default Router;