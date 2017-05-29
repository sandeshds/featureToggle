import React, { Component } from 'react';
import './FeatureToggle.css';
import { Router, Route, browserHistory } from 'react-router';
import * as containers from '../containers';
class FeatureToggle extends Component {	
  render() {
    return (		
    	<div>
					<Router history={browserHistory}>
						<Route path="/" component={containers.HomePage}/>
					</Router>
	  	</div>
    );
  }
}

export default FeatureToggle;
