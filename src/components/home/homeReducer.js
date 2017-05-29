import {browserHistory} from 'react-router';

let initialState = {
    features: [],
    showAllFeaturesLoader : true,
    showFeatureLoader: false
}

export default function HomeReducer(state = initialState, action) {
    let newState = Object.assign({}, state)
    switch (action.type) {
        case 'FEATURES_FETCHED':
            newState.features = action.features;
            newState.showAllFeaturesLoader = false;
            break;
        case 'FEATURE_TOGGLED':
            newState.showFeatureLoader = false;
            browserHistory.push('/');
            break;
        case 'BEGIN_FEATURE_TOGGLE':
            newState.showFeatureLoader = true;
            break;
        default:
            break;
    }
    return newState
}