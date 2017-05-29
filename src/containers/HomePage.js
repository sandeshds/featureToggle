import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

import Home from '../components/home'
import HomeAction from '../components/home/homeAction'

class HomePage extends Component {
    render() {
        return (
            <Home {...this.props} />                
        )
    }
}

HomePage.propTypes = Object.assign({}, Component.propTypes, {
})

function mapStateToProps(state) {
    return {
    	features : state.homeReducer.features,
    	allFeaturesLoader : state.homeReducer.showAllFeaturesLoader,
    	showFeatureLoader : state.homeReducer.showFeatureLoader
    }
}

function mapDispatchToProps(dispatch) {
    return {
        fetchFeatures: () => {
            dispatch(HomeAction.fetchFeatures(dispatch));
        },
        toggleState: (featureToToggle) => {
            dispatch(HomeAction.toggleState(dispatch, featureToToggle));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(HomePage)