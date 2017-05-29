import filter from 'lodash/filter';
import map from 'lodash/map';

export default {
    fetchFeatures : (dispatch) => {
        return dispatch => {
            // return fetch("https://www.google.com", {
            //     method: 'GET',
            // }).then((response) => {
            //     return response.json();
            // }).then((jsonResponse) => {
                return dispatch({type: 'FEATURES_FETCHED', features: {"CarnetEnabled" : false} });
            // })
        }
    },

    toggleState : (dispatch, featureToToggle) => {
        return dispatch => {
                dispatch({type: 'BEGIN_FEATURE_TOGGLE'});
            // return fetch("https://www.google.com", {
            //     method: 'GET',
            // }).then((response) => {
            //     return response.json();
            // }).then((jsonResponse) => {
                return dispatch({type: 'FEATURE_TOGGLED'});
            // })
        }
    }
}