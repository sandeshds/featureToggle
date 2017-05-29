import React from 'react';
import ReactDOM from 'react-dom';
import FeatureToggle from './featureToggle';
import './index.scss';
import { Provider } from 'react-redux';
import createLogger from 'redux-logger';
import { applyMiddleware, createStore, combineReducers, compose } from 'redux';
import injectTapEventPlugin from 'react-tap-event-plugin';
import thunk from 'redux-thunk';
import homeReducer from './components/home/homeReducer';
import 'semantic-ui-css/semantic.min.css';
 
injectTapEventPlugin();

let reducers = combineReducers({
    homeReducer
});

const logger = createLogger();
const store = compose(
    applyMiddleware(thunk, logger)
)(createStore)(reducers, {/*intial state*/ });


ReactDOM.render(
    	<Provider store={store}>
			<FeatureToggle />
		</Provider>,
	document.getElementById('root')
);
